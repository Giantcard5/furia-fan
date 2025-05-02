import fs from 'fs';
import path from 'path';

import { Product } from '../types/shop.types';

export class ShopService {
    private readonly dataFilePath: string;
    private products: Product[];

    constructor() {
        this.dataFilePath = path.join(__dirname, '../../data/shop.json');
        this.products = this.loadProducts();
    }

    private loadProducts(): Product[] {
        try {
            if (fs.existsSync(this.dataFilePath)) {
                const data = fs.readFileSync(this.dataFilePath, 'utf-8');
                return JSON.parse(data);
            } else {
                console.error('Shop data file not found:', this.dataFilePath);
                return [];
            }
        } catch (error) {
            console.error('Error loading shop products:', error);
            return [];
        }
    }

    getAllProducts(): Product[] {
        return this.products;
    }
} 