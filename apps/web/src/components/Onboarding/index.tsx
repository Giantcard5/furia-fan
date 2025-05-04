'use client';

import { 
    useEffect,
    useState 
} from 'react';

import OnboardingHeader from '@/components/OnboardingHeader';
import PersonalInfoForm from '@/components/OnboardingPersonalInfo';
import GamingPreferencesForm from '@/components/OnboardingGamingPreferences';
import DocumentUploadForm from '@/components/OnboardingDocumentUpload';
import CompletionSummary from '@/components/OnboardingCompletion';

import * as S from './styles';

import Header from '../Header';
import Footer from '../Footer';

import { 
    UserRegistration 
} from '@furiafan/types';

export default function OnboardingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<UserRegistration>({
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