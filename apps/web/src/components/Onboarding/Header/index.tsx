'use client';

import Link from 'next/link';
import Image from 'next/image';

import * as S from './styles';

import Progress from '../../UI/progress';
interface OnboardingHeaderProps {
    currentStep: number
};

export default function OnboardingHeader({ currentStep }: OnboardingHeaderProps) {
    const steps = [
        { label: 'Personal Info', step: 1 },
        { label: 'Gaming Preferences', step: 2 },
        { label: 'Document Upload', step: 3 },
        { label: 'Completion', step: 4 },
    ];

    const progressValue = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <S.Header>
            <S.Logo>
                <Link href='/'>
                    <Image
                        src='/icon-text-white.svg'
                        alt='logo'
                        width={140}
                        height={80}
                    />
                </Link>
            </S.Logo>

            <S.StepsContainer>
                <S.Steps>
                    {steps.map((step) => (
                        <S.Step key={step.step} $active={currentStep === step.step} $completed={currentStep > step.step}>
                            <div className='step-number'>{step.step}</div>
                            <div className='step-label'>{step.label}</div>
                        </S.Step>
                    ))}
                </S.Steps>

                <S.ProgressContainer>
                    <Progress value={progressValue} />
                </S.ProgressContainer>
            </S.StepsContainer>
        </S.Header>
    );
};