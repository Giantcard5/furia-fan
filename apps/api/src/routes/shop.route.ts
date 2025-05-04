import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    getAllShopItems 
} from '../services/shop.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const products = await getAllShopItems();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

export const shopRouter = router; 