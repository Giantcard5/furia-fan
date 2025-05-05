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
    UserRegistration
} from '@/types';

import Cookies from 'js-cookie';

import {
    formatCPF
} from '@/utils/formatters';

interface AuthContextType {
    user: UserRegistration | null;
    isLoading: boolean;
    fetchUser: (cpf: string) => Promise<boolean>;
    registerUser: (data: UserRegistration) => Promise<boolean>;
    loginUser: (cpf: string, password: string) => Promise<boolean>;
    logoutUser: () => void;
    isUserLoaded: boolean;
    saveCPF: (cpf: string) => void;
    getCPF: () => string | null;
    removeCPF: () => void;
    error: string | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any | null>(null);
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

    const removeCPF = () => {
        Cookies.remove('furiaCpf');
    };

    const getCPF = (): string | null => {
        return Cookies.get('furiaCpf') || null;
    };

    const loginUser = async (cpf: string, password: string): Promise<boolean> => {
        setIsLoading(true);
        setError(null);

        try {
            const loginResponse = await apiService.postUserLogin(cpf, password);

            if (loginResponse.error || !loginResponse.data.success) {
                setError(loginResponse.error || loginResponse.data.message || 'Invalid credentials');
                setIsLoading(false);
                return false;
            };

            const profileResponse = await apiService.getUserProfile(formatCPF(cpf));

            if (profileResponse.error) {
                setError(profileResponse.error);
                setIsLoading(false);
                return false;
            };

            setUser(profileResponse.data);
            Cookies.set('furiaUser', JSON.stringify(profileResponse.data), { expires: 7 });
            saveCPF(cpf);

            setIsLoading(false);
            return true;
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to login user');
            setIsLoading(false);
            return false;
        };
    };

    const registerUser = async (data: UserRegistration): Promise<boolean> => {
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

    const logoutUser = () => {
        Cookies.remove('furiaCpf');
        Cookies.remove('furiaUser');
        setUser(null);
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
        logoutUser,
        isUserLoaded: !!user,
        saveCPF,
        getCPF,
        removeCPF,
        error
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 