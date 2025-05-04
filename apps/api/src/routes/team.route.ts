import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    getAllTeams 
} from '../services/team.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const teams = await getAllTeams();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});

export const teamsRouter = router; 