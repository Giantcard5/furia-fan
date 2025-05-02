import styled from 'styled-components';

import {
    Card
} from '@/components/UI/card';

const FormContainer = styled(Card)`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const WelcomeContainer = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const Avatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const WelcomeTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const WelcomeSubtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ProgressContainer = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const ProgressLabel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[2]};
    
    span {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.gray[300]};
    }
`;

const SummaryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SummaryItem = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => theme.space[4]};
`;

const SummaryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

const SummaryIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const SummaryTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const SummaryContent = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const StatusBadge = styled.span<{ status: 'verified' | 'incomplete' | 'connected' | 'not-connected' }>`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    border-radius: ${({ theme }) => theme.radii.full};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    
    // Update this latter
    ${({ status, theme }) => {
        switch (status) {
            case 'verified':
                return `
                    background-color: ${theme.colors.gold}20;
                    color: ${theme.colors.gold};
                `;
            case 'incomplete':
                return `
                    background-color: ${theme.colors.gold}20;
                    color: ${theme.colors.gold};
                `;
            case 'connected':
                return `
                    background-color: ${theme.colors.gold}20;
                    color: ${theme.colors.gold};
                `;
            case 'not-connected':
                return `
                    background-color: ${theme.colors.gold}20;
                    color: ${theme.colors.gold};
                `;
            default:
                return '';
        };
    }};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[6]};
`;

const VerificationContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[6]};
    padding: ${({ theme }) => theme.space[4]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.lg};
    text-align: center;
`;

const VerificationTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const VerificationDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const LoadingSpinner = styled.div`
    display: flex;
    justify-content: center;
    margin: ${({ theme }) => theme.space[4]} 0;
    
    svg {
        animation: spin 1.5s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const VerificationStep = styled.div<{ $active: boolean; $completed: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[2]};
    padding: ${({ theme }) => theme.space[2]};
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ $active, $completed, theme }) =>
        $completed ? `${theme.colors.gold}10` : $active ? `${theme.colors.red}10` : "transparent"};
    
    svg {
        color: ${({ $active, $completed, theme }) =>
        $completed ? theme.colors.gold : $active ? theme.colors.red : theme.colors.gray[500]};
    }
`;

const StepText = styled.span<{ $active: boolean; $completed: boolean }>`
    color: ${({ $active, $completed, theme }) =>
        $completed ? theme.colors.gold : $active ? theme.colors.red : theme.colors.gray[300]};
    font-weight: ${({ $active, $completed, theme }) =>
        $active || $completed ? theme.fontWeights.medium : theme.fontWeights.normal};
`;

const VerificationSteps = styled.div`
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
`;

export {
    FormContainer,
    WelcomeContainer,
    AvatarContainer,
    Avatar,
    WelcomeTitle,
    WelcomeSubtitle,
    ProgressContainer,
    ProgressLabel,
    SummaryGrid,
    SummaryItem,
    SummaryHeader,
    SummaryIcon,
    SummaryTitle,
    SummaryContent,
    StatusBadge,
    ButtonContainer,
    VerificationContainer,
    VerificationTitle,
    VerificationDescription,
    LoadingSpinner,
    VerificationStep,
    StepText,
    VerificationSteps
};