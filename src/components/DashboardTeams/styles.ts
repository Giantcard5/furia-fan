import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '@/components/UI/card';

const PageHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`

const TeamsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const TeamCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
`

const TeamHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`

const TeamTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`

const TeamContent = styled(CardContent)`
    padding-top: 0;
`

const TeamImage = styled.div<{ image?: string }>`
    height: 200px;
    background-image: url(${({ image }) => image || '/placeholder.svg?height=200&width=400'});
    background-size: cover;
    background-position: center;
    border-radius: ${({ theme }) => theme.radii.md};
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const TeamDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const TeamStats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const StatItem = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
`

const StatValue = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gold};
    margin-bottom: ${({ theme }) => theme.space[1]};
`

const StatLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`

const TeamRoster = styled.div`
    margin-top: ${({ theme }) => theme.space[4]};
`

const RosterTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.white};
`

const PlayersList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.space[3]};
`

const PlayerItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
    padding: ${({ theme }) => theme.space[2]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
`

const PlayerAvatar = styled.div<{ image?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${({ image }) => image || '/placeholder.svg?height=40&width=40'});
    background-size: cover;
    background-position: center;
`

const PlayerInfo = styled.div``

const PlayerName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
`

const PlayerRole = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`

export {
    PageHeader,
    PageTitle,
    TeamsContainer,
    TeamCard,
    TeamHeader,
    TeamTitle,
    TeamContent,
    TeamImage,
    TeamDescription,
    TeamStats,
    StatItem,
    StatValue,
    StatLabel,
    TeamRoster,
    RosterTitle,
    PlayersList,
    PlayerItem,
    PlayerAvatar,
    PlayerInfo,
    PlayerName,
    PlayerRole
};