import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '@/components/UI/card';

const PageHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const GamesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const GameCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

const GameImage = styled.div<{ image?: string }>`
    height: 160px;
    background-image: url(${({ image }) => image || '/placeholder.svg?height=160&width=300'});
    background-size: cover;
    background-position: center;
`;

const GameHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[3]};
`;

const GameTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const GameContent = styled(CardContent)`
    padding-top: 0;
`;

const GameDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

const GameStats = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[3]};
    padding-top: ${({ theme }) => theme.space[3]};
    border-top: 1px solid #333333;
`;

const StatItem = styled.div`
    text-align: center;
`;

const StatValue = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gold};
`;

const StatLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

export {
    PageHeader,
    PageTitle,
    GamesGrid,
    GameCard,
    GameImage,
    GameHeader, 
    GameTitle,
    GameContent,
    GameDescription,
    GameStats,
    StatItem,
    StatValue,
    StatLabel
};