import { Router, Request, Response } from 'express';
import { TeamsService } from '../services/team.service';

const router = Router();
const teamsService = new TeamsService();

router.get('/', async (req: Request, res: Response) => {
    try {
        const teams = await teamsService.getAllTeams();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});

export const teamsRouter = router; 