export interface OnboardingFormData {
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
            file: {
                lastModified: number;
                lastModifiedDate: string;
                name: string;
                size: number;
                type: string;
            };
            preview: string;
        };
        selfieWithId: {
            file: string;
            preview: string;
        };
    };
    socialMedia: SocialMedia;
};

export interface ProfileOverview {
    profileImage: string | null;
    email: string;
    fullName: string;
    games: string[];
    socialMedia: SocialMedia;
};

export interface SocialMedia {
    twitter?: {
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
    HLTV?: {
        username: string;
    };
};

export interface UserSettings {
    fullName: string;
    username: string;
    email: string;
    password: string;
};