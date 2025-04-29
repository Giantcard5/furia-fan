import { Event } from '@/types/event';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface ApiResponse<T> {
    data: T;
    error?: string;
};

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };

        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('API Error:', error);
        return {
            data: {} as T,
            error: error instanceof Error ? error.message : 'An unknown error occurred',
        };
    };
};

export const apiService = {
    getEventsData: async () => {
        return fetchApi<Event[]>('/events');
    },
}; 