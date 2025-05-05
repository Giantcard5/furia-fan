export type EventType = 'match' | 'tournament' | 'fan-meet';

export interface Event {
    id: number;
    title: string;
    type: EventType;
    date: string;
    time: string;
    location: string;
    image: string;
    attendees: number;
    game: string;
    createdAt: string;
    updatedAt: string;
}

export interface EventFilter {
    type?: EventType;
    game?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
} 