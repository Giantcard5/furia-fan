import styled from 'styled-components';

import { Card } from '@/components/UI/card';
import { Input } from '@/components/UI/input';
import { Button } from '@/components/UI/button';

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.space[4]};
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const SearchContainer = styled.div`
    position: relative;
    max-width: 300px;
    width: 100%;
`;

const SearchInput = styled(Input)`
    padding-left: ${({ theme }) => theme.space[10]};
`;

const SearchIcon = styled.div`
    position: absolute;
    left: ${({ theme }) => theme.space[3]};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray[500]};
`;

const ShopContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
    }
`;

const ShopSidebar = styled.div`
    width: 240px;
    flex-shrink: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
    }
`;

const ShopContent = styled.div`
    flex: 1;
`;

const FilterCard = styled(Card)`
    background-color: #141414;
    padding: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FilterTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.white};
`;

const FilterGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const FilterLabel = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.white};
`;

const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
`;

const CheckboxItem = styled.div`
    display: flex;
    align-items: center;
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const Checkbox = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #333333;
    border-radius: ${({ theme }) => theme.radii.sm};
    margin-right: ${({ theme }) => theme.space[3]};
    position: relative;
    cursor: pointer;
    
    &:checked {
        background-color: ${({ theme }) => theme.colors.gold};
        border-color: ${({ theme }) => theme.colors.gold};
    }
    
    &:checked::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid ${({ theme }) => theme.colors.background};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
    }
`;

const PriceRange = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const PriceInput = styled(Input)`
    width: 80px;
`;

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FilterButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const SortSelect = styled.select`
    height: 40px;
    padding: 0 ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid #333333;
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    appearance: none;
    padding-right: ${({ theme }) => theme.space[8]};
    background-image: url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right ${({ theme }) => theme.space[2]} center;
    background-size: 16px;
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
    }
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: ${({ theme }) => theme.space[4]};
`;

const ProductCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

const ProductImage = styled.div<{ image?: string }>`
    height: 240px;
    background-image: url(${({ image }) => image || '/placeholder.svg?height=240&width=240'});
    background-size: cover;
    background-position: center;
    position: relative;
`;

const ProductTag = styled.div<{ type?: string }>`
    position: absolute;
    top: ${({ theme }) => theme.space[3]};
    right: ${({ theme }) => theme.space[3]};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radii.full};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    background-color: ${({ theme, type }) =>
            type === 'new'
                ? theme.colors.gold + '80'
                : type === 'sale'
                    ? theme.colors.gold + '80'
                    : theme.colors.goldDark + '80'};
    color: ${({ theme }) => theme.colors.white};
`;

const WishlistButton = styled.button`
    position: absolute;
    top: ${({ theme }) => theme.space[3]};
    left: ${({ theme }) => theme.space[3]};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.background};
    }
    
    &.active {
        background-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.background};
    }
`;

const ProductContent = styled.div`
    padding: ${({ theme }) => theme.space[4]};
`;

const ProductCategory = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ProductTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.white};
`;

const ProductRating = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const RatingStars = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.gold};
`;

const RatingCount = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const ProductPricing = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

const ProductPrice = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`;

const ProductOldPrice = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[500]};
    text-decoration: line-through;
`;

const ProductDiscount = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.red};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const AddToCartButton = styled(Button)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.space[6]};
    gap: ${({ theme }) => theme.space[2]};
`;

const PaginationButton = styled(Button) <{ active?: boolean }>`
    min-width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ active, theme }) => active &&`
        background-color: ${theme.colors.gold};
        color: ${theme.colors.background};
        
        &:hover {
            background-color: ${theme.colors.goldDark};
        }
    `}
`;

export {
    PageHeader,
    PageTitle,
    SearchContainer,
    SearchInput,
    SearchIcon,
    ShopContainer,
    ShopSidebar,
    ShopContent,
    FilterCard,
    FilterTitle,
    FilterGroup,
    FilterLabel,
    CheckboxGroup,
    CheckboxItem,
    CheckboxLabel,
    Checkbox,
    PriceRange,
    PriceInput,
    FiltersContainer,
    FilterButton,
    SortSelect,
    ProductsGrid,
    ProductCard,
    ProductImage,
    ProductTag,
    WishlistButton,
    ProductContent,
    ProductCategory,
    ProductTitle,
    ProductRating,
    RatingStars,
    RatingCount,
    ProductPricing,
    ProductPrice,
    ProductOldPrice,
    ProductDiscount,
    AddToCartButton,
    Pagination,
    PaginationButton
};
