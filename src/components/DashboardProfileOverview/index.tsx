'use client';

import Link from 'next/link';

import { 
    User, 
    Edit 
} from 'lucide-react';

import Button from '@/components/UI/button';
import Progress from '@/components/UI/progress';

import * as S from './styles';

import { 
    ProfileOverview as ProfileOverviewType
} from '@/types/onboarding';

import { 
    socialMediaMap 
} from '@/utils/socialMedia';

export default function ProfileOverview({ profile, loading }: { profile: ProfileOverviewType, loading: boolean }) {
    return (
        <S.ProfileCard>
            <S.ProfileHeader>
                <S.ProfileTitle>Profile Overview</S.ProfileTitle>
                <Button $variant='ghost' size='sm'>
                    <Edit size={16} />
                </Button>
            </S.ProfileHeader>

            <S.ProfileContent>
                <S.ProfileInfo>
                    <S.ProfileAvatar>
                        <User size={24} />
                    </S.ProfileAvatar>

                    <S.ProfileDetails>
                        <S.ProfileName>{profile.fullName}</S.ProfileName>
                        <S.ProfileEmail>{profile.email}</S.ProfileEmail>
                    </S.ProfileDetails>
                </S.ProfileInfo>

                <S.ProfileCompletion>
                    <S.ProfileCompletionHeader>
                        <span>Profile Completion</span>
                        <span>10%</span>{/*  Calculate the completion percentage */}
                    </S.ProfileCompletionHeader>
                    <Progress value={10} />{/*  Calculate the completion percentage*/}
                </S.ProfileCompletion>

                <S.ProfileSections>
                    <S.ProfileSection>
                        <S.ProfileSectionTitle>Favorite Games</S.ProfileSectionTitle>
                        <S.ProfileSectionContent>
                            {profile.games?.map((game, index) => (
                                <S.GameTag key={index}>{game}</S.GameTag>
                            ))}
                        </S.ProfileSectionContent>
                    </S.ProfileSection>

                    <S.ProfileSection>
                        <S.ProfileSectionTitle>Connected Accounts</S.ProfileSectionTitle>
                        <S.ProfileSectionContent>
                            {Object.entries(profile.socialMedia).map(([key, value]) => (
                                value?.username && (
                                    <S.SocialAccount key={key}>
                                        <S.SocialIcon>{socialMediaMap[key as keyof typeof socialMediaMap]}</S.SocialIcon>
                                        {value.username}
                                    </S.SocialAccount>
                                )
                            ))}
                        </S.ProfileSectionContent>
                    </S.ProfileSection>
                </S.ProfileSections>

                <S.ViewProfileButton as={Link} href='/dashboard/profile' $variant='ghost' size='sm'>
                    View Full Profile
                    <span>›</span>
                </S.ViewProfileButton>
            </S.ProfileContent>
        </S.ProfileCard>
    );
};