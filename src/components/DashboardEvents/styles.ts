import styled from 'styled-components';

import Button from '@/components/UI/button';

import { Card } from '@/components/UI/card';
import { Input } from '@/components/UI/input';

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.space[4]};
`

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`

const SearchContainer = styled.div`
    position: relative;
    max-width: 300px;
    width: 100%;
`

const SearchInput = styled(Input)`
    padding-left: ${({ theme }) => theme.space[10]};
    height: 40px;
    display: flex;
    align-items: center;
`

const SearchIcon = styled.div`
    position: absolute;
    left: ${({ theme }) => theme.space[3]};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray[500]};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
`

const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.space[3]};

    > div:first-child {
        display: flex;
        gap: ${({ theme }) => theme.space[3]};
        flex-wrap: wrap;
    }
`

const FilterButton = styled(Button) <{ $active?: boolean }>`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: .01rem;
    background-color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.backgroundLight)};
    color: ${({ theme, $active }) => ($active ? theme.colors.background : theme.colors.white)};
    
    &:hover {
        background-color: ${({ theme, $active }) => ($active ? theme.colors.gold : '#333333')};
        color: ${({ theme, $active }) => ($active ? theme.colors.background : theme.colors.gold)};
    }
`

const EventsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const EventCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`

const EventImage = styled.div<{ image?: string }>`
    height: 180px;
    background-image: url(${({ image }) => image || '/placeholder.svg?height=180&width=400'});
    background-size: cover;
    background-position: center;
    position: relative;
`

const EventTag = styled.div<{ type?: string }>`
    position: absolute;
    top: ${({ theme }) => theme.space[3]};
    right: ${({ theme }) => theme.space[3]};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    background-color: ${({ theme }) => theme.colors.gold}DD;
    color: ${({ theme }) => theme.colors.gray[200]};
`

const EventContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space[4]};
    height: 240px;
`

const EventTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.gold};
`

const EventMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.white};
`

const EventActions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[2]};
`

const ActionButton = styled(Button)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[2]};
`

const NoEvents = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.space[8]};
    color: ${({ theme }) => theme.colors.white};
    grid-column: 1 / -1;
`

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.space[6]};
    gap: ${({ theme }) => theme.space[2]};
`

const PaginationButton = styled(Button) <{ $active?: boolean }>`
    min-width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ $active, theme }) => $active && `
        background-color: ${theme.colors.gold};
        color: ${theme.colors.background};  
        
        &:hover {
            background-color: ${theme.colors.gold};
        }
    `}
`;

export {
    PageHeader,
    PageTitle,
    SearchContainer,
    SearchInput,
    SearchIcon,
    FiltersContainer,
    FilterButton,
    EventsGrid,
    EventCard,
    EventImage,
    EventTag,
    EventContent,
    EventTitle,
    EventMeta,
    MetaItem,
    EventActions,
    ActionButton,
    NoEvents,
    Pagination,
    PaginationButton,
};