import {
    Router,
    Request,
    Response
} from 'express';

import {
    getAllEvents,
    getEventById,
    getNextEvents
} from '../services/event.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const events = await getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

router.get('event/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        };

        const event = await getEventById(id);
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the event: ' + req.params.id });
    }
});

router.get('/next-events', async (req: Request, res: Response) => {
    try {
        const events = await getNextEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch next events' });
    }
});

export const eventRouter = router; 