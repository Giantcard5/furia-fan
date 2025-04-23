'use client';

import { 
    useState,
    useEffect 
} from 'react';

import { 
    zodResolver 
} from '@hookform/resolvers/zod';

import { 
    useForm 
} from 'react-hook-form';

import * as z from 'zod';
import * as S from './styles';

import { 
    Share2, 
    Twitter, 
    Twitch, 
    XCircle, 
    LinkIcon,
    DiscIcon as Discord
} from 'lucide-react';

import { Form } from '@/components/UI/form';
import { Card, CardContent } from '@/components/UI/card'
import { Button } from '@/components/UI/button'
import { Badge } from '@/components/UI/badge'

const socialMediaSchema = z.object({
    twitter: z.boolean(),
    twitch: z.boolean(),
    discord: z.boolean(),
    faceit: z.boolean(),
    hltv: z.boolean(),
});

interface SocialMediaStepProps {
    data: any;
    updateData: (data: any) => void;
};

export function SocialMediaStep({ data, updateData }: SocialMediaStepProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [connecting, setConnecting] = useState<string | null>(null);
    const [socialStats, setSocialStats] = useState({
        twitter: { posts: 0, furiaRelated: 0 },
        twitch: { watchTime: 0, furiaWatchTime: 0 },
        discord: { messages: 0, furiaServer: false },
        faceit: { level: 0, matches: 0 },
        hltv: { rating: 0 },
    });

    const form = useForm<z.infer<typeof socialMediaSchema>>({
        resolver: zodResolver(socialMediaSchema),
        defaultValues: {
            twitter: data.twitter || false,
            twitch: data.twitch || false,
            discord: data.discord || false,
            faceit: data.faceit || false,
            hltv: data.hltv || false,
        },
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onSubmit = (values: z.infer<typeof socialMediaSchema>) => {
        updateData(values);
    };

    useEffect(() => {
        if (isMounted) {
            const subscription = form.watch((value) => {
                updateData(value)
            });
            return () => subscription.unsubscribe();
        };
    }, [form, updateData, isMounted]);

    const handleConnect = (platform: string) => {
        setConnecting(platform);

        setTimeout(() => {
            form.setValue(platform as any, true);

            if (platform === 'twitter') {
                setSocialStats((prev) => ({
                    ...prev,
                    twitter: {
                        posts: Math.floor(Math.random() * 500) + 50,
                        furiaRelated: Math.floor(Math.random() * 50) + 5,
                    },
                }))
            } else if (platform === 'twitch') {
                setSocialStats((prev) => ({
                    ...prev,
                    twitch: {
                        watchTime: Math.floor(Math.random() * 200) + 20,
                        furiaWatchTime: Math.floor(Math.random() * 50) + 5,
                    },
                }))
            } else if (platform === 'discord') {
                setSocialStats((prev) => ({
                    ...prev,
                    discord: {
                        messages: Math.floor(Math.random() * 1000) + 100,
                        furiaServer: Math.random() > 0.5,
                    },
                }))
            } else if (platform === 'faceit') {
                setSocialStats((prev) => ({
                    ...prev,
                    faceit: {
                        level: Math.floor(Math.random() * 10) + 1,
                        matches: Math.floor(Math.random() * 500) + 50,
                    },
                }))
            } else if (platform === 'hltv') {
                setSocialStats((prev) => ({
                    ...prev,
                    hltv: {
                        rating: (Math.random() * 1.5 + 0.5).toFixed(2)
                    },
                }))
            };

            setConnecting(null);
            form.handleSubmit(onSubmit)();
        }, 1500);
    };

    const handleDisconnect = (platform: string) => {
        form.setValue(platform as any, false);
        form.handleSubmit(onSubmit)();
    };

    return (
        <S.StepContainer>
            <S.HeaderContainer>
                <S.StepTitle>Connect Social Media</S.StepTitle>
                <S.StepDescription>
                    Link your social media accounts to enhance your FURIA fan profile and unlock exclusive content.
                </S.StepDescription>
            </S.HeaderContainer>

            <Card>
                <CardContent>
                    <S.IconContainer>
                        <S.IconCircle>
                            <Share2 size={32} color='white' />
                        </S.IconCircle>
                    </S.IconContainer>

                    <Form {...form}>
                        <form>
                            <S.FormContainer>
                                <S.SocialGrid>
                                    {/* Twitter */}
                                    <S.SocialCard>
                                        <S.SocialInfo>
                                            <S.SocialIconCircle bgColor='rgba(29, 161, 242, 0.2)' textColor='#1DA1F2'>
                                                <Twitter size={20} />
                                            </S.SocialIconCircle>
                                            <S.SocialDetails>
                                                <S.SocialTitle>Twitter</S.SocialTitle>
                                                <S.SocialSubtitle>Connect your Twitter account</S.SocialSubtitle>
                                            </S.SocialDetails>
                                        </S.SocialInfo>

                                        {form.watch('twitter') ? (
                                            <S.SocialActions>
                                                <S.BadgeContainer>
                                                    <Badge variant='outline'>{socialStats.twitter.posts} posts</Badge>
                                                    <Badge variant='outline'>{socialStats.twitter.furiaRelated} FURIA related</Badge>
                                                </S.BadgeContainer>
                                                <Button variant='outline' size='sm' onClick={() => handleDisconnect('twitter')}>
                                                    <XCircle size={16} style={{ marginRight: '0.5rem' }} />
                                                    Disconnect
                                                </Button>
                                            </S.SocialActions>
                                        ) : (
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => handleConnect('twitter')}
                                                disabled={connecting === 'twitter'}
                                            >
                                                {connecting === 'twitter' ? (
                                                    <>Connecting...</>
                                                ) : (
                                                    <>
                                                        <LinkIcon size={16} style={{ marginRight: '0.5rem' }} />
                                                        Connect
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </S.SocialCard>

                                    {/* Twitch */}
                                    <S.SocialCard>
                                        <S.SocialInfo>
                                            <S.SocialIconCircle bgColor='rgba(145, 70, 255, 0.2)' textColor='#9146FF'>
                                                <Twitch size={20} />
                                            </S.SocialIconCircle>
                                            <S.SocialDetails>
                                                <S.SocialTitle>Twitch</S.SocialTitle>
                                                <S.SocialSubtitle>Connect your Twitch account</S.SocialSubtitle>
                                            </S.SocialDetails>
                                        </S.SocialInfo>

                                        {form.watch('twitch') ? (
                                            <S.SocialActions>
                                                <S.BadgeContainer>
                                                    <Badge variant='outline'>{socialStats.twitch.watchTime}h watch time</Badge>
                                                    <Badge variant='outline'>{socialStats.twitch.furiaWatchTime}h FURIA streams</Badge>
                                                </S.BadgeContainer>
                                                <Button variant='outline' size='sm' onClick={() => handleDisconnect('twitch')}>
                                                    <XCircle size={16} style={{ marginRight: '0.5rem' }} />
                                                    Disconnect
                                                </Button>
                                            </S.SocialActions>
                                        ) : (
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => handleConnect('twitch')}
                                                disabled={connecting === 'twitch'}
                                            >
                                                {connecting === 'twitch' ? (
                                                    <>Connecting...</>
                                                ) : (
                                                    <>
                                                        <LinkIcon size={16} style={{ marginRight: '0.5rem' }} />
                                                        Connect
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </S.SocialCard>

                                    {/* Discord */}
                                    <S.SocialCard>
                                        <S.SocialInfo>
                                            <S.SocialIconCircle bgColor='rgba(88, 101, 242, 0.2)' textColor='#5865F2'>
                                                <Discord size={20} />
                                            </S.SocialIconCircle>
                                            <S.SocialDetails>
                                                <S.SocialTitle>Discord</S.SocialTitle>
                                                <S.SocialSubtitle>Connect your Discord account</S.SocialSubtitle>
                                            </S.SocialDetails>
                                        </S.SocialInfo>

                                        {form.watch('discord') ? (
                                            <S.SocialActions>
                                                <S.BadgeContainer>
                                                    <Badge variant='outline'>{socialStats.discord.messages} messages</Badge>
                                                    <Badge variant='outline'>
                                                        {socialStats.discord.furiaServer ? 'FURIA server member' : 'Not in FURIA server'}
                                                    </Badge>
                                                </S.BadgeContainer>
                                                <Button variant='outline' size='sm' onClick={() => handleDisconnect('discord')}>
                                                    <XCircle size={16} style={{ marginRight: '0.5rem' }} />
                                                    Disconnect
                                                </Button>
                                            </S.SocialActions>
                                        ) : (
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => handleConnect('discord')}
                                                disabled={connecting === 'discord'}
                                            >
                                                {connecting === 'discord' ? (
                                                    <>Connecting...</>
                                                ) : (
                                                    <>
                                                        <LinkIcon size={16} style={{ marginRight: '0.5rem' }} />
                                                        Connect
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </S.SocialCard>

                                    {/* Gaming Platforms Section */}
                                    <S.SectionTitle>Gaming Platforms</S.SectionTitle>

                                    {/* FACEIT */}
                                    <S.SocialCard>
                                        <S.SocialInfo>
                                            <S.SocialIconCircle bgColor='rgba(255, 85, 0, 0.2)' textColor='#FF5500'>
                                                <span style={{ fontWeight: 'bold' }}>F</span>
                                            </S.SocialIconCircle>
                                            <S.SocialDetails>
                                                <S.SocialTitle>FACEIT</S.SocialTitle>
                                                <S.SocialSubtitle>Connect your FACEIT account</S.SocialSubtitle>
                                            </S.SocialDetails>
                                        </S.SocialInfo>

                                        {form.watch('faceit') ? (
                                            <S.SocialActions>
                                                <S.BadgeContainer>
                                                    <Badge variant='outline'>Level {socialStats.faceit.level}</Badge>
                                                    <Badge variant='outline'>{socialStats.faceit.matches} matches</Badge>
                                                </S.BadgeContainer>
                                                <Button variant='outline' size='sm' onClick={() => handleDisconnect('faceit')}>
                                                    <XCircle size={16} style={{ marginRight: '0.5rem' }} />
                                                    Disconnect
                                                </Button>
                                            </S.SocialActions>
                                        ) : (
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => handleConnect('faceit')}
                                                disabled={connecting === 'faceit'}
                                            >
                                                {connecting === 'faceit' ? (
                                                    <>Connecting...</>
                                                ) : (
                                                    <>
                                                        <LinkIcon size={16} style={{ marginRight: '0.5rem' }} />
                                                        Connect
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </S.SocialCard>

                                    {/* HLTV */}
                                    <S.SocialCard>
                                        <S.SocialInfo>
                                            <S.SocialIconCircle bgColor='rgba(128, 128, 128, 0.2)' textColor='white'>
                                                <span style={{ fontWeight: 'bold' }}>H</span>
                                            </S.SocialIconCircle>
                                            <S.SocialDetails>
                                                <S.SocialTitle>HLTV</S.SocialTitle>
                                                <S.SocialSubtitle>Connect your HLTV account</S.SocialSubtitle>
                                            </S.SocialDetails>
                                        </S.SocialInfo>

                                        {form.watch('hltv') ? (
                                            <S.SocialActions>
                                                <S.BadgeContainer>
                                                    <Badge variant='outline'>Rating {socialStats.hltv.rating}</Badge>
                                                </S.BadgeContainer>
                                                <Button variant='outline' size='sm' onClick={() => handleDisconnect('hltv')}>
                                                    <XCircle size={16} style={{ marginRight: '0.5rem' }} />
                                                    Disconnect
                                                </Button>
                                            </S.SocialActions>
                                        ) : (
                                            <Button
                                                variant='outline'
                                                size='sm'
                                                onClick={() => handleConnect('hltv')}
                                                disabled={connecting === 'hltv'}
                                            >
                                                {connecting === 'hltv' ? (
                                                    <>Connecting...</>
                                                ) : (
                                                    <>
                                                        <LinkIcon size={16} style={{ marginRight: '0.5rem' }} />
                                                        Connect
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </S.SocialCard>
                                </S.SocialGrid>
                            </S.FormContainer>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </S.StepContainer>
    );
};