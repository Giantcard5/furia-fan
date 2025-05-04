'use client'

import {
    useState,
    useEffect
} from 'react';

import { useRouter } from 'next/navigation';

import {
    ShoppingBag,
    Search,
    Star,
    Heart,
    ShoppingCart,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

import {
    currencyFormatter,
    currencySchema
} from '@/utils/formatters';

import { apiService } from '@/lib/api-service';
import { Product } from '@/types/products';
import { cacheService } from '@/lib/cache-service';

export default function ShopPage() {
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState('');
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [sortOption, setSortOption] = useState('featured');
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const [categoryFilters, setCategoryFilters] = useState({
        Apparel: false,
        Accessories: false,
        Collectibles: false,
        'Gaming Gear': false,
    });
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [availabilityFilters, setAvailabilityFilters] = useState({
        'In Stock': true,
        'Pre-order': false,
        'Out of Stock': false,
    });
    const [offerFilters, setOfferFilters] = useState({
        'On Sale': false,
        'New Arrivals': false,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);

                const cachedData = cacheService.get<Product[]>('products');
                if (cachedData) {
                    setProducts(cachedData);
                    setFilteredProducts(cachedData);

                    return;
                };

                const response = await apiService.getProductsData();
                if (response.data) {
                    setProducts(response.data);
                    setFilteredProducts(response.data);

                    cacheService.set('products', response.data);
                };
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const searchResults = products.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(searchResults);
        } else {
            setFilteredProducts(products);
        };

        setCurrentPage(1);
    }, [searchQuery, products]);

    const handleCategoryChange = (category: string) => {
        setCategoryFilters({
            ...categoryFilters,
            [category]: !categoryFilters[category as keyof typeof categoryFilters],
        });
    };

    const handleAvailabilityChange = (availability: string) => {
        setAvailabilityFilters({
            ...availabilityFilters,
            [availability]: !availabilityFilters[availability as keyof typeof availabilityFilters],
        });
    };

    const handleOfferChange = (offer: string) => {
        setOfferFilters({
            ...offerFilters,
            [offer]: !offerFilters[offer as keyof typeof offerFilters],
        });
    };

    const handlePriceChange = (type: 'min' | 'max', value: string) => {
        const formattedValue = currencyFormatter(value);
        const validatedValue = currencySchema.parse(formattedValue);

        setPriceRange(prev => ({
            ...prev,
            [type]: validatedValue
        }));
    };

    const applyFilters = () => {
        let newFilteredProducts = [...products];

        const selectedCategories = Object.entries(categoryFilters)
            .filter(([_, isSelected]) => isSelected)
            .map(([category]) => category);

        if (selectedCategories.length > 0) {
            newFilteredProducts = newFilteredProducts.filter((product) =>
                selectedCategories.includes(product.category)
            );
        }

        if (priceRange.min !== '') {
            newFilteredProducts = newFilteredProducts.filter((product) =>
                product.price >= Number.parseFloat(priceRange.min)
            );
        }
        if (priceRange.max !== '') {
            newFilteredProducts = newFilteredProducts.filter((product) =>
                product.price <= Number.parseFloat(priceRange.max)
            );
        }

        const selectedAvailability = Object.entries(availabilityFilters)
            .filter(([_, isSelected]) => isSelected)
            .map(([availability]) => availability);

        if (selectedAvailability.length > 0) {
            newFilteredProducts = newFilteredProducts.filter((product) =>
                selectedAvailability.includes(product.availability)
            );
        }

        if (offerFilters['On Sale']) {
            newFilteredProducts = newFilteredProducts.filter((product) => product.discount !== null);
        }
        if (offerFilters['New Arrivals']) {
            newFilteredProducts = newFilteredProducts.filter((product) => product.tag === 'new');
        }

        switch (sortOption) {
            case 'newest':
                newFilteredProducts = [...newFilteredProducts].reverse();
                break;
            case 'price-low':
                newFilteredProducts = [...newFilteredProducts].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                newFilteredProducts = [...newFilteredProducts].sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setFilteredProducts(newFilteredProducts);
        setCurrentPage(1);
    };

    const toggleWishlist = (productId: number) => {
        if (wishlist.includes(productId)) {
            setWishlist(wishlist.filter((id) => id !== productId));
        } else {
            setWishlist([...wishlist, productId]);
        };
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        if (currentPage > 3) {
            pages.push('...');
        }

        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push('...');
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleProductClick = (productLink: string) => {
        window.open(productLink, '_blank');
    };

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <ShoppingBag size={24} />
                    Shop
                </S.PageTitle>
            </S.PageHeader>

            <S.ShopContainer>
                <S.ShopSidebar>
                    <S.FilterCard>
                        <S.FilterTitle>Filters</S.FilterTitle>

                        <S.FilterGroup>
                            <S.FilterLabel>Categories</S.FilterLabel>
                            <S.CheckboxGroup>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={categoryFilters.Apparel}
                                            onChange={() => handleCategoryChange('Apparel')}
                                        />
                                        Apparel
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={categoryFilters.Accessories}
                                            onChange={() => handleCategoryChange('Accessories')}
                                        />
                                        Accessories
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={categoryFilters.Collectibles}
                                            onChange={() => handleCategoryChange('Collectibles')}
                                        />
                                        Collectibles
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={categoryFilters['Gaming Gear']}
                                            onChange={() => handleCategoryChange('Gaming Gear')}
                                        />
                                        Gaming Gear
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                            </S.CheckboxGroup>
                        </S.FilterGroup>

                        <S.FilterGroup>
                            <S.FilterLabel>Price Range</S.FilterLabel>
                            <S.PriceRange>
                                <S.PriceInput
                                    placeholder='Min'
                                    value={priceRange.min ? currencyFormatter(priceRange.min) : ''}
                                    onChange={(e) => handlePriceChange('min', e.target.value)}
                                    type='text'
                                />
                                <span>-</span>
                                <S.PriceInput
                                    placeholder='Max'
                                    value={priceRange.max ? currencyFormatter(priceRange.max) : ''}
                                    onChange={(e) => handlePriceChange('max', e.target.value)}
                                    type='text'
                                />
                            </S.PriceRange>
                        </S.FilterGroup>

                        <S.FilterGroup>
                            <S.FilterLabel>Availability</S.FilterLabel>
                            <S.CheckboxGroup>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={availabilityFilters['In Stock']}
                                            onChange={() => handleAvailabilityChange('In Stock')}
                                        />
                                        In Stock
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={availabilityFilters['Pre-order']}
                                            onChange={() => handleAvailabilityChange('Pre-order')}
                                        />
                                        Pre-order
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={availabilityFilters['Out of Stock']}
                                            onChange={() => handleAvailabilityChange('Out of Stock')}
                                        />
                                        Out of Stock
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                            </S.CheckboxGroup>
                        </S.FilterGroup>

                        <S.FilterGroup>
                            <S.FilterLabel>Offers</S.FilterLabel>
                            <S.CheckboxGroup>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={offerFilters['On Sale']}
                                            onChange={() => handleOfferChange('On Sale')}
                                        />
                                        On Sale
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox
                                            type='checkbox'
                                            checked={offerFilters['New Arrivals']}
                                            onChange={() => handleOfferChange('New Arrivals')}
                                        />
                                        New Arrivals
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                            </S.CheckboxGroup>
                        </S.FilterGroup>

                        <S.FilterButton $variant='outline' style={{ width: '100%', marginTop: '16px' }} onClick={applyFilters}>
                            Apply Filters
                        </S.FilterButton>
                    </S.FilterCard>
                </S.ShopSidebar>

                <S.ShopContent>
                    <S.FiltersContainer>
                        <div>
                            <S.SortSelect value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                                <option value='featured'>Featured</option>
                                <option value='newest'>Newest</option>
                                <option value='price-low'>Price: Low to High</option>
                                <option value='price-high'>Price: High to Low</option>
                            </S.SortSelect>
                        </div>

                        <S.SearchContainer>
                            <S.SearchIcon>
                                <Search size={18} />
                            </S.SearchIcon>
                            <S.SearchInput
                                placeholder='Search products...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                $fullWidth
                            />
                        </S.SearchContainer>
                    </S.FiltersContainer>

                    {isLoading ? (
                        <S.LoadingContainer>
                            <S.LoadingText>Loading products...</S.LoadingText>
                        </S.LoadingContainer>
                    ) : currentProducts.length > 0 ? (
                        <S.ProductsGrid>
                            {currentProducts.map((product) => (
                                <S.ProductCard key={product.id}>
                                    <S.ProductImage image={product.image}>
                                        {product.tag && (
                                            <S.ProductTag type={product.tag}>
                                                {product.tag === 'new' ? 'New' : product.tag === 'sale' ? 'Sale' : product.tag}
                                            </S.ProductTag>
                                        )}
                                        <S.WishlistButton
                                            className={wishlist.includes(product.id) ? 'active' : ''}
                                            onClick={() => toggleWishlist(product.id)}
                                        >
                                            <Heart size={16} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                                        </S.WishlistButton>
                                    </S.ProductImage>
                                    <S.ProductContent>
                                        <S.ProductInfo>
                                            <S.ProductCategory>{product.category}</S.ProductCategory>
                                            <S.ProductTitle>{product.title}</S.ProductTitle>
                                            <S.ProductRating>
                                                <S.RatingStars>
                                                    <Star size={14} fill='currentColor' />
                                                    <Star size={14} fill='currentColor' />
                                                    <Star size={14} fill='currentColor' />
                                                    <Star size={14} fill='currentColor' />
                                                    <Star size={14} fill='currentColor' />
                                                </S.RatingStars>
                                            </S.ProductRating>
                                            <S.ProductPricing>
                                                <S.ProductPrice>${product.price}.00</S.ProductPrice>
                                                {product.oldPrice && (
                                                    <>
                                                        <S.ProductOldPrice>${product.oldPrice}</S.ProductOldPrice>
                                                        <S.ProductDiscount>-{product.discount}%</S.ProductDiscount>
                                                    </>
                                                )}
                                            </S.ProductPricing>
                                        </S.ProductInfo>
                                        <S.ProductActions>
                                            <S.AddToCartButton
                                                $variant='primary'
                                                onClick={() => handleProductClick(product.productLink)}
                                            >
                                                <ShoppingCart size={18} />
                                                See the product
                                            </S.AddToCartButton>
                                        </S.ProductActions>
                                    </S.ProductContent>
                                </S.ProductCard>
                            ))}
                        </S.ProductsGrid>
                    ) : (
                        <S.NoResults>No products match your filters. Try adjusting your search criteria.</S.NoResults>
                    )}

                    {totalPages > 1 && (
                        <S.Pagination>
                            <S.PaginationButton
                                $variant='outline'
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft size={16} />
                            </S.PaginationButton>

                            {getPageNumbers().map((pageNumber, index) => (
                                pageNumber === '...' ? (
                                    <S.PaginationButton
                                        key={`ellipsis-${index}`}
                                        $variant='outline'
                                        style={{ margin: '0 4px' }}
                                    >
                                        ...
                                    </S.PaginationButton>
                                ) : (
                                    <S.PaginationButton
                                        key={index}
                                        $variant='outline'
                                        $active={currentPage === pageNumber}
                                        onClick={() => handlePageChange(pageNumber as number)}
                                    >
                                        {pageNumber}
                                    </S.PaginationButton>
                                )
                            ))}

                            <S.PaginationButton
                                $variant='outline'
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRight size={16} />
                            </S.PaginationButton>
                        </S.Pagination>
                    )}
                </S.ShopContent>
            </S.ShopContainer>
        </DashboardLayout>
    )
};