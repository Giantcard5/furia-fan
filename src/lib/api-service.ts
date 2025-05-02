import { Event } from '@/types/event';
import { Game } from '@/types/game';
import { Team } from '@/types/team';
import { Product } from '@/types/products';
import { OnboardingFormData, ProfileOverview } from '@/types/onboarding';

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
    getNextEventsData: async () => {
        return fetchApi<Event[]>('/events/next-events');
    },
    getEventById: async (id: string) => {
        return fetchApi<Event>(`/events/event/${id}`);
    },
    getTeamsData: async () => {
        return fetchApi<Team[]>('/teams');
    },
    getGamesData: async () => {
        return fetchApi<Game[]>('/games');
    },
    getProductsData: async () => {
        return fetchApi<Product[]>('/shop');
    },
    getUserSocialConnections: async (cpf: string) => {
        return fetchApi<string[]>(`/users/${cpf}/social`);
    },
    getUserProfileOverview: async (cpf: string) => {
        return fetchApi<ProfileOverview>(`/users/${cpf}/profile-overview`);
    },
    getUserProfile: async (cpf: string) => {
        return fetchApi<OnboardingFormData>(`/users/${cpf}`);
    },
    postUserRegister: async (data: OnboardingFormData) => {
        return fetchApi<void>('/users/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
}; 