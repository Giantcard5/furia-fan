import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '../UI/card';

import Button from '../UI/button';

const InsightsCard = styled(Card)`
    overflow: hidden;
    background-color: #141414;
`;

const InsightsHeader = styled(CardHeader)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const InsightsTitle = styled(CardTitle)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const InsightsContent = styled(CardContent)`
    padding-top: 0;
`;

const TabsContainer = styled.div`
    display: flex;
    margin-bottom: ${({ theme }) => theme.space[6]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
    padding: 2px;
`;

const Tab = styled.button<{ $active: boolean }>`
    flex: 1;
    padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
    background: ${({ theme, $active }) => ($active ? '#141414' : 'transparent')};
    border: none;
    color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.gray[300])};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme, $active }) => ($active ? theme.fontWeights.medium : theme.fontWeights.normal)};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.radii.md};
    transition: all 0.2s ease;
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const InsightsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[5]};
`;

const InsightItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
`;

const InsightHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InsightTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const InsightValue = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const InsightDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

const InsightProgressBar = styled.div`
    height: 6px;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.full};
    overflow: hidden;
    margin-top: ${({ theme }) => theme.space[1]};
`;

const InsightProgress = styled.div<{ value: number }>`
    height: 100%;
    width: ${({ value }) => `${value}%`};
    background-color: ${({ theme }) => theme.colors.gold};
    border-radius: ${({ theme }) => theme.radii.full};
`;

const InfoButton = styled(Button)`
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
`;

export {
    InsightsCard,
    InsightsHeader,
    InsightsTitle,
    InsightsContent,
    TabsContainer,
    Tab,
    InsightsList,
    InsightItem,
    InsightHeader,
    InsightTitle,
    InsightValue,
    InsightDescription,
    InsightProgressBar,
    InsightProgress,
    InfoButton
};