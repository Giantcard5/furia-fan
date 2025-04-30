import styled from 'styled-components';

import { 
    Card 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

const FormContainer = styled(Card)`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const Icon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const SectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[6]};
    
    &:first-of-type {
        margin-top: 0;
    }
`;

const SocialAccountsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
`;

const SocialAccountItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space[4]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.lg};
`;

const SocialAccountInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
`;

const SocialIcon = styled.div<{ $bgColor?: string }>`
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ $bgColor }) => $bgColor || "#333"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const SocialAccountDetails = styled.div``;

const SocialAccountName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SocialAccountDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const ConnectButton = styled(Button)`
    min-width: 100px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[6]};
`;

export {
    FormContainer,
    IconContainer,
    Icon,
    SectionTitle,
    SocialAccountsList,
    SocialAccountItem,
    SocialAccountInfo,
    SocialIcon,
    SocialAccountDetails,
    SocialAccountName,
    SocialAccountDescription,
    ConnectButton,
    ButtonContainer    
};