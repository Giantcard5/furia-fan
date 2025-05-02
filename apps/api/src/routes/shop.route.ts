import { Router, Request, Response } from 'express';
import { ShopService } from '../services/shop.service';

const router = Router();
const shopService = new ShopService();

router.get('/', async (req: Request, res: Response) => {
    try {
        const products = await shopService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

export const shopRouter = router; 