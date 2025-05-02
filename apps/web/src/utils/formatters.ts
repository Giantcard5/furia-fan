import { z } from 'zod';

export const cpfSchema = z.string()
    .min(11, 'CPF must have 11 digits')
    .max(14, 'CPF must have 11 digits')
    .refine((value) => {
        const cleaned = value.replace(/\D/g, '');
        return /^\d{11}$/.test(cleaned);
    }, 'Invalid CPF format');

export const formatCPF = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
    if (cleaned.length <= 9) return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`;
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`;
};

export const birthDateSchema = z.string()
    .min(10, 'Birth date must be in format DD/MM/YYYY')
    .max(10, 'Birth date must be in format DD/MM/YYYY')
    .refine((value) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length !== 8) return false;
        
        const day = parseInt(cleaned.slice(0, 2));
        const month = parseInt(cleaned.slice(2, 4));
        const year = parseInt(cleaned.slice(4));
        
        if (day < 1 || day > 31) return false;
        if (month < 1 || month > 12) return false;
        if (year < 1900 || year > new Date().getFullYear()) return false;
        
        return true;
    }, 'Invalid birth date');

export const formatBirthDate = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
};

export const zipCodeSchema = z.string()
    .min(8, 'ZIP code must have 8 digits')
    .max(9, 'ZIP code must have 8 digits')
    .refine((value) => {
        const cleaned = value.replace(/\D/g, '');
        return /^\d{8}$/.test(cleaned);
    }, 'Invalid ZIP code format');

export const formatZipCode = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 5) return cleaned;
    return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 8)}`;
};

export const personalInfoSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email format'),
    cpf: cpfSchema,
    birthDate: birthDateSchema,
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zipCode: zipCodeSchema,
    password: z.string().min(8, 'Password must be at least 8 characters'),
    passwordVerify: z.string(),
}).refine((data) => data.password === data.passwordVerify, {
    message: "Passwords don't match",
    path: ["passwordVerify"],
});

export const currencyFormatter = (value: string) => {
    const digits = value.replace(/\D/g, '');
    const number = Number(digits) / 100;
    
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
};

export const currencySchema = z.string()
    .transform((val) => {
        const cleanValue = val.replace(/[^\d.]/g, '');
        return cleanValue;
    })
    .refine((val) => {
        const number = Number(val);
        return !isNaN(number) && number >= 0;
    }, {
        message: 'Invalid value'
    }); 