'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { 
    CheckCircle, 
    User, 
    GamepadIcon as GameController, 
    FileCheck, 
    Share2 
} from 'lucide-react';

import { 
    CardHeader,
    CardTitle, 
    CardDescription, 
    CardContent
} from '@/components/UI/card';

import Button from '@/components/UI/button';
import Progress from '@/components/UI/progress';
import { apiService } from '@/lib/api-service';
import { OnboardingFormData } from '@/types/onboarding';

import * as S from './styles';

interface CompletionSummaryProps {
    formData: OnboardingFormData;
    onBack: () => void;
};

export default function CompletionSummary({ formData, onBack }: CompletionSummaryProps) {
    const router = useRouter();

    const calculateCompletion = () => {
        let completed = 0;
        const total = 4;

        if (formData.personalInfo && Object.keys(formData.personalInfo).length > 0) {
            completed++;
        };

        if (formData.gamingPreferences && Object.keys(formData.gamingPreferences).length > 0) {
            completed++;
        };

        if (formData.documents && Object.keys(formData.documents).length > 0) {
            completed++;
        };

        if (formData.socialMedia && formData.socialMedia.length > 0) {
            completed++;
        };

        return Math.round((completed / total) * 100);
    };

    const completionPercentage = calculateCompletion();

    const handleGoToDashboard = async () => {
        try {
            await apiService.submitDashboardForm(formData);
            router.push('/dashboard');
        } catch (error) {
            console.error('Error submitting dashboard form:', error);
        }
    };

    return (
        <S.FormContainer>
            <CardHeader>
                <CardTitle>Profile Completed!</CardTitle>
                <CardDescription>
                    Your FURIA fan profile has been created. You're now ready to access your personalized dashboard.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <S.WelcomeContainer>
                    <S.AvatarContainer>
                        <S.Avatar>
                            <User size={40} />
                        </S.Avatar>
                    </S.AvatarContainer>
                    <S.WelcomeTitle>Welcome to the FURIA Family!</S.WelcomeTitle>
                    <S.WelcomeSubtitle>Your profile is {completionPercentage}% complete</S.WelcomeSubtitle>

                    <S.ProgressContainer>
                        <S.ProgressLabel>
                            <span>Profile Completion</span>
                            <span>{completionPercentage}%</span>
                        </S.ProgressLabel>
                        <Progress value={completionPercentage} />
                    </S.ProgressContainer>
                </S.WelcomeContainer>

                <S.SummaryGrid>
                    <S.SummaryItem>
                        <S.SummaryHeader>
                            <S.SummaryIcon>
                                <User size={20} />
                            </S.SummaryIcon>
                            <S.SummaryTitle>Personal Information</S.SummaryTitle>
                        </S.SummaryHeader>
                        <S.SummaryContent>
                            {formData.personalInfo.fullName ? <>Name: {formData.personalInfo.fullName}</> : <>Name not provided</>}
                            <br />
                            <S.StatusBadge status='verified'>
                                <CheckCircle size={12} /> Verified
                            </S.StatusBadge>
                        </S.SummaryContent>
                    </S.SummaryItem>

                    <S.SummaryItem>
                        <S.SummaryHeader>
                            <S.SummaryIcon>
                                <GameController size={20} />
                            </S.SummaryIcon>
                            <S.SummaryTitle>Gaming Preferences</S.SummaryTitle>
                        </S.SummaryHeader>
                        <S.SummaryContent>
                            {formData.gamingPreferences?.games?.length > 0 
                                ? `${formData.gamingPreferences.games.length} games selected` 
                                : 'No games selected'}
                            <br />
                            <S.StatusBadge status='verified'>
                                <CheckCircle size={12} /> Preferences saved
                            </S.StatusBadge>
                        </S.SummaryContent>
                    </S.SummaryItem>

                    <S.SummaryItem>
                        <S.SummaryHeader>
                            <S.SummaryIcon>
                                <FileCheck size={20} />
                            </S.SummaryIcon>
                            <S.SummaryTitle>Document Verification</S.SummaryTitle>
                        </S.SummaryHeader>
                        <S.SummaryContent>
                            Pending verification
                            <br />
                            <S.StatusBadge status='incomplete'>
                                <CheckCircle size={12} /> Incomplete
                            </S.StatusBadge>
                        </S.SummaryContent>
                    </S.SummaryItem>

                    <S.SummaryItem>
                        <S.SummaryHeader>
                            <S.SummaryIcon>
                                <Share2 size={20} />
                            </S.SummaryIcon>
                            <S.SummaryTitle>Social Media</S.SummaryTitle>
                        </S.SummaryHeader>
                        <S.SummaryContent>
                            {formData.socialMedia?.length || 0} accounts connected
                            <br />
                            <S.StatusBadge status={formData.socialMedia?.length > 0 ? 'connected' : 'not-connected'}>
                                <CheckCircle size={12} /> {formData.socialMedia?.length > 0 ? 'Connected' : 'No accounts connected'}
                            </S.StatusBadge>
                        </S.SummaryContent>
                    </S.SummaryItem>
                </S.SummaryGrid>

                <S.ButtonContainer>
                    <Button type='button' $variant='outline' onClick={onBack}>
                        Back
                    </Button>
                    <Button type='button' $variant='primary' onClick={handleGoToDashboard}>
                        Go to Dashboard
                    </Button>
                </S.ButtonContainer>
            </CardContent>
        </S.FormContainer>
    );
};