import styled from 'styled-components';

import { 
    Card, 
    CardContent,
    CardHeader, 
    CardTitle 
} from '../UI/card'

import Button from '../UI/button'

const SocialCard = styled(Card)`
    overflow: hidden;
    background-color: #141414;
`;

const SocialHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const SocialTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const SocialContent = styled(CardContent)`
    padding-top: 0;
`;

const SocialList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[3]};
`;

const SocialItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.lg};
    
    &:hover {
        background-color: #333333;
    }
`;

const SocialInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
`;

const SocialIcon = styled.div<{ $bgColor?: string }>`
    width: 28px;
    height: 28px;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ $bgColor }) => $bgColor || '#333'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 14px;
`;

const SocialName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SocialStatus = styled.div<{ $connected: boolean }>`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme, $connected }) => ($connected ? theme.colors.gold : theme.colors.gray[500])};
`;

const ConnectButton = styled(Button)`
    min-width: 80px;
    height: 28px;
    padding: 0 ${({ theme }) => theme.space[3]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const ConnectMoreContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[4]};
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.lg};
    text-align: center;
`;

const ConnectMoreText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

export {
    SocialCard,
    SocialHeader,
    SocialTitle,
    SocialContent,
    SocialList,
    SocialItem,
    SocialInfo,
    SocialIcon,
    SocialName,
    SocialStatus,
    ConnectButton,
    ConnectMoreContainer,
    ConnectMoreText
};