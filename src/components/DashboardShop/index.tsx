'use client'

import {
    useState,
    useEffect
} from 'react';

import {
    ShoppingBag,
    Search,
    Filter,
    ChevronDown,
    Star,
    Heart,
    ShoppingCart
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import Button from '@/components/UI/button';

import * as S from './styles';
import { currencyFormatter, currencySchema } from '@/utils/formatters';

const allProducts = [
    {
        id: 1,
        title: 'FURIA Pro Jersey 2025',
        category: 'Apparel',
        price: 89.99,
        oldPrice: 99.99,
        discount: 10,
        rating: 4.8,
        ratingCount: 124,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'new',
        availability: 'In Stock',
    },
    {
        id: 2,
        title: 'FURIA Hoodie Black',
        category: 'Apparel',
        price: 69.99,
        oldPrice: null,
        discount: null,
        rating: 4.6,
        ratingCount: 98,
        image: '/placeholder.svg?height=240&width=240',
        tag: null,
        availability: 'In Stock',
    },
    {
        id: 3,
        title: 'FURIA Gaming Mouse',
        category: 'Accessories',
        price: 59.99,
        oldPrice: 79.99,
        discount: 25,
        rating: 4.5,
        ratingCount: 76,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'sale',
        availability: 'In Stock',
    },
    {
        id: 4,
        title: 'FURIA Cap',
        category: 'Apparel',
        price: 29.99,
        oldPrice: null,
        discount: null,
        rating: 4.7,
        ratingCount: 112,
        image: '/placeholder.svg?height=240&width=240',
        tag: null,
        availability: 'In Stock',
    },
    {
        id: 5,
        title: 'FURIA Mousepad XL',
        category: 'Accessories',
        price: 24.99,
        oldPrice: 34.99,
        discount: 29,
        rating: 4.9,
        ratingCount: 87,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'sale',
        availability: 'In Stock',
    },
    {
        id: 6,
        title: 'FURIA T-Shirt Gold Edition',
        category: 'Apparel',
        price: 39.99,
        oldPrice: null,
        discount: null,
        rating: 4.8,
        ratingCount: 65,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'new',
        availability: 'Pre-order',
    },
    {
        id: 7,
        title: 'FURIA Backpack',
        category: 'Accessories',
        price: 49.99,
        oldPrice: null,
        discount: null,
        rating: 4.6,
        ratingCount: 43,
        image: '/placeholder.svg?height=240&width=240',
        tag: null,
        availability: 'In Stock',
    },
    {
        id: 8,
        title: 'FURIA Mug',
        category: 'Accessories',
        price: 14.99,
        oldPrice: null,
        discount: null,
        rating: 4.7,
        ratingCount: 58,
        image: '/placeholder.svg?height=240&width=240',
        tag: null,
        availability: 'Out of Stock',
    },
    {
        id: 9,
        title: 'FURIA Gaming Keyboard',
        category: 'Gaming Gear',
        price: 129.99,
        oldPrice: 149.99,
        discount: 13,
        rating: 4.9,
        ratingCount: 32,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'sale',
        availability: 'In Stock',
    },
    {
        id: 10,
        title: 'FURIA Gaming Headset',
        category: 'Gaming Gear',
        price: 89.99,
        oldPrice: null,
        discount: null,
        rating: 4.8,
        ratingCount: 47,
        image: '/placeholder.svg?height=240&width=240',
        tag: null,
        availability: 'In Stock',
    },
    {
        id: 11,
        title: 'FURIA Collectible Figure',
        category: 'Collectibles',
        price: 59.99,
        oldPrice: null,
        discount: null,
        rating: 4.9,
        ratingCount: 28,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'new',
        availability: 'Pre-order',
    },
    {
        id: 12,
        title: 'FURIA Limited Edition Poster',
        category: 'Collectibles',
        price: 19.99,
        oldPrice: 24.99,
        discount: 20,
        rating: 4.7,
        ratingCount: 36,
        image: '/placeholder.svg?height=240&width=240',
        tag: 'sale',
        availability: 'In Stock',
    },
];

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [sortOption, setSortOption] = useState('featured');
    const [products, setProducts] = useState(allProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const [categoryFilters, setCategoryFilters] = useState({
        Apparel: false,
        Accessories: false,
        Collectibles: false,
        'Gaming Gear': false,
    });
    const [priceRange, setPriceRange] = useState({ min: '', max: '' })
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
        let filteredProducts = [...allProducts]

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        };

        const selectedCategories = Object.entries(categoryFilters)
            .filter(([_, isSelected]) => isSelected)
            .map(([category]) => category);

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter((product) => selectedCategories.includes(product.category));
        };

        if (priceRange.min !== '') {
            filteredProducts = filteredProducts.filter((product) => product.price >= Number.parseFloat(priceRange.min));
        };
        if (priceRange.max !== '') {
            filteredProducts = filteredProducts.filter((product) => product.price <= Number.parseFloat(priceRange.max));
        };

        const selectedAvailability = Object.entries(availabilityFilters)
            .filter(([_, isSelected]) => isSelected)
            .map(([availability]) => availability);

        if (selectedAvailability.length > 0) {
            filteredProducts = filteredProducts.filter((product) => selectedAvailability.includes(product.availability));
        };

        if (offerFilters['On Sale']) {
            filteredProducts = filteredProducts.filter((product) => product.discount !== null);
        };
        if (offerFilters['New Arrivals']) {
            filteredProducts = filteredProducts.filter((product) => product.tag === 'new');
        };

        switch (sortOption) {
            case 'newest':
                filteredProducts = [...filteredProducts].reverse();
                break;
            case 'price-low':
                filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        };

        setProducts(filteredProducts);
        setCurrentPage(1);
    }, [searchQuery, sortOption]);

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
        let filteredProducts = [...allProducts];

        const selectedCategories = Object.entries(categoryFilters)
            .filter(([_, isSelected]) => isSelected)
            .map(([category]) => category);

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter((product) => selectedCategories.includes(product.category));
        };

        if (priceRange.min !== '') {
            filteredProducts = filteredProducts.filter((product) => product.price >= Number.parseFloat(priceRange.min));
        };
        if (priceRange.max !== '') {
            filteredProducts = filteredProducts.filter((product) => product.price <= Number.parseFloat(priceRange.max));
        };

        const selectedAvailability = Object.entries(availabilityFilters)
            .filter(([_, isSelected]) => isSelected)
            .map(([availability]) => availability);

        if (selectedAvailability.length > 0) {
            filteredProducts = filteredProducts.filter((product) => selectedAvailability.includes(product.availability));
        };

        if (offerFilters['On Sale']) {
            filteredProducts = filteredProducts.filter((product) => product.discount !== null);
        };
        if (offerFilters['New Arrivals']) {
            filteredProducts = filteredProducts.filter((product) => product.tag === 'new');
        };

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        };

        switch (sortOption) {
            case 'newest':
                filteredProducts = [...filteredProducts].reverse();
                break;
            case 'price-low':
                filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        };

        setProducts(filteredProducts);
        setCurrentPage(1);
    };

    const toggleWishlist = (productId: number) => {
        if (wishlist.includes(productId)) {
            setWishlist(wishlist.filter((id) => id !== productId));
        } else {
            setWishlist([...wishlist, productId]);
        };
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`} size={14} fill='currentColor' />);
        };

        if (hasHalfStar) {
            stars.push(<Star key='half' size={14} fill='currentColor' style={{ clipPath: 'inset(0 50% 0 0)' }} />);
        };

        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`empty-${i}`} size={14} />);
        };

        return stars;
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        };
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
                                <option value='rating'>Highest Rated</option>
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

                    {currentProducts.length > 0 ? (
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
                                        <S.ProductCategory>{product.category}</S.ProductCategory>
                                        <S.ProductTitle>{product.title}</S.ProductTitle>
                                        <S.ProductRating>
                                            <S.RatingStars>{renderStars(product.rating)}</S.RatingStars>
                                            <S.RatingCount>({product.ratingCount})</S.RatingCount>
                                        </S.ProductRating>
                                        <S.ProductPricing>
                                            <S.ProductPrice>${product.price.toFixed(2)}</S.ProductPrice>
                                            {product.oldPrice && (
                                                <>
                                                    <S.ProductOldPrice>${product.oldPrice.toFixed(2)}</S.ProductOldPrice>
                                                    <S.ProductDiscount>-{product.discount}%</S.ProductDiscount>
                                                </>
                                            )}
                                        </S.ProductPricing>
                                        <S.AddToCartButton $variant='primary'>
                                            <ShoppingCart size={16} />
                                            Add to Cart
                                        </S.AddToCartButton>
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
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                «
                            </S.PaginationButton>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <S.PaginationButton
                                    key={number}
                                    $variant='outline'
                                    $active={currentPage === number}
                                    onClick={() => paginate(number)}
                                >
                                    {number}
                                </S.PaginationButton>
                            ))}
                            <S.PaginationButton
                                $variant='outline'
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                »
                            </S.PaginationButton>
                        </S.Pagination>
                    )}
                </S.ShopContent>
            </S.ShopContainer>
        </DashboardLayout>
    )
};