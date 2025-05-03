'use client';

import { 
    useEffect,
    useState 
} from 'react';

import OnboardingHeader from '@/components/OnboardingHeader';
import PersonalInfoForm from '@/components/OnboardingPersonalInfo';
import GamingPreferencesForm from '@/components/OnboardingGamingPreferences';
import DocumentUploadForm from '@/components/OnboardingDocumentUpload';
import SocialMediaForm from '@/components/OnboardingSocialMedia';
import CompletionSummary from '@/components/OnboardingCompletion';

import * as S from './styles';

import Header from '../Header';
import Footer from '../Footer';

interface OnboardingFormData {
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
        } | null;
        selfieWithId: {
            file: string;
            preview: string;
        } | null;
    };
    socialMedia: Record<string, any>;
}

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<OnboardingFormData>({
        personalInfo: {
            cpf: '',
            email: '',
            fullName: '',
            username: '',
            password: '',
            passwordVerify: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            phoneNumber: '',
            birthDate: '',
            profileImage: '',
        },
        gamingPreferences: {
            games: [],
            events: [],
            purchases: [],
            platform: '',
            playFrequency: '',
        },
        documents: {
            idDocument: null,
            selfieWithId: null,
        },
        socialMedia: {},
    });

    const [isMounted, setIsMounted] = useState(false);

    const handleNext = (data: any, step: number) => {
        setFormData((prev) => {
            switch (step) {
                case 1:
                    return { ...prev, personalInfo: data };
                case 2:
                    return { ...prev, gamingPreferences: data };
                case 3:
                    return { ...prev, documents: data };
                case 4:
                    return { ...prev, socialMedia: data };
                default:
                    return prev
            };
        });
        setCurrentStep(step + 1);
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <PersonalInfoForm 
                        initialData={formData.personalInfo} 
                        onNext={(data) => handleNext(data, 1)} 
                    />
                );
            case 2:
                return (
                    <GamingPreferencesForm
                        initialData={formData.gamingPreferences}
                        onNext={(data) => handleNext(data, 2)}
                        onBack={handleBack}
                    />
                );
            case 3:
                return (
                    <DocumentUploadForm
                        initialData={formData.documents}
                        onNext={(data) => handleNext(data, 3)}
                        onBack={handleBack}
                    />
                );
            case 4:
                return (
                    <SocialMediaForm
                        initialData={formData.socialMedia}
                        onNext={(data) => handleNext(data, 4)}
                        onBack={handleBack}
                    />
                );
            case 5:
                return (
                    <CompletionSummary 
                        formData={formData} 
                        onBack={handleBack} 
                    />
                );
            default:
                return null;
        };
    };

    return (
        <>
            <Header $isOnboarding/>
            <S.OnboardingContainer>
                <S.OnboardingContent>
                    <OnboardingHeader currentStep={currentStep} />
                {renderStep()}
                </S.OnboardingContent>
            </S.OnboardingContainer>
            <Footer />
        </>
    );
};