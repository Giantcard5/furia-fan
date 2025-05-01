export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    oldPrice: number | null;
    discount: number | null;
    rating: number;
    ratingCount: number;
    image: string;
    tag: string | null;
    availability: string;
    productLink: string;
};