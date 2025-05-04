import { 
    Event, 
    Game,
    Product,
    Team,
    UserRegistration,
    UserDashboardProfile,
    UserOverview,
    UserSettings
} from '@furiafan/types';

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

interface DocumentAnalysis {
  cpf: string;
  name: string;
  userImage: string;
}

interface VerificationResult {
  isMatch: boolean;
  confidence: number;
  details: string;
}

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
        return fetchApi<UserOverview>(`/users/${cpf}/profile-overview`);
    },
    getUserProfile: async (cpf: string) => {
        return fetchApi<UserDashboardProfile>(`/users/${cpf}`);
    },
    getUserSettings: async (cpf: string) => {
        return fetchApi<UserSettings>(`/users/${cpf}/settings`);
    },
    updateUserSettings: async (cpf: string, settings: UserSettings) => {
        return fetchApi<UserSettings>(`/users/${cpf}/settings`, {
            method: 'PUT',
            body: JSON.stringify(settings),
        });
    },
    postUserRegister: async (data: UserRegistration) => {
        return fetchApi<void>('/users/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
    postUserLogin: async (cpf: string, password: string) => {
        return fetchApi<{ success: boolean; message?: string }>('/users/login', {
            method: 'POST',
            body: JSON.stringify({ cpf, password }),
        });
    },
    analyzeDocument: async (imageBase64: string) => {
        return fetchApi<DocumentAnalysis>('/verification/analyze-document', {
            method: 'POST',
            body: JSON.stringify({ imageBase64 }),
        });
    },
    verifyIdentity: async (documentImageBase64: string, selfieImageBase64: string) => {
        return fetchApi<VerificationResult>('/verification/verify-identity', {
            method: 'POST',
            body: JSON.stringify({ documentImageBase64, selfieImageBase64 }),
        });
    },
    linkSocialConnection: async (cpf: string, provider: string, accessToken: string) => {
        return fetchApi<void>(`/users/link-social-connection`, {
            method: 'POST',
            body: JSON.stringify({ cpf, provider, accessToken }),
        });
    },
    unlinkSocialConnection: async (cpf: string, provider: string) => {
        return fetchApi<void>(`/users/unlink-social-connection`, {
            method: 'POST',
            body: JSON.stringify({ cpf, provider }),
        });
    },
}; 