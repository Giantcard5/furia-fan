'use client';

import {
    useState,
    useEffect
} from 'react';

import {
    User,
    Gamepad2,
    FileCheck,
    Share2,
    CheckIcon
} from 'lucide-react';

import { Card, CardContent } from '@/components/UI/card'
import { Progress } from '@/components/UI/progress';

import * as S from './styles';

interface CompletionStepProps {
    formData: any;
};

export function CompletionStep({ formData }: CompletionStepProps) {
    const [progress, setProgress] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        let score = 0;

        if (formData.personalInfo.name) score += 5;
        if (formData.personalInfo.email) score += 5;
        if (formData.personalInfo.cpf) score += 5;
        if (formData.personalInfo.birthDate) score += 5;
        if (formData.personalInfo.address) score += 5;
        if (formData.personalInfo.city && formData.personalInfo.state) score += 5;

        if (formData.gamingPreferences.favoriteGames?.length > 0) score += 10;
        if (formData.gamingPreferences.playTime) score += 5;
        if (formData.gamingPreferences.platform) score += 5;
        if (formData.gamingPreferences.eventsAttended?.length > 0) score += 5;

        if (formData.documents.idDocument) score += 10;
        if (formData.documents.selfie) score += 10;

        const connectedAccounts = Object.values(formData.socialMedia).filter(Boolean).length;
        score += connectedAccounts * 5;

        setProgress(score);

        if (score >= 70) {
            setShowConfetti(true);
        };
    }, [formData]);

    return (
        <S.StepContainer>
            <S.HeaderContainer>
                <S.StepTitle>Profile Completed!</S.StepTitle>
                <S.StepDescription>
                    Your FURIA fan profile has been created. You're now ready to access your personalized dashboard.
                </S.StepDescription>
            </S.HeaderContainer>

            <Card>
                <CardContent>
                    <S.LogoContainer>
                        <S.LogoCircle>
                            {/* <FuriaLogo className='w-12 h-12' /> */}
                        </S.LogoCircle>
                    </S.LogoContainer>

                    <S.WelcomeContainer>
                        <S.WelcomeTitle>Welcome to the FURIA Family!</S.WelcomeTitle>
                        <S.ProgressText>Your profile is {progress}% complete</S.ProgressText>
                        <S.ProgressContainer>
                            <Progress value={progress} />
                        </S.ProgressContainer>
                    </S.WelcomeContainer>

                    <S.InfoGrid>
                        <S.InfoCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            <S.IconCircle>
                                <S.IconWrapper>
                                    <User size={20} />
                                </S.IconWrapper>
                            </S.IconCircle>
                            <S.InfoContent>
                                <S.InfoTitle>Personal Information</S.InfoTitle>
                                <S.InfoDescription>
                                    {formData.personalInfo.name ? formData.personalInfo.name : 'Name not provided'}
                                </S.InfoDescription>
                                <S.VerificationStatus>
                                    <CheckIcon />
                                    Verified
                                </S.VerificationStatus>
                            </S.InfoContent>
                        </S.InfoCard>

                        <S.InfoCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <S.IconCircle>
                                <S.IconWrapper>
                                    <Gamepad2 size={20} />
                                </S.IconWrapper>
                            </S.IconCircle>
                            <S.InfoContent>
                                <S.InfoTitle>Gaming Preferences</S.InfoTitle>
                                <S.InfoDescription>
                                    {formData.gamingPreferences.favoriteGames?.length > 0
                                        ? `${formData.gamingPreferences.favoriteGames.length} games selected`
                                        : 'No games selected'}
                                </S.InfoDescription>
                                <S.VerificationStatus>
                                    <CheckIcon />
                                    Preferences saved
                                </S.VerificationStatus>
                            </S.InfoContent>
                        </S.InfoCard>

                        <S.InfoCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <S.IconCircle>
                                <S.IconWrapper>
                                    <FileCheck size={20} />
                                </S.IconWrapper>
                            </S.IconCircle>
                            <S.InfoContent>
                                <S.InfoTitle>Document Verification</S.InfoTitle>
                                <S.InfoDescription>
                                    {formData.documents.validationStatus === 'success'
                                        ? 'Documents verified successfully'
                                        : formData.documents.validationStatus === 'failed'
                                            ? 'Verification failed'
                                            : 'Pending verification'}
                                </S.InfoDescription>
                                <S.VerificationStatus>
                                    <CheckIcon />
                                    {formData.documents.idDocument && formData.documents.selfie ? '2 documents uploaded' : 'Incomplete'}
                                </S.VerificationStatus>
                            </S.InfoContent>
                        </S.InfoCard>

                        <S.InfoCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                            <S.IconCircle>
                                <S.IconWrapper>
                                    <Share2 size={20} />
                                </S.IconWrapper>
                            </S.IconCircle>
                            <S.InfoContent>
                                <S.InfoTitle>Social Media</S.InfoTitle>
                                <S.InfoDescription>
                                    {Object.values(formData.socialMedia).filter(Boolean).length} accounts connected
                                </S.InfoDescription>
                                <S.VerificationStatus>
                                    <CheckIcon />
                                    {Object.values(formData.socialMedia).filter(Boolean).length > 0
                                        ? 'Social profiles linked'
                                        : 'No accounts connected'}
                                </S.VerificationStatus>
                            </S.InfoContent>
                        </S.InfoCard>
                    </S.InfoGrid>

                    {showConfetti && (
                        <div className='absolute inset-0 pointer-events-none'>{/* Confetti animation would go here */}</div>
                    )}
                </CardContent>
            </Card>
        </S.StepContainer>
    );
};