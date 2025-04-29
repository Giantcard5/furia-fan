import styled from 'styled-components';

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '../UI/card';

import Button from '../UI/button';

const EventsCard = styled(Card)`
    overflow: hidden;
    background-color: #141414;
`;

const EventsHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const EventsTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const EventsContent = styled(CardContent)`
    padding-top: 0;
`;

const EventsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const EventCard = styled.div`
    background-color: transparent;
    border-radius: ${({ theme }) => theme.radii.lg};
    overflow: hidden;
`;

const EventImage = styled.div<{ image?: string }>`
    height: 120px;
    background-image: url(${({ image }) => image || '/placeholder.svg?height=120&width=300'});
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: ${({ theme }) => theme.radii.md};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const EventTag = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.space[2]};
    right: ${({ theme }) => theme.space[2]};
    background-color: #141414;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    border-radius: ${({ theme }) => theme.radii.md};
`;

const EventContent = styled.div`
    padding: ${({ theme }) => theme.space[1]};
`;

const EventTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const EventMeta = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const EventLocation = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

const ViewDetailsButton = styled(Button)`
    width: 100%;
    background-color: transparent;
    border: 1px solid #333333;
    color: ${({ theme }) => theme.colors.white};
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
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
    EventsCard,
    EventsHeader,
    EventsTitle,
    EventsContent,
    EventsGrid,
    EventCard,
    EventImage,
    EventTag,
    EventContent,
    EventTitle,
    EventMeta,
    EventLocation,
    ViewDetailsButton,
    ViewAllButton
};