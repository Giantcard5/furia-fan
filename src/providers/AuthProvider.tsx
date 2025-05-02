'use client';

import React, { 
    createContext, 
    useState,
    useEffect 
} from 'react';

import { 
    apiService 
} from '@/lib/api-service';

import { 
    OnboardingFormData 
} from '@/types/onboarding';

import Cookies from 'js-cookie';

interface AuthContextType {
    user: OnboardingFormData | null;
    isLoading: boolean;
    fetchUser: (cpf: string) => Promise<boolean>;
    registerUser: (data: OnboardingFormData) => Promise<boolean>;
    loginUser: (cpf: string) => Promise<boolean>;
    isUserLoaded: boolean;
    saveCPF: (cpf: string) => void;
    getCPF: () => string | null;
    error: string | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<OnboardingFormData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedUser = Cookies.get('furiaUser');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                Cookies.remove('furiaUser');
            };
        };

        setIsLoading(false);
    }, []);

    const saveCPF = (cpf: string) => {
        Cookies.set('furiaCpf', cpf, { expires: 7 });
    };

    const getCPF = (): string | null => {
        return Cookies.get('furiaCpf') || null;
    };

    const loginUser = async (cpf: string): Promise<boolean> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await apiService.getUserProfile(cpf);

            if (response.error) {
                setError(response.error);
                setIsLoading(false);
                return false;
            };

            setUser(response.data);
            Cookies.set('furiaUser', JSON.stringify(response.data), { expires: 7 });
            saveCPF(cpf);

            setIsLoading(false);
            return true;
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to login user');
            setIsLoading(false);
            return false;
        };
    };

    const registerUser = async (data: OnboardingFormData): Promise<boolean> => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await apiService.postUserRegister(data);

            if (response.error) {
                setError(response.error);
                setIsLoading(false);
                return false;
            };

            setUser(data);
            Cookies.set('furiaUser', JSON.stringify(data), { expires: 7 });
            saveCPF(data.personalInfo.cpf);

            setIsLoading(false);
            return true;
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to register user');
            setIsLoading(false);
            return false;
        };
    };

    const fetchUser = async (cpf: string): Promise<boolean> => {
        setIsLoading(true);

        try {
            const response = await apiService.getUserProfile(cpf);

            if (response.error) {
                setIsLoading(false);
                return false;
            };

            setUser(response.data);
            Cookies.set('furiaUser', JSON.stringify(response.data), { expires: 7 });
            saveCPF(cpf);

            setIsLoading(false);
            return true;
        } catch (error) {
            setIsLoading(false);
            return false;
        };
    };

    const value = {
        user,
        isLoading,
        fetchUser,
        registerUser,
        loginUser,
        isUserLoaded: !!user,
        saveCPF,
        getCPF,
        error
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 