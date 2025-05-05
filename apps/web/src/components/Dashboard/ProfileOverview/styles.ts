import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '../../UI/card';

import { 
    Button 
} from '../../UI/button';

const ProfileCard = styled(Card)`
    overflow: hidden;
    background-color: #141414;
`;

const ProfileHeader = styled(CardHeader)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const ProfileTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const ProfileContent = styled(CardContent)`
    padding-top: 0;
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ProfileAvatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const ProfileDetails = styled.div`
    flex: 1;
`;

const ProfileName = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ProfileEmail = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const ProfileCompletion = styled.div`
    margin: ${({ theme }) => theme.space[3]} 0;
`;

const ProfileCompletionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[2]};
    
    span {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.gray[300]};
    }
`;

const ProfileSections = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[4]};
`;

const ProfileSection = styled.div``;

const ProfileSectionTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProfileSectionContent = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[2]};
`;

const GameTag = styled.div`
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const SocialAccount = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    text-transform: capitalize;
`;

const SocialIcon = styled.div<{ $bgColor?: string }>`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 10px;
`;

const ViewProfileButton = styled(Button)`
    width: 100%;
    margin-top: ${({ theme }) => theme.space[4]};
    justify-content: space-between;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[300]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export {
    ProfileCard,
    ProfileHeader,
    ProfileTitle,
    ProfileContent,
    ProfileInfo,
    ProfileAvatar,
    ProfileDetails,
    ProfileName,
    ProfileEmail,
    ProfileCompletion,
    ProfileCompletionHeader,
    ProfileSections,
    ProfileSection,
    ProfileSectionTitle,
    ProfileSectionContent,
    GameTag,
    SocialAccount,
    SocialIcon,
    ViewProfileButton
};