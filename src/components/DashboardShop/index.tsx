'use client'

import { 
    useState 
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

export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [wishlist, setWishlist] = useState<number[]>([]);

    const products = [
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
        },
    ]

    const filteredProducts = products.filter((product) => {
        return (
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

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

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <ShoppingBag size={24} />
                    Shop
                </S.PageTitle>
                <S.SearchContainer>
                    <S.SearchIcon>
                        <Search size={18} />
                    </S.SearchIcon>
                    <S.SearchInput
                        placeholder='Search products...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </S.SearchContainer>
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
                                        <S.Checkbox type='checkbox' defaultChecked />
                                        Apparel
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' defaultChecked />
                                        Accessories
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' />
                                        Collectibles
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' />
                                        Gaming Gear
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                            </S.CheckboxGroup>
                        </S.FilterGroup>

                        <S.FilterGroup>
                            <S.FilterLabel>Price Range</S.FilterLabel>
                            <S.PriceRange>
                                <S.PriceInput placeholder='Min' />
                                <span>-</span>
                                <S.PriceInput placeholder='Max' />
                            </S.PriceRange>
                        </S.FilterGroup>

                        <S.FilterGroup>
                            <S.FilterLabel>Availability</S.FilterLabel>
                            <S.CheckboxGroup>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' defaultChecked />
                                        In Stock
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' />
                                        Pre-order
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' />
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
                                        <S.Checkbox type='checkbox' />
                                        On Sale
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                                <S.CheckboxItem>
                                    <S.CheckboxLabel>
                                        <S.Checkbox type='checkbox' />
                                        New Arrivals
                                    </S.CheckboxLabel>
                                </S.CheckboxItem>
                            </S.CheckboxGroup>
                        </S.FilterGroup>

                        <Button $variant='outline' style={{ width: '100%', marginTop: '16px' }}>
                            Apply Filters
                        </Button>
                    </S.FilterCard>
                </S.ShopSidebar>

                <S.ShopContent>
                    <S.FiltersContainer>
                        <div>
                            <S.FilterButton $variant='outline'>
                                <Filter size={16} />
                                Filter
                                <ChevronDown size={14} />
                            </S.FilterButton>
                        </div>
                        <div>
                            <S.SortSelect>
                                <option value='featured'>Featured</option>
                                <option value='newest'>Newest</option>
                                <option value='price-low'>Price: Low to High</option>
                                <option value='price-high'>Price: High to Low</option>
                                <option value='rating'>Highest Rated</option>
                            </S.SortSelect>
                        </div>
                    </S.FiltersContainer>

                    <S.ProductsGrid>
                        {filteredProducts.map((product) => (
                            <S.ProductCard key={product.id}>
                                <S.ProductImage $image={product.image}>
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

                    <S.Pagination>
                        <S.PaginationButton $variant='outline'>«</S.PaginationButton>
                        <S.PaginationButton $variant='outline' active>1</S.PaginationButton>
                        <S.PaginationButton $variant='outline'>2</S.PaginationButton>
                        <S.PaginationButton $variant='outline'>3</S.PaginationButton>
                        <S.PaginationButton $variant='outline'>»</S.PaginationButton>
                    </S.Pagination>
                </S.ShopContent>
            </S.ShopContainer>
        </DashboardLayout>
    );
};