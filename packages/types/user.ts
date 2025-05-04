export interface UserRegistration { // OnboardingFormData
    personalInfo: {
        cpf: string;
        email: string;
        fullName: string;
        username: string;
        password: string;
        passwordVerify: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        phoneNumber: string;
        birthDate: string;
        profileImage: string;
    };
    gamingPreferences: {
        games: string[];
        events: string[];
        purchases: string[];
        platform: string;
        playFrequency: string;
    };
    documents: {
        idDocument: {
            file: string;
            preview: string;
            fileName: string;
            fileType: string;
        } | null;
        selfieWithId: {
            file: string;
            preview: string;
            fileName: string;
            fileType: string;
        } | null;
    };
    socialMedia?: SocialMedia;
};

export interface UserDashboardProfile { // OnboardingFormDataDashboardProfile
    id: number;
    cpf: string;
    email: string;
    fullName: string;
    username: string;
    password: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    birthDate: string;
    profileImage: string;
    platform: string;
    playFrequency: string;
    games: Array<{
        id: number;
        name: string;
        userId: number;
    }>;
    socialMedia: {
        id: number;
        twitch?: string;
        discord?: string;
        HLTV?: string;
        userId: number;
    };
}

export interface UserOverview {
    profileImage: string | null;
    email: string;
    fullName: string;
    games: string[];
    socialMedia: SocialMedia;
};

export interface SocialMedia {
    instagram?: {
        username: string;
    };
    twitch?: {
        username: string;
    };
    discord?: {
        username: string;
    };
    faceit?: {
        username: string;
    };
    hltv?: {
        username: string;
    };
}

export interface UserSettings {
    fullName: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    language: string;
    emailNotifications: boolean;
    pushNotifications: boolean;
    marketingEmails: boolean;
    eventReminders: boolean;
};