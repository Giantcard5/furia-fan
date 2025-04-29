'use client';

import Link from 'next/link';

import { 
    User, 
    Edit 
} from 'lucide-react';

import Button from '@/components/UI/button';
import Progress from '@/components/UI/progress';

import * as S from './styles';

export default function ProfileOverview() {
    const profile = {
        name: 'FURIA Fan',
        email: 'fan@furia.org',
        completionPercentage: 85,
        favoriteGames: ['Counter-Strike 2', 'Valorant'],
        connectedAccounts: [
            { name: 'Twitter', icon: 'T', color: '#1DA1F2' },
            { name: 'Twitch', icon: 'T', color: '#6441A4' },
        ],
    };

    return (
        <S.ProfileCard>
            <S.ProfileHeader>
                <S.ProfileTitle>Profile Overview</S.ProfileTitle>
                <Button variant='ghost' size='sm'>
                    <Edit size={16} />
                </Button>
            </S.ProfileHeader>

            <S.ProfileContent>
                <S.ProfileInfo>
                    <S.ProfileAvatar>
                        <User size={24} />
                    </S.ProfileAvatar>

                    <S.ProfileDetails>
                        <S.ProfileName>{profile.name}</S.ProfileName>
                        <S.ProfileEmail>{profile.email}</S.ProfileEmail>
                    </S.ProfileDetails>
                </S.ProfileInfo>

                <S.ProfileCompletion>
                    <S.ProfileCompletionHeader>
                        <span>Profile Completion</span>
                        <span>{profile.completionPercentage}%</span>
                    </S.ProfileCompletionHeader>
                    <Progress value={profile.completionPercentage} />
                </S.ProfileCompletion>

                <S.ProfileSections>
                    <S.ProfileSection>
                        <S.ProfileSectionTitle>Favorite Games</S.ProfileSectionTitle>
                        <S.ProfileSectionContent>
                            {profile.favoriteGames.map((game) => (
                                <S.GameTag key={game}>{game}</S.GameTag>
                            ))}
                            <Button variant='ghost' size='sm' style={{ padding: '0 8px', minWidth: 'auto' }}>
                                <Edit size={14} />
                            </Button>
                        </S.ProfileSectionContent>
                    </S.ProfileSection>

                    <S.ProfileSection>
                        <S.ProfileSectionTitle>Connected Accounts</S.ProfileSectionTitle>
                        <S.ProfileSectionContent>
                            {profile.connectedAccounts.map((account) => (
                                <S.SocialAccount key={account.name}>
                                    <S.SocialIcon bgColor={account.color}>{account.icon}</S.SocialIcon>
                                    {account.name}
                                </S.SocialAccount>
                            ))}
                            <Button variant='ghost' size='sm' style={{ padding: '0 8px', minWidth: 'auto' }}>
                                <Edit size={14} />
                            </Button>
                        </S.ProfileSectionContent>
                    </S.ProfileSection>
                </S.ProfileSections>

                <S.ViewProfileButton as={Link} href='/dashboard/profile' variant='ghost' size='sm'>
                    View Full Profile
                    <span>›</span>
                </S.ViewProfileButton>
            </S.ProfileContent>
        </S.ProfileCard>
    );
};