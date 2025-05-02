import fs from 'fs';
import path from 'path';

import { Event } from '../types/event.types';

export class EventService {
    private readonly dataFilePath: string;
    private events: Event[];

    constructor() {
        this.dataFilePath = path.join(__dirname, '../../data/events.json');
        this.events = this.loadEvents();
    }

    private loadEvents(): Event[] {
        try {
            if (fs.existsSync(this.dataFilePath)) {
                const data = fs.readFileSync(this.dataFilePath, 'utf-8');
                return JSON.parse(data);
            } else {
                console.error('Events data file not found:', this.dataFilePath);
                return [];
            }
        } catch (error) {
            console.error('Error loading events:', error);
            return [];
        }
    }

    async getAllEvents(): Promise<Event[]> {
        return this.events;
    }

    async getEventById(id: number): Promise<Event | null> {
        return this.events.find(event => event.id === id) || null;
    }

    async getNextEvents(): Promise<Event[]> {
        const now = new Date();
        return this.events
            .filter(event => {
                const eventDate = new Date(event.date);
                return eventDate > now;
            })
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .slice(0, 3);
    }
} 