import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    getAllGames 
} from '../services/game.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const games = await getAllGames();
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

export const gamesRouter = router; 