export interface UserRegistration {
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
    socialMedia: {
        twitter?: string;
        twitch?: string;
        discord?: string;
        faceit?: string;
        hltv?: string;
    };
};

export interface UserOverview {
    profileImage: string | null;
    email: string;
    fullName: string;
    games: string[];
    socialMedia: {
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
        hltv?: {
            username: string;
        };
    };
};

export interface UserSettings {
    fullName: string;
    username: string;
    email: string;
    password: string;
};