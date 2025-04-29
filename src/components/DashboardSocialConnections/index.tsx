'use client'

import * as S from './styles';

export default function SocialConnections() {
    const socialAccounts = [
        {
            id: 'twitter',
            name: 'Twitter',
            icon: 'T',
            color: '#1DA1F2',
            connected: true,
        },
        {
            id: 'twitch',
            name: 'Twitch',
            icon: 'T',
            color: '#6441A4',
            connected: true,
        },
        {
            id: 'discord',
            name: 'Discord',
            icon: 'D',
            color: '#5865F2',
            connected: false,
        },
        {
            id: 'faceit',
            name: 'FACEIT',
            icon: 'F',
            color: '#FF5500',
            connected: false,
        },
        {
            id: 'hltv',
            name: 'HLTV',
            icon: 'H',
            color: '#333333',
            connected: false,
        },
    ];

    return (
        <S.SocialCard>
            <S.SocialHeader>
                <S.SocialTitle>Social Connections</S.SocialTitle>
            </S.SocialHeader>

            <S.SocialContent>
                <S.SocialList>
                    {socialAccounts.map((account) => (
                        <S.SocialItem key={account.id}>
                            <S.SocialInfo>
                                <S.SocialIcon bgColor={account.color}>{account.icon}</S.SocialIcon>
                                <div>
                                    <S.SocialName>{account.name}</S.SocialName>
                                    <S.SocialStatus connected={account.connected}>
                                        {account.connected ? 'Connected' : 'Not connected'}
                                    </S.SocialStatus>
                                </div>
                            </S.SocialInfo>

                            <S.ConnectButton variant={account.connected ? 'outline' : 'primary'} size='sm'>
                                {account.connected ? 'Disconnect' : 'Connect'}
                            </S.ConnectButton>
                        </S.SocialItem>
                    ))}
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