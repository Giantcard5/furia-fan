import styled from 'styled-components';

import {
    motion
} from 'framer-motion';

import {
    CheckCircle2 
} from 'lucide-react';

const StepContainer = styled.div`
    width: 100%;
`;

const HeaderContainer = styled.div`
    margin-bottom: 1.5rem;
`;

const StepTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
`;

const LogoCircle = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WelcomeContainer = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const WelcomeTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
`;

const ProgressText = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const ProgressContainer = styled.div`
    margin-top: 1rem;
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const InfoCard = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

const IconCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-top: 0.25rem;
`;

const IconWrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
`;

const InfoContent = styled.div`
    flex: 1;
`;

const InfoTitle = styled.h4`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    margin-bottom: 0.25rem;
`;

const InfoDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
`;

const VerificationStatus = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[500]};
`;

const CheckIcon = styled(CheckCircle2)`
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.colors.white};
`;

export {
    StepContainer,
    HeaderContainer,
    StepTitle,
    StepDescription,
    LogoCircle,
    LogoContainer,
    WelcomeContainer,
    WelcomeTitle,
    ProgressContainer,
    ProgressText,
    InfoCard,
    InfoGrid,
    IconCircle,
    IconWrapper,
    InfoContent,
    InfoTitle,
    InfoDescription,
    VerificationStatus,
    CheckIcon
};