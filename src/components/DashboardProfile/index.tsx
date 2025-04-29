'use client';

import { useState } from 'react';

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

import Progress from '@/components/UI/progress';

import * as S from './styles';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('activity');

    const user = {
        name: 'FURIA Fan',
        username: '@furiafan123',
        badge: 'Gold Member',
        stats: [
            { value: 42, label: 'Posts' },
            { value: 156, label: 'Likes' },
            { value: 8, label: 'Events' },
        ],
        progress: [
            { title: 'Profile Completion', value: 85, max: 100 },
            { title: 'Community Reputation', value: 65, max: 100 },
            { title: 'Fan Level', value: 3, max: 10 },
        ],
        badges: [
            { name: 'Early Supporter', description: 'Joined during beta', icon: <Star size={24} />, unlocked: true },
            { name: 'Event Attendee', description: 'Attended a FURIA event', icon: <Calendar size={24} />, unlocked: true },
            {
                name: 'Forum Contributor',
                description: 'Posted 50+ times',
                icon: <MessageSquare size={24} />,
                unlocked: false,
            },
            {
                name: 'Tournament Predictor',
                description: 'Correctly predicted winners',
                icon: <Trophy size={24} />,
                unlocked: true,
            },
            { name: 'Content Creator', description: 'Created original content', icon: <Star size={24} />, unlocked: false },
            {
                name: 'Verified Fan',
                description: 'Completed identity verification',
                icon: <Shield size={24} />,
                unlocked: true,
            },
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
                username: '@furiafan123',
                icon: 'T',
                color: '#1DA1F2',
                connected: true,
            },
            {
                name: 'Twitch',
                username: 'furiafan123',
                icon: 'T',
                color: '#6441A4',
                connected: true,
            },
            {
                name: 'Discord',
                username: 'furiafan123#1234',
                icon: 'D',
                color: '#5865F2',
                connected: true,
            },
            {
                name: 'FACEIT',
                username: 'furiafan123',
                icon: 'F',
                color: '#FF5500',
                connected: false,
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
                                <S.UserName>{user.name}</S.UserName>
                                <S.UserTag>{user.username}</S.UserTag>
                                <S.UserBadge>{user.badge}</S.UserBadge>
                                <S.UserStats>
                                    {user.stats.map((stat, index) => (
                                        <S.StatItem key={index}>
                                            <S.StatValue>{stat.value}</S.StatValue>
                                            <S.StatLabel>{stat.label}</S.StatLabel>
                                        </S.StatItem>
                                    ))}
                                </S.UserStats>
                                <S.EditProfileButton variant='outline'>
                                    <Edit size={16} />
                                    Edit Profile
                                </S.EditProfileButton>
                            </S.UserProfile>
                        </S.ProfileContent>
                    </S.ProfileCard>

                    <S.ProfileCard>
                        <S.ProfileHeader>
                            <S.ProfileTitle>Progress</S.ProfileTitle>
                        </S.ProfileHeader>
                        <S.ProfileContent>
                            {user.progress.map((item, index) => (
                                <S.ProgressSection key={index}>
                                    <S.ProgressHeader>
                                        <S.ProgressTitle>{item.title}</S.ProgressTitle>
                                        <S.ProgressValue>
                                            {item.value}/{item.max}
                                        </S.ProgressValue>
                                    </S.ProgressHeader>
                                    <Progress value={(item.value / item.max) * 100} />
                                </S.ProgressSection>
                            ))}
                        </S.ProfileContent>
                    </S.ProfileCard>

                    <S.ProfileCard>
                        <S.ProfileHeader>
                            <S.ProfileTitle>Badges</S.ProfileTitle>
                        </S.ProfileHeader>
                        <S.ProfileContent>
                            <S.BadgeGrid>
                                {user.badges.map((badge, index) => (
                                    <S.BadgeItem key={index}>
                                        <S.BadgeIcon unlocked={badge.unlocked}>{badge.icon}</S.BadgeIcon>
                                        <S.BadgeName unlocked={badge.unlocked}>{badge.name}</S.BadgeName>
                                        <S.BadgeDescription unlocked={badge.unlocked}>{badge.description}</S.BadgeDescription>
                                    </S.BadgeItem>
                                ))}
                            </S.BadgeGrid>
                        </S.ProfileContent>
                    </S.ProfileCard>
                </S.ProfileSidebar>

                <S.ProfileMain>
                    <S.ProfileCard>
                        <S.ProfileContent>
                            <S.TabsContainer>
                                <S.Tab active={activeTab === 'activity'} onClick={() => setActiveTab('activity')}>
                                    Activity
                                </S.Tab>
                                <S.Tab active={activeTab === 'games'} onClick={() => setActiveTab('games')}>
                                    Games
                                </S.Tab>
                                <S.Tab active={activeTab === 'social'} onClick={() => setActiveTab('social')}>
                                    Social Connections
                                </S.Tab>
                                <S.Tab active={activeTab === 'achievements'} onClick={() => setActiveTab('achievements')}>
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
                                                <S.SocialIcon bgColor={connection.color}>{connection.icon}</S.SocialIcon>
                                                <div>
                                                    <S.SocialName>{connection.name}</S.SocialName>
                                                    <S.SocialUsername>{connection.username}</S.SocialUsername>
                                                </div>
                                            </S.SocialInfo>
                                            <S.SocialStatus connected={connection.connected}>
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