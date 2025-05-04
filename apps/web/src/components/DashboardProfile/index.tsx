'use client';

import {
    useState,
    useEffect
} from 'react';

import {
    User,
    Edit,
    Calendar,
    Trophy,
    MessageSquare,
    Star,
    Shield,
    ChevronUp
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

import {
    apiService
} from '@/lib/api-service';

import {
    OnboardingFormDataDashboardProfile
} from '@/types/onboarding';

import {
    useAuth
} from '@/hooks/useAuth';

export default function ProfilePage() {
    const { getCPF } = useAuth();

    const [activeTab, setActiveTab] = useState('activity');
    const [profile, setProfile] = useState<OnboardingFormDataDashboardProfile>();
    const [loading, setLoading] = useState(false);

    const fetchProfile = async () => {
        setLoading(true);

        try {
            const cpf = getCPF();
            if (!cpf) {
                throw new Error('No CPF found');
            };

            const response = await apiService.getUserProfile(cpf);

            if (response.error) {
                throw new Error(response.error);
            };

            if (response.data) {
                setProfile(response.data);
            };
        } catch (err) {
            console.error('Error fetching profile overview:', err);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    
    const user = {
        stats: [
            { value: 42, label: 'Posts' },
            { value: 156, label: 'Likes' },
            { value: 8, label: 'Events' },
        ],
        activities: [
            {
                icon: <MessageSquare size={20} />,
                title: 'Posted in FURIA vs MiBR - Match Discussion',
                description: 'Great match! The tactics on Inferno were amazing.',
                date: '2 hours ago',
            },
            {
                icon: <ChevronUp size={20} />,
                title: 'Upvoted a topic',
                description: 'New CS2 strategies for Inferno',
                date: '5 hours ago',
            },
            {
                icon: <Trophy size={20} />,
                title: 'Earned a badge',
                description: 'Tournament Predictor',
                date: '1 day ago',
            },
            {
                icon: <Calendar size={20} />,
                title: 'RSVPd to an event',
                description: 'FURIA Fan Meet - Rio de Janeiro',
                date: '2 days ago',
            },
            {
                icon: <MessageSquare size={20} />,
                title: 'Posted in Copenhagen Major predictions',
                description: 'I think FURIA has a real shot at the semifinals this time!',
                date: '3 days ago',
            },
        ],
        games: [
            {
                name: 'Counter-Strike 2',
                hours: 342,
                stats: [
                    { value: 24, label: 'Wins' },
                    { value: 1.8, label: 'K/D' },
                    { value: 18, label: 'Matches' },
                ],
            },
            {
                name: 'Valorant',
                hours: 156,
                stats: [
                    { value: 12, label: 'Wins' },
                    { value: 1.5, label: 'K/D' },
                    { value: 10, label: 'Matches' },
                ],
            },
            {
                name: 'League of Legends',
                hours: 89,
                stats: [
                    { value: 8, label: 'Wins' },
                    { value: 2.3, label: 'KDA' },
                    { value: 15, label: 'Matches' },
                ],
            },
        ],
        socialConnections: [
            {
                name: 'Twitter',
                username: profile?.socialMedia?.twitch || '',
                icon: 'T',
                color: '#1DA1F2',
                connected: !!profile?.socialMedia?.twitch,
            },
            {
                name: 'Twitch',
                username: profile?.socialMedia?.twitch || '',
                icon: 'T',
                color: '#6441A4',
                connected: !!profile?.socialMedia?.twitch,
            },
            {
                name: 'Discord',
                username: profile?.socialMedia?.discord || '',
                icon: 'D',
                color: '#5865F2',
                connected: !!profile?.socialMedia?.discord,
            },
            {
                name: 'FACEIT',
                username: profile?.socialMedia?.HLTV || '',
                icon: 'F',
                color: '#FF5500',
                connected: !!profile?.socialMedia?.HLTV,
            },
            {
                name: 'HLTV',
                username: profile?.socialMedia?.HLTV || '',
                icon: 'H',
                color: '#333333',
                connected: !!profile?.socialMedia?.HLTV,
            },
        ],
    };

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <User size={24} />
                    My Profile
                </S.PageTitle>
            </S.PageHeader>

            <S.ProfileGrid>
                <S.ProfileSidebar>
                    <S.ProfileCard>
                        <S.ProfileContent>
                            <S.UserProfile>
                                <S.UserAvatar>
                                    <User size={60} />
                                    <S.EditAvatarButton>
                                        <Edit size={16} />
                                    </S.EditAvatarButton>
                                </S.UserAvatar>
                                <S.UserName>{profile?.fullName || 'Loading...'}</S.UserName>
                                <S.UserTag>{profile?.email || 'Loading...'}</S.UserTag>
                                <S.UserStats>
                                    {user.stats.map((stat, index) => (
                                        <S.StatItem key={index}>
                                            <S.StatValue>{stat.value}</S.StatValue>
                                            <S.StatLabel>{stat.label}</S.StatLabel>
                                        </S.StatItem>
                                    ))}
                                </S.UserStats>
                                <S.EditProfileButton $variant='outline'>
                                    <Edit size={16} />
                                    Edit Profile
                                </S.EditProfileButton>
                            </S.UserProfile>
                        </S.ProfileContent>
                    </S.ProfileCard>

                    <S.ProfileCard>
                        <S.ProfileHeader>
                            <S.ProfileTitle>Badges</S.ProfileTitle>
                        </S.ProfileHeader>
                        <S.ProfileContent>
                            <S.BadgeGrid>
                                {profile?.games?.map((game, index) => (
                                    <S.BadgeItem key={index}>
                                        <S.BadgeIcon>
                                            <Star size={24} />
                                        </S.BadgeIcon>
                                        <S.BadgeName>{game.name}</S.BadgeName>
                                        <S.BadgeDescription>Gaming Preferences</S.BadgeDescription>
                                    </S.BadgeItem>
                                ))}
                                {profile?.platform && 
                                    <S.BadgeItem>
                                        <S.BadgeIcon>
                                            <Trophy size={24} />
                                        </S.BadgeIcon>
                                        <S.BadgeName>{profile.platform}</S.BadgeName>
                                        <S.BadgeDescription>Gaming Platform Preference</S.BadgeDescription>
                                    </S.BadgeItem>
                                }
                                {profile?.playFrequency &&
                                    <S.BadgeItem>
                                        <S.BadgeIcon>
                                            <Calendar size={24} />
                                        </S.BadgeIcon>
                                        <S.BadgeName>{profile.playFrequency}</S.BadgeName>
                                        <S.BadgeDescription>Play Frequency</S.BadgeDescription>
                                    </S.BadgeItem>
                                }
                            </S.BadgeGrid>
                        </S.ProfileContent>
                    </S.ProfileCard>
                </S.ProfileSidebar>

                <S.ProfileMain>
                    <S.ProfileCard>
                        <S.ProfileContent>
                            <S.TabsContainer>
                                <S.Tab $active={activeTab === 'activity'} onClick={() => setActiveTab('activity')}>
                                    Activity
                                </S.Tab>
                                <S.Tab $active={activeTab === 'games'} onClick={() => setActiveTab('games')}>
                                    Games
                                </S.Tab>
                                <S.Tab $active={activeTab === 'social'} onClick={() => setActiveTab('social')}>
                                    Social Connections
                                </S.Tab>
                                <S.Tab $active={activeTab === 'achievements'} onClick={() => setActiveTab('achievements')}>
                                    Achievements
                                </S.Tab>
                            </S.TabsContainer>

                            {activeTab === 'activity' && (
                                <S.ActivityList>
                                    {user.activities.map((activity, index) => (
                                        <S.ActivityItem key={index}>
                                            <S.ActivityIcon>{activity.icon}</S.ActivityIcon>
                                            <S.ActivityContent>
                                                <S.ActivityTitle>{activity.title}</S.ActivityTitle>
                                                <S.ActivityDescription>{activity.description}</S.ActivityDescription>
                                                <S.ActivityDate>{activity.date}</S.ActivityDate>
                                            </S.ActivityContent>
                                        </S.ActivityItem>
                                    ))}
                                </S.ActivityList>
                            )}

                            {activeTab === 'games' && (
                                <S.GamesList>
                                    {user.games.map((game, index) => (
                                        <S.GameItem key={index}>
                                            <S.GameHeader>
                                                <S.GameTitle>{game.name}</S.GameTitle>
                                                <S.GameHours>{game.hours}h</S.GameHours>
                                            </S.GameHeader>
                                            <S.GameStats>
                                                {game.stats.map((stat, statIndex) => (
                                                    <S.GameStat key={statIndex}>
                                                        <S.GameStatValue>{stat.value}</S.GameStatValue>
                                                        <S.GameStatLabel>{stat.label}</S.GameStatLabel>
                                                    </S.GameStat>
                                                ))}
                                            </S.GameStats>
                                        </S.GameItem>
                                    ))}
                                </S.GamesList>
                            )}

                            {activeTab === 'social' && (
                                <S.SocialConnections>
                                    {user.socialConnections.map((connection, index) => (
                                        <S.SocialItem key={index}>
                                            <S.SocialInfo>
                                                <S.SocialIcon $bgColor={connection.color}>{connection.icon}</S.SocialIcon>
                                                <div>
                                                    <S.SocialName>{connection.name}</S.SocialName>
                                                    <S.SocialUsername>{connection.username}</S.SocialUsername>
                                                </div>
                                            </S.SocialInfo>
                                            <S.SocialStatus $connected={connection.connected}>
                                                {connection.connected ? 'Connected' : 'Not Connected'}
                                            </S.SocialStatus>
                                        </S.SocialItem>
                                    ))}
                                </S.SocialConnections>
                            )}

                            {activeTab === 'achievements' && (
                                <div>Coming soon...</div>
                            )}
                        </S.ProfileContent>
                    </S.ProfileCard>
                </S.ProfileMain>
            </S.ProfileGrid>
        </DashboardLayout>
    );
};