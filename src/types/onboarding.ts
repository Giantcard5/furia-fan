export interface OnboardingFormData {
    personalInfo: {
        cpf: string;
        email: string;
        fullName: string;
        password: string;
        passwordVerify: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
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
    socialMedia: string[];
};