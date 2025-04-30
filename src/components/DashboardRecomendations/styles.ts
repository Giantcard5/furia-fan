import styled from 'styled-components';

import { 
    Card, 
    CardContent, 
    CardHeader,
    CardTitle
} from '../UI/card';
import Button from '../UI/button';

const RecommendationsCard = styled(Card)`
    overflow: hidden;
    background-color: #141414;
`;

const RecommendationsHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const RecommendationsTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const RecommendationsContent = styled(CardContent)`
    padding-top: 0;
`;

const RecommendationsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[3]};
`;

const RecommendationItem = styled.div<{ $active?: boolean }>`
    background-color: ${({ theme, $active }) => ($active ? theme.colors.backgroundLight : 'transparent')};
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => theme.space[3]};
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[3]};
`;

const RecommendationIcon = styled.div<{ $completed?: boolean; $active?: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme, $completed, $active }) =>
        $completed ? theme.colors.goldDark : $active ? theme.colors.gold : theme.colors.gray[300]};
    flex-shrink: 0;
`;

const RecommendationContent = styled.div`
    flex: 1;
`;

const RecommendationTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

const RecommendationDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const RecommendationAction = styled(Button)`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    height: auto;
`;

const ViewAllButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: ${({ theme }) => theme.space[4]};
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[300]};
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
`;

export {
    RecommendationsCard,
    RecommendationsHeader,
    RecommendationsTitle,
    RecommendationsContent,
    RecommendationsList,
    RecommendationItem,
    RecommendationIcon,
    RecommendationContent,
    RecommendationTitle,
    RecommendationDescription,
    RecommendationAction,
    ViewAllButton
};