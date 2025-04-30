import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

const PageHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`

const ProfileGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: 1fr 2fr;
    }
`

const ProfileSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`

const ProfileMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`

const ProfileCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
`

const ProfileHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`

const ProfileTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ProfileContent = styled(CardContent)`
    padding-top: 0;
`

const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.space[4]} 0;
`

const UserAvatar = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    position: relative;
`

const EditAvatarButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.goldDark};
    }
`

const UserName = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[1]};
`

const UserTag = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const UserBadge = styled.div`
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.gold}20;
    color: ${({ theme }) => theme.colors.gold};
    border-radius: ${({ theme }) => theme.radii.full};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const UserStats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.space[2]};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const StatItem = styled.div`
    padding: ${({ theme }) => theme.space[2]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
    text-align: center;
`

const StatValue = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`

const StatLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
`

const EditProfileButton = styled(Button)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[2]};
`

const SectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[4]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`

const ProgressSection = styled.div`
    margin-bottom: ${({ theme }) => theme.space[4]};
`

const ProgressHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[2]};
`

const ProgressTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[400]};
`

const ProgressValue = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[400]};
    letter-spacing: .02rem;
`

const BadgeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.space[4]};
`

const BadgeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const BadgeIcon = styled.div<{ unlocked?: boolean }>`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme, unlocked }) => (unlocked ? theme.colors.gold + '20' : theme.colors.backgroundLight)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme, unlocked }) => (unlocked ? theme.colors.gold : theme.colors.gray[500])};
    margin-bottom: ${({ theme }) => theme.space[2]};
`

const BadgeName = styled.div<{ unlocked?: boolean }>`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme, unlocked }) => (unlocked ? theme.colors.white : theme.colors.gray[500])};
`

const BadgeDescription = styled.div<{ unlocked?: boolean }>`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme, unlocked }) => (unlocked ? theme.colors.gray[300] : theme.colors.gray[500])};
`

const TabsContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #333333;
    margin: ${({ theme }) => theme.space[4]} 0;
    overflow-x: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

const Tab = styled.button<{ $active: boolean }>`
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
    background: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme, $active }) => ($active ? theme.colors.gold : 'transparent')};
    color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.gray[300])};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme, $active }) => ($active ? theme.fontWeights.medium : theme.fontWeights.normal)};
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`

const ActivityList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[3]};
`

const ActivityItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
`

const ActivityIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
    flex-shrink: 0;
`

const ActivityContent = styled.div`
    flex: 1;
`

const ActivityTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[1]};
`

const ActivityDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`

const ActivityDate = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-top: ${({ theme }) => theme.space[1]};
`

const GamesList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.space[3]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const GameItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
`

const GameHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[2]};
`

const GameTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.white};
`

const GameHours = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`

const GameStats = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[2]};
`

const GameStat = styled.div`
    text-align: center;
`

const GameStatValue = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gold};
`

const GameStatLabel = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray[300]};
`

const SocialConnections = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[3]};
`

const SocialItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
`

const SocialInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[3]};
`

const SocialIcon = styled.div<{ $bgColor?: string }>`
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ $bgColor }) => $bgColor || '#333'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 14px;
`

const SocialName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.white};
`

const SocialUsername = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`

const SocialStatus = styled.div<{ $connected: boolean }>`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme, $connected }) => ($connected ? theme.colors.gold : theme.colors.gray[500])};
`

export {
    PageHeader,
    PageTitle,
    ProfileGrid,
    ProfileSidebar,
    ProfileMain,
    ProfileCard,
    ProfileHeader,
    ProfileTitle,
    ProfileContent,
    UserProfile,
    UserAvatar,
    EditAvatarButton,
    UserName,
    UserTag,
    UserBadge,
    UserStats,
    StatItem,
    StatValue,
    StatLabel,
    EditProfileButton,
    SectionTitle,
    ProgressSection,
    ProgressHeader,
    ProgressTitle,
    ProgressValue,
    BadgeGrid,
    BadgeItem,
    BadgeIcon,
    BadgeName,
    BadgeDescription,
    TabsContainer,
    Tab,
    ActivityList,
    ActivityItem,
    ActivityIcon,
    ActivityContent,
    ActivityTitle,
    ActivityDescription,
    ActivityDate,
    GamesList,
    GameItem,
    GameHeader,
    GameTitle,
    GameHours,
    GameStats,
    GameStat,
    GameStatValue,
    GameStatLabel,
    SocialConnections,
    SocialItem,
    SocialInfo,
    SocialIcon,
    SocialName,
    SocialUsername,
    SocialStatus    
};