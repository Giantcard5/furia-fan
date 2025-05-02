import { Router, Request, Response } from 'express';
import { EventService } from '../services/event.service';

const router = Router();
const eventService = new EventService();

router.get('/', async (req: Request, res: Response) => {
    try {
        const events = await eventService.getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

router.get('/event/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const event = await eventService.getEventById(id);
        
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch event' });
    }
});

router.get('/next-events', async (req: Request, res: Response) => {
    try {
        const events = await eventService.getNextEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch next events' });
    }
});

export const eventRouter = router; 