'use client';

import { 
    useState 
} from 'react';

import { 
    useRouter 
} from 'next/navigation';

import { 
    motion, 
    AnimatePresence 
} from 'framer-motion';

import * as S from './styles';

import { Button } from '@/components/UI/button';
import { Progress } from '@/components/UI/progress';

import { PersonalInfoStep } from '@/components/OnboardingPersonalInfo';
import { GamingPreferencesStep } from '@/components/OnboardingGamingPreferences';
import { DocumentUploadStep } from '@/components/OnboardingDocumentUpload';
import { SocialMediaStep } from '@/components/OnboardingSocialMedia';
import { CompletionStep } from '@/components/OnboardingCompletion';

import { OnboardingHeader } from '@/components/OnboardingHeader';

const TOTAL_STEPS = 5;

export function Onboarding() {
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        personalInfo: {
          name: "",
          email: "",
          cpf: "",
          birthDate: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
        },
        gamingPreferences: {
          favoriteGames: [],
          eventsAttended: [],
          playTime: "",
          platform: "",
          recentPurchases: [],
        },
        documents: {
          idDocument: null,
          selfie: null,
          validationStatus: "pending",
        },
        socialMedia: {
          twitter: false,
          twitch: false,
          discord: false,
          faceit: false,
          hltv: false,
        },
      })

    const updateFormData = (section: string, data: any) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section as keyof typeof prev],
                ...data,
            },
        }));
    };

    const handleNext = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep((prev) => prev + 1)
        } else {
            router.push('/dashboard')
        };
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1)
        };
    };

    const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

    return (
        <S.OnboardingWrapper>
            <OnboardingHeader currentStep={currentStep} totalSteps={TOTAL_STEPS} />

            <S.OnboardingContainer>
                <S.ProgressWrapper>
                    <Progress value={progressPercentage} />
                </S.ProgressWrapper>

                <S.FormCard>
                    <AnimatePresence mode='wait'>
                        {currentStep === 1 && (
                            <motion.div
                                key='step1'
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PersonalInfoStep
                                    data={formData.personalInfo}
                                    updateData={(data: FormData) => updateFormData('personalInfo', data)}
                                />
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key='step2'
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GamingPreferencesStep
                                    data={formData.gamingPreferences}
                                    updateData={(data: FormData) => updateFormData('gamingPreferences', data)}
                                />
                            </motion.div>
                        )}

                        {currentStep === 3 && (
                            <motion.div
                                key='step3'
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <DocumentUploadStep
                                    data={formData.documents}
                                    updateData={(data: FormData) => updateFormData('documents', data)}
                                />
                            </motion.div>
                        )}

                        {currentStep === 4 && (
                            <motion.div
                                key='step4'
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <SocialMediaStep
                                    data={formData.socialMedia}
                                    updateData={(data: FormData) => updateFormData('socialMedia', data)}
                                />
                            </motion.div>
                        )}

                        {currentStep === 5 && (
                            <motion.div
                                key='step5'
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CompletionStep formData={formData} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <S.ButtonGroup>
                        <Button $variant='outline' onClick={handleBack} disabled={currentStep === 1}>
                            Back
                        </Button>

                        <Button onClick={handleNext}>{currentStep === TOTAL_STEPS ? 'Go to Dashboard' : 'Next'}</Button>
                    </S.ButtonGroup>
                </S.FormCard>
            </S.OnboardingContainer>
        </S.OnboardingWrapper>
    );
};

export default Onboarding;