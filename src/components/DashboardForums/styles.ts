import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const ForumsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`;

const ForumCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
`;

const ForumHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const ForumTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const ForumContent = styled(CardContent)`
    padding-top: 0;
`;

const TopicsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
`;

const TopicItem = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    transition: background-color 0.2s ease;
    
    &:hover {
        background-color: #333333;
    }
`;

const VoteColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.space[2]};
    margin-right: ${({ theme }) => theme.space[3]};
    min-width: 50px;
`;

const VoteButton = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    color: ${({ theme, active }) => (active ? theme.colors.gold : theme.colors.gray[300])};
    cursor: pointer;
    transition: color 0.2s ease;
    
    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const VoteCount = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.space[1]} 0;
`;

const TopicContent = styled.div`
    flex: 1;
`;

const TopicTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    
    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

const TopicMeta = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
`;

const TopicStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    text-align: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const StatsNumber = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`;

const StatsLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const CreateTopicButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.space[6]};
    gap: ${({ theme }) => theme.space[2]};
`;

const PaginationButton = styled(Button) <{ active?: boolean }>`
    min-width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ active, theme }) => active && `
        background-color: ${theme.colors.gold};
        color: ${theme.colors.background};
        
        &:hover {
            background-color: ${theme.colors.goldDark};
        }
    `}
`;

export {
    PageHeader,
    PageTitle,
    ForumsContainer,
    ForumCard,
    ForumHeader,
    ForumTitle,
    ForumContent,
    TopicsList,
    TopicItem,
    VoteColumn,
    VoteButton,
    VoteCount,
    TopicContent,
    TopicTitle,
    TopicMeta,
    MetaItem,
    TopicStats,
    StatsNumber,
    StatsLabel,
    CreateTopicButton,
    Pagination,
    PaginationButton
};