import { Router, Request, Response } from 'express';
import { GamesService } from '../services/game.service';

const router = Router();
const gamesService = new GamesService();

router.get('/', async (req: Request, res: Response) => {
    try {
        const games = await gamesService.getAllGames();
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch games' });
    }
});

export const gamesRouter = router; 