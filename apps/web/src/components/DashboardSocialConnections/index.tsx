'use client'

import * as S from './styles';

import { 
    Twitch,
    Instagram
} from 'lucide-react';

import {
    SocialMedia
} from '@furiafan/types';

import { 
    apiService 
} from '@/lib/api-service';

import {
    useAuth
} from '@/hooks/useAuth';

export default function SocialConnections({ socialMedia, loading }: { socialMedia: SocialMedia, loading: boolean }) {
    const { getCPF } = useAuth();

    const getAccessToken = async (provider: string): Promise<string> => {
        const width = 600;
        const height = 700;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
        const redirectUri = `${process.env.NEXT_PUBLIC_REDI_URL}/auth/callback?provider=${provider}`;

        switch (provider) {
            case 'twitch': {
                const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
                const scope = 'user:read:email';
                const authUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
                    redirectUri
                )}&response_type=token&scope=${encodeURIComponent(
                    scope
                )}&force_verify=true`;

                const popup = window.open(
                    authUrl,
                    'Vincular Twitch',
                    `width=${width},height=${height},left=${left},top=${top}`
                );
                return handlePopupCallback(popup, provider);
            }

            case 'discord': {
                const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
                const scope = 'identify email';
                const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
                    redirectUri
                )}&response_type=token&scope=${encodeURIComponent(scope)}`;

                const popup = window.open(
                    authUrl,
                    'Vincular Discord',
                    `width=${width},height=${height},left=${left},top=${top}`
                );
                return handlePopupCallback(popup, provider);
            }

            case 'instagram': {
                const provider = 'instagram';
                const clientId = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID!;
                const redirectUri = `${window.location.origin}/auth/callback?provider=instagram`;
                const scope =
                    'instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish,instagram_business_manage_insights';
                const authUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${clientId}&redirect_uri=${encodeURIComponent(
                    redirectUri
                )}&response_type=code&scope=${encodeURIComponent(scope)}`;

                const width = 500;
                const height = 600;
                const left = window.screenX + (window.innerWidth - width) / 2;
                const top = window.screenY + (window.innerHeight - height) / 2;

                const popup = window.open(
                    authUrl,
                    'Vincular Instagram',
                    `width=${width},height=${height},left=${left},top=${top}`
                );

                return handlePopupCallback(popup, provider);
            }

            default:
                throw new Error(`Provider ${provider} not implemented`);
        };
    };

    const handlePopupCallback = (
        popup: Window | null,
        provider: string
    ): Promise<string> => {
        if (!popup)
            throw new Error('Não foi possível abrir o popup de autorização');

        return new Promise((resolve, reject) => {
            window.addEventListener('message', function handler(event) {
                if (event.origin !== window.location.origin) return;
                if (
                    event.data.type === 'social-callback' &&
                    event.data.provider === provider
                ) {
                    window.removeEventListener('message', handler);
                    if (event.data.error) {
                        reject(new Error(event.data.error));
                    } else {
                        resolve(event.data.accessToken);
                    }
                }
            });
        });
    };

    const handleConnectSocial = async (provider: string) => {
        try {
            const cpf = getCPF();
            if (!cpf) {
                throw new Error('No CPF found');
            };

            const accessToken = await getAccessToken(provider);

            const response = await apiService.linkSocialConnection(cpf, provider, accessToken);

            if (response.error) {
                throw new Error(response.error);
            };
        } catch (error) {
            console.error('Error connecting social media:', error);
        }
    };

    return (
        <S.SocialCard>
            <S.SocialHeader>
                <S.SocialTitle>Social Connections</S.SocialTitle>
            </S.SocialHeader>

            <S.SocialContent>
                <S.SocialList>
                    <S.SocialItem>
                        <S.SocialInfo>
                            <S.SocialIcon $bgColor='#6441A4'>
                                <Twitch size={16}/>
                            </S.SocialIcon>
                            <div>
                                <S.SocialName>Twitch</S.SocialName>
                                <S.SocialStatus $connected={true}>
                                    Connected
                                </S.SocialStatus>
                            </div>
                        </S.SocialInfo>

                        <S.ConnectButton $variant='primary' size='sm' onClick={() => handleConnectSocial('twitch')}>
                            Connect
                        </S.ConnectButton>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialInfo>
                            <S.SocialIcon $bgColor='#E1306C'>
                                <Instagram size={16}/>
                            </S.SocialIcon>
                            <div>
                                <S.SocialName>Instagram</S.SocialName>
                                <S.SocialStatus $connected={true}>
                                    Connected
                                </S.SocialStatus>
                            </div>
                        </S.SocialInfo>

                        <S.ConnectButton $variant='primary' size='sm' onClick={() => handleConnectSocial('instagram')}>
                            Connect
                        </S.ConnectButton>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialInfo>
                            <S.SocialIcon $bgColor='#5865F2'>D</S.SocialIcon>
                            <div>
                                <S.SocialName>Discord</S.SocialName>
                                <S.SocialStatus $connected={true}>
                                    Connected
                                </S.SocialStatus>
                            </div>
                        </S.SocialInfo>

                        <S.ConnectButton $variant='primary' size='sm' onClick={() => handleConnectSocial('discord')}>
                            Connect
                        </S.ConnectButton>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialInfo>
                            <S.SocialIcon $bgColor='#333333'>H</S.SocialIcon>
                            <div>
                                <S.SocialName>HLTV</S.SocialName>
                                <S.SocialStatus $connected={false}>
                                    Unconnected
                                </S.SocialStatus>
                            </div>
                        </S.SocialInfo>

                        <S.ConnectButton $variant='outline' size='sm'>
                            Indisponível
                        </S.ConnectButton>
                    </S.SocialItem>
                    <S.SocialItem>
                        <S.SocialInfo>
                            <S.SocialIcon $bgColor='#FF5500'>F</S.SocialIcon>
                            <div>
                                <S.SocialName>Faceit</S.SocialName>
                                <S.SocialStatus $connected={false}>
                                    Unconnected
                                </S.SocialStatus>
                            </div>
                        </S.SocialInfo>

                        <S.ConnectButton $variant='outline' size='sm'>
                            Indisponível
                        </S.ConnectButton>
                    </S.SocialItem>
                </S.SocialList>

                <S.ConnectMoreContainer>
                    <S.ConnectMoreText>
                        Connect more accounts to enhance your fan profile and unlock exclusive content.
                    </S.ConnectMoreText>
                </S.ConnectMoreContainer>
            </S.SocialContent>
        </S.SocialCard>
    );
};