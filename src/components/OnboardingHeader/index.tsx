'use client';

import {
    Container
} from '@/components/UI/container';

import Image from 'next/image';

import * as S from './styles';

interface OnboardingHeaderProps {
    currentStep: number;
    totalSteps: number;
};

export function OnboardingHeader({ currentStep, totalSteps }: OnboardingHeaderProps) {
    const steps = [
        { number: 1, title: 'Personal Info' },
        { number: 2, title: 'Gaming Preferences' },
        { number: 3, title: 'Document Upload' },
        { number: 4, title: 'Social Media' },
        { number: 5, title: 'Completion' },
    ];

    return (
        <S.HeaderWrapper>
            <Container>
                <S.HeaderContent>
                    <S.LogoLink href='/'>
                        <S.LogoWrapper>
                            <Image
                                src='/icon-text-white.svg'
                                alt='FURIA Text'
                                width={70}
                                height={70}
                            />
                        </S.LogoWrapper>
                    </S.LogoLink>

                    <S.StepsWrapper>
                        {steps.map((step) => (
                            <S.StepItem key={step.number}>
                                <S.StepCircle active={currentStep === step.number} completed={currentStep > step.number}>
                                    {step.number}
                                </S.StepCircle>
                                <S.StepLabel active={currentStep === step.number} completed={currentStep > step.number}>
                                    {step.title}
                                </S.StepLabel>
                                {step.number < totalSteps && <S.StepDivider completed={currentStep > step.number} />}
                            </S.StepItem>
                        ))}
                    </S.StepsWrapper>

                    <S.MobileStepInfo>
                        <S.MobileStepText>
                            Step {currentStep} of {totalSteps}: {steps.find((s) => s.number === currentStep)?.title}
                        </S.MobileStepText>
                    </S.MobileStepInfo>
                </S.HeaderContent>
            </Container>
        </S.HeaderWrapper>
    );
};

export default OnboardingHeader;