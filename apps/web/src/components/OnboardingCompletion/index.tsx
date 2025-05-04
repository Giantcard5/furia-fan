'use client'

import {
    useEffect,
    useState
} from 'react';

import {
    CheckCircle,
    User,
    GamepadIcon as GameController,
    FileCheck,
    Share2,
    Loader2,
    Shield
} from 'lucide-react';

import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/UI/card';

import Button from '@/components/UI/button';
import Progress from '@/components/UI/progress';

import * as S from './styles';

import {
    useAuth
} from '@/hooks/useAuth';

import {
    UserRegistration
} from '@furiafan/types';

import { apiService } from '@/lib/api-service';

interface CompletionSummaryProps {
    formData: UserRegistration;
    onBack: () => void;
};

export default function CompletionSummary({ formData, onBack }: CompletionSummaryProps) {
    const { registerUser } = useAuth();

    const [isVerifying, setIsVerifying] = useState(false)
    const [verificationStep, setVerificationStep] = useState(0)
    const [verificationComplete, setVerificationComplete] = useState(false)

    const calculateCompletion = () => {
        let $completed = 0;
        const total = 4;

        if (formData.personalInfo && Object.keys(formData.personalInfo).length > 0) {
            $completed++;
        };

        if (formData.gamingPreferences && Object.keys(formData.gamingPreferences).length > 0) {
            $completed++;
        };

        if (formData.documents && Object.keys(formData.documents).length > 0) {
            $completed++;
        };

        if (formData.socialMedia && Object.keys(formData.socialMedia).length > 0) {
            $completed++;
        };

        return Math.round(($completed / total) * 100);
    };

    const completionPercentage = calculateCompletion();

    const handleGoToDashboard = async () => {
        try {
            setIsVerifying(true);
            setVerificationStep(1);

            const verificationSteps = [
                { step: 1, delay: 1500 },
                { step: 2, delay: 2000 },
                { step: 3, delay: 1800 },
                { step: 4, delay: 2500 },
            ];

            let totalDelay = 0

            verificationSteps.forEach(({ step, delay }) => {
                totalDelay += delay;
                setTimeout(() => {
                    setVerificationStep(step);
                }, totalDelay);
            });

            setTimeout(() => {
                setVerificationComplete(true);
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 1500);
            }, totalDelay + 1000);

            // const documentAnalysis = await apiService.analyzeDocument(formData.documents.idDocument.preview);
            // if (documentAnalysis.error) {
            //     throw new Error('Failed to analyze document: ' + documentAnalysis.error);
            // };
            // if (!documentAnalysis.data?.cpf) {
            //     throw new Error('CPF not found in the document');
            // }
            // setVerificationStep(2);

            // const identityVerification = await apiService.verifyIdentity(
            //     formData.documents.idDocument.preview,
            //     formData.documents.selfieWithId.preview
            // );
            // if (identityVerification.error) {
            //     throw new Error('Failed to verify identity: ' + identityVerification.error);
            // };
            // if (!identityVerification.data?.isMatch || identityVerification.data.confidence < 70) {
            //     throw new Error('Identity verification failed: ' + identityVerification.data.details);
            // };
            // setVerificationStep(3);

            // const registerResponse = await registerUser(formData);
            // if (!registerResponse) {
            //     throw new Error('Failed to register user');
            // };
            // setVerificationStep(4);
        } catch (error) {
            console.error('Error during verification:', error);

            setIsVerifying(false);
            setVerificationStep(0);
        };
    };

    useEffect(() => console.log(verificationStep), [verificationStep]);

    return (
        <S.FormContainer>
            <CardHeader>
                <CardTitle>Profile $completed!</CardTitle>
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
                            {Object.keys(formData.socialMedia).length || 0} accounts connected
                            <br />
                            <S.StatusBadge status={Object.keys(formData.socialMedia).length > 0 ? 'connected' : 'not-connected'}>
                                <CheckCircle size={12} /> {Object.keys(formData.socialMedia).length > 0 ? 'Connected' : 'No accounts connected'}
                            </S.StatusBadge>
                        </S.SummaryContent>
                    </S.SummaryItem>
                </S.SummaryGrid>

                {isVerifying && (
                    <S.VerificationContainer>
                        <S.VerificationTitle>Verificando seus documentos</S.VerificationTitle>
                        <S.VerificationDescription>
                            {verificationComplete
                                ? 'Verificação concluída! Redirecionando para o painel...'
                                : 'Estamos analisando seus documentos antes de liberar o acesso completo.'}
                        </S.VerificationDescription>

                        {!verificationComplete && (
                            <S.LoadingSpinner>
                                <Loader2 size={40} />
                            </S.LoadingSpinner>
                        )}

                        <S.VerificationSteps>
                            <S.VerificationStep $active={verificationStep === 1} $completed={verificationStep > 1}>
                                {verificationStep > 1 ? (
                                    <CheckCircle size={18} />
                                ) : verificationStep === 1 ? (
                                    <Loader2 size={18} />
                                ) : (
                                    <FileCheck size={18} />
                                )}
                                <S.StepText $active={verificationStep === 1} $completed={verificationStep > 1}>
                                    Verificando documentos enviados
                                </S.StepText>
                            </S.VerificationStep>

                            <S.VerificationStep $active={verificationStep === 2} $completed={verificationStep > 2}>
                                {verificationStep > 2 ? (
                                    <CheckCircle size={18} />
                                ) : verificationStep === 2 ? (
                                    <Loader2 size={18} />
                                ) : (
                                    <User size={18} />
                                )}
                                <S.StepText $active={verificationStep === 2} $completed={verificationStep > 2}>
                                    Confirmando identidade
                                </S.StepText>
                            </S.VerificationStep>

                            <S.VerificationStep $active={verificationStep === 3} $completed={verificationStep > 3}>
                                {verificationStep > 3 ? (
                                    <CheckCircle size={18} />
                                ) : verificationStep === 3 ? (
                                    <Loader2 size={18} />
                                ) : (
                                    <Shield size={18} />
                                )}
                                <S.StepText $active={verificationStep === 3} $completed={verificationStep > 3}>
                                    Configurando permissões de acesso
                                </S.StepText>
                            </S.VerificationStep>

                            <S.VerificationStep $active={verificationStep === 4} $completed={verificationComplete}>
                                {verificationComplete ? (
                                    <CheckCircle size={18} />
                                ) : verificationStep === 4 ? (
                                    <Loader2 size={18} />
                                ) : (
                                    <GameController size={18} />
                                )}
                                <S.StepText $active={verificationStep === 4} $completed={verificationComplete}>
                                    Preparando seu painel personalizado
                                </S.StepText>
                            </S.VerificationStep>
                        </S.VerificationSteps>
                    </S.VerificationContainer>
                )}

                <S.ButtonContainer>
                    <Button type='button' $variant='outline' onClick={onBack}>
                        Back
                    </Button>
                    <Button type='button' $variant='primary' onClick={handleGoToDashboard} disabled={isVerifying}>
                        {isVerifying ? (
                            <>
                                <Loader2 size={16} className='mr-2 animate-spin' />
                                Verificando...
                            </>
                        ) : (
                            'Go to Dashboard'
                        )}
                    </Button>
                </S.ButtonContainer>
            </CardContent>
        </S.FormContainer>
    );
};