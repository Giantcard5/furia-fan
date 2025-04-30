'use client';

import React, { 
    useState 
} from 'react';

import { 
    Share2 
} from 'lucide-react';

import { 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

import * as S from './styles';

interface SocialMediaFormProps {
    initialData: any;
    onNext: (data: any) => void;
    onBack: () => void;
};

export default function SocialMediaForm({ initialData, onNext, onBack }: SocialMediaFormProps) {
    const [formData, setFormData] = useState({
        socialMedia: initialData.socialMedia || [],
    });

    const handleConnect = (platform: string) => {
        setFormData((prev) => {
            const currentArray = prev.socialMedia as string[];
            const newArray = currentArray.includes(platform)
                ? currentArray.filter(item => item !== platform)
                : [...currentArray, platform];
            
            return {
                ...prev,
                socialMedia: newArray,
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <S.FormContainer>
            <CardHeader>
                <CardTitle>Connect Social Media</CardTitle>
                <CardDescription>
                    Link your social media accounts to enhance your FURIA fan profile and unlock exclusive content.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <S.IconContainer>
                        <S.Icon>
                            <Share2 size={40} />
                        </S.Icon>
                    </S.IconContainer>

                    <S.SocialAccountsList>
                        <S.SocialAccountItem>
                            <S.SocialAccountInfo>
                                <S.SocialIcon $bgColor='#1DA1F2'>T</S.SocialIcon>
                                <S.SocialAccountDetails>
                                    <S.SocialAccountName>Twitter</S.SocialAccountName>
                                    <S.SocialAccountDescription>
                                        {formData.socialMedia.includes('twitter') ? 'Connected' : 'Connect your Twitter account'}
                                    </S.SocialAccountDescription>
                                </S.SocialAccountDetails>
                            </S.SocialAccountInfo>
                            <S.ConnectButton
                                type='button'
                                $variant={formData.socialMedia.includes('twitter') ? 'outline' : 'primary'}
                                size='sm'
                                onClick={() => handleConnect('twitter')}
                            >
                                {formData.socialMedia.includes('twitter') ? 'Disconnect' : 'Connect'}
                            </S.ConnectButton>
                        </S.SocialAccountItem>

                        <S.SocialAccountItem>
                            <S.SocialAccountInfo>
                                <S.SocialIcon $bgColor='#6441A4'>T</S.SocialIcon>
                                <S.SocialAccountDetails>
                                    <S.SocialAccountName>Twitch</S.SocialAccountName>
                                    <S.SocialAccountDescription>
                                        {formData.socialMedia.includes('twitch') ? 'Connected' : 'Connect your Twitch account'}
                                    </S.SocialAccountDescription>
                                </S.SocialAccountDetails>
                            </S.SocialAccountInfo>
                            <S.ConnectButton
                                type='button'
                                $variant={formData.socialMedia.includes('twitch') ? 'outline' : 'primary'}
                                size='sm'
                                onClick={() => handleConnect('twitch')}
                            >
                                {formData.socialMedia.includes('twitch') ? 'Disconnect' : 'Connect'}
                            </S.ConnectButton>
                        </S.SocialAccountItem>

                        <S.SocialAccountItem>
                            <S.SocialAccountInfo>
                                <S.SocialIcon $bgColor='#5865F2'>D</S.SocialIcon>
                                <S.SocialAccountDetails>
                                    <S.SocialAccountName>Discord</S.SocialAccountName>
                                    <S.SocialAccountDescription>
                                        {formData.socialMedia.includes('discord') ? 'Connected' : 'Connect your Discord account'}
                                    </S.SocialAccountDescription>
                                </S.SocialAccountDetails>
                            </S.SocialAccountInfo>
                            <S.ConnectButton
                                type='button'
                                $variant={formData.socialMedia.includes('discord') ? 'outline' : 'primary'}
                                size='sm'
                                onClick={() => handleConnect('discord')}
                            >
                                {formData.socialMedia.includes('discord') ? 'Disconnect' : 'Connect'}
                            </S.ConnectButton>
                        </S.SocialAccountItem>
                    </S.SocialAccountsList>

                    <S.SectionTitle>Gaming Platforms</S.SectionTitle>

                    <S.SocialAccountsList>
                        <S.SocialAccountItem>
                            <S.SocialAccountInfo>
                                <S.SocialIcon $bgColor='#FF5500'>F</S.SocialIcon>
                                <S.SocialAccountDetails>
                                    <S.SocialAccountName>FACEIT</S.SocialAccountName>
                                    <S.SocialAccountDescription>
                                        {formData.socialMedia.includes('faceit') ? 'Connected' : 'Connect your FACEIT account'}
                                    </S.SocialAccountDescription>
                                </S.SocialAccountDetails>
                            </S.SocialAccountInfo>
                            <S.ConnectButton
                                type='button'
                                $variant={formData.socialMedia.includes('faceit') ? 'outline' : 'primary'}
                                size='sm'
                                onClick={() => handleConnect('faceit')}
                            >
                                {formData.socialMedia.includes('faceit') ? 'Disconnect' : 'Connect'}
                            </S.ConnectButton>
                        </S.SocialAccountItem>

                        <S.SocialAccountItem>
                            <S.SocialAccountInfo>
                                <S.SocialIcon $bgColor='#333333'>H</S.SocialIcon>
                                <S.SocialAccountDetails>
                                    <S.SocialAccountName>HLTV</S.SocialAccountName>
                                    <S.SocialAccountDescription>
                                        {formData.socialMedia.includes('hltv') ? 'Connected' : 'Connect your HLTV account'}
                                    </S.SocialAccountDescription>
                                </S.SocialAccountDetails>
                            </S.SocialAccountInfo>
                            <S.ConnectButton
                                type='button'
                                $variant={formData.socialMedia.includes('hltv') ? 'outline' : 'primary'}
                                size='sm'
                                onClick={() => handleConnect('hltv')}
                            >
                                {formData.socialMedia.includes('hltv') ? 'Disconnect' : 'Connect'}
                            </S.ConnectButton>
                        </S.SocialAccountItem>
                    </S.SocialAccountsList>

                    <S.ButtonContainer>
                        <Button type='button' $variant='outline' onClick={onBack}>
                            Back
                        </Button>
                        <Button type='submit' $variant='primary'>
                            Next
                        </Button>
                    </S.ButtonContainer>
                </form>
            </CardContent>
        </S.FormContainer>
    );
};