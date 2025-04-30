'use client';

import React, { 
    useState, 
    useEffect 
} from 'react'

import { useRouter } from 'next/navigation';

import Image from 'next/image';

import { 
    motion 
} from 'framer-motion';

import { 
    Calendar, 
    Users, 
    Info, 
    HelpCircle, 
    ChevronRight, 
    Play 
} from 'lucide-react';

import { 
    Button 
} from '@/components/UI/button';
import { 
    Container 
} from '@/components/UI/container';

import Header from '../Header';

import * as S from './styles';

import { 
    theme 
} from '@/styles/theme';
import Footer from '../Footer';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

interface Match {
    id: number;
    title: string;
    subtitle: string;
    type: string;
    date: string;
    status: 'live' | 'upcoming';
}

const matchesMock: Match[] = [
    {
        id: 1,
        title: 'FURIA vs MIBR',
        subtitle: 'PGL Major Copenhagen',
        type: 'CS2 - Bo3',
        date: 'May 1, 2025',
        status: 'live',
    },
    {
        id: 2,
        title: 'FURIA vs MIBR',
        subtitle: 'PGL Major Copenhagen',
        type: 'CS2 - Bo3',
        date: 'May 1, 2025',
        status: 'upcoming',
    },
    {
        id: 3,
        title: 'FURIA vs MIBR',
        subtitle: 'PGL Major Copenhagen',
        type: 'CS2 - Bo3',
        date: 'May 1, 2025',
        status: 'upcoming',
    },
];

export function LandingPage() {
    const router = useRouter();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <S.PageWrapper>
            <S.HeroSection>
                <S.BackgroundWrapper>
                    <Image
                        src='/background.png'
                        alt='FURIA Background'
                        fill
                        style={{ objectFit: 'cover', opacity: 0.6 }}
                        priority
                    />
                    <S.BackgroundOverlay />
                </S.BackgroundWrapper>

                <S.AnimatedLinesWrapper>
                    <S.VerticalLine left='25%' />
                    <S.VerticalLine right='25%' />
                    <S.HorizontalLine top='25%' />
                    <S.HorizontalLine bottom='25%' />
                </S.AnimatedLinesWrapper>

                <Container>
                    <S.ContentWrapper>
                        <Header/>

                        <S.HeroContent>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.8 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src='/icon-text-white.svg'
                                    alt='FURIA Icon'
                                    width={200}
                                    height={200}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <S.HeroDescription>
                                    Join the ultimate fan platform to follow matches, connect with the community, and get exclusive
                                    content from your favorite team.
                                </S.HeroDescription>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <S.ButtonGroup>
                                    <S.PrimaryButton onClick={() => router.push('/matches/live')}>
                                        <Play size={20} />
                                        Watch Live Matches
                                    </S.PrimaryButton>
                                    <S.SecondaryButton onClick={() => router.push('/onboarding')}>Become a Fan</S.SecondaryButton>
                                </S.ButtonGroup>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <S.LiveMatchIndicator>
                                    <S.LiveDot>
                                        <S.LiveDotPing />
                                        <S.LiveDotCore />
                                    </S.LiveDot>
                                    <S.LiveMatchInfo>
                                        <S.LiveMatchTitle>FURIA vs MIBR</S.LiveMatchTitle>
                                        <S.LiveMatchSubtitle>PGL Major Copenhagen 2024 - Live Now</S.LiveMatchSubtitle>
                                    </S.LiveMatchInfo>
                                    <Button $variant='ghost' size='sm' onClick={() => router.push('/matches/live')}>
                                        Watch <ChevronRight size={16} />
                                    </Button>
                                </S.LiveMatchIndicator>
                            </motion.div>
                        </S.HeroContent>

                        <S.ScrollIndicator>
                            <S.ScrollText>Scroll to explore</S.ScrollText>
                            <S.ScrollMouse>
                                <S.ScrollDot />
                            </S.ScrollMouse>
                        </S.ScrollIndicator>
                    </S.ContentWrapper>
                </Container>
            </S.HeroSection>

            <S.SectionWrapper>
                <Container>
                    <motion.div variants={container} initial='hidden' whileInView='show' viewport={{ once: true }}>
                        <S.SectionHeader>
                            <motion.div variants={item}>
                                <S.SectionTitle>
                                    <S.WhiteSpan>Elevate</S.WhiteSpan> Your Fan Experience
                                </S.SectionTitle>
                            </motion.div>
                            <motion.div variants={item}>
                                <S.SectionDescription>
                                    Discover all the features designed to bring you closer to FURIA and connect with other passionate fans
                                    around the world.
                                </S.SectionDescription>
                            </motion.div>
                        </S.SectionHeader>

                        <S.FeaturesGrid>
                            <motion.div variants={item}>
                                <S.FeatureCard>
                                    <S.FeatureIconWrapper>
                                        <Calendar size={24} color={theme.colors.gold} />
                                    </S.FeatureIconWrapper>
                                    <S.FeatureTitle>Live Matches</S.FeatureTitle>
                                    <S.FeatureDescription>
                                        Follow all FURIA matches with real-time updates, statistics, and live commentary from tournaments
                                        worldwide.
                                    </S.FeatureDescription>
                                    <S.FeatureLink onClick={() => router.push('/matches')}>
                                        Explore matches <ChevronRight size={16} />
                                    </S.FeatureLink>
                                </S.FeatureCard>
                            </motion.div>

                            <motion.div variants={item}>
                                <S.FeatureCard>
                                    <S.FeatureIconWrapper>
                                        <Users size={24} color={theme.colors.gold} />
                                    </S.FeatureIconWrapper>
                                    <S.FeatureTitle>Fan Community</S.FeatureTitle>
                                    <S.FeatureDescription>
                                        Connect with other FURIA fans, discuss strategies, share your thoughts, and celebrate victories
                                        together.
                                    </S.FeatureDescription>
                                    <S.FeatureLink onClick={() => router.push('/community')}>
                                        Join community <ChevronRight size={16} />
                                    </S.FeatureLink>
                                </S.FeatureCard>
                            </motion.div>

                            <motion.div variants={item}>
                                <S.FeatureCard>
                                    <S.FeatureIconWrapper>
                                        <Info size={24} color={theme.colors.gold} />
                                    </S.FeatureIconWrapper>
                                    <S.FeatureTitle>Team Insights</S.FeatureTitle>
                                    <S.FeatureDescription>
                                        Access detailed profiles of all FURIA players, team statistics, performance analytics, and
                                        historical data.
                                    </S.FeatureDescription>
                                    <S.FeatureLink onClick={() => router.push('/team')}>
                                        View team <ChevronRight size={16} />
                                    </S.FeatureLink>
                                </S.FeatureCard>
                            </motion.div>

                            <motion.div variants={item}>
                                <S.FeatureCard>
                                    <S.FeatureIconWrapper>
                                        <HelpCircle size={24} color={theme.colors.gold} />
                                    </S.FeatureIconWrapper>
                                    <S.FeatureTitle>AI Assistant</S.FeatureTitle>
                                    <S.FeatureDescription>
                                        Get instant answers to your questions about FURIA, upcoming matches, player stats, and tournament
                                        details.
                                    </S.FeatureDescription>
                                    <S.FeatureLink onClick={() => router.push('/assistant')}>
                                        Ask now <ChevronRight size={16} />
                                    </S.FeatureLink>
                                </S.FeatureCard>
                            </motion.div>
                        </S.FeaturesGrid>
                    </motion.div>
                </Container>
            </S.SectionWrapper>

            <S.SectionWrapper $isDark={true}>
                <Container>
                    <motion.div variants={container} initial='hidden' whileInView='show' viewport={{ once: true }}>
                        <S.SectionHeader>
                            <motion.div variants={item}>
                                <S.SectionTitle>
                                    Upcoming <S.WhiteSpan>Matches</S.WhiteSpan>
                                </S.SectionTitle>
                            </motion.div>
                            <motion.div variants={item}>
                                <S.SectionDescription>
                                    Don't miss any action. Stay updated with FURIA's upcoming matches and tournaments.
                                </S.SectionDescription>
                            </motion.div>
                        </S.SectionHeader>

                        <S.MatchesGrid>
                            {matchesMock.map((match, key) => (
                                <motion.div variants={item} key={key}>
                                    <S.MatchCard>
                                        <S.MatchImageWrapper>
                                            <S.MatchImageOverlay />
                                            <S.MatchBadge $variant={match.status}>{match.status.toUpperCase()}</S.MatchBadge>
                                        </S.MatchImageWrapper>
                                        <S.MatchContent>
                                            <S.MatchMeta>
                                                <S.MatchMetaText>{match.subtitle}</S.MatchMetaText>
                                                <S.MatchMetaText>{match.date}</S.MatchMetaText>
                                            </S.MatchMeta>
                                            <S.MatchTitle>{match.title}</S.MatchTitle>
                                            <S.MatchFooter>
                                                <S.MatchType>{match.type}</S.MatchType>
                                                <Button $variant='outline' size='sm'>
                                                    Watch
                                                </Button>
                                            </S.MatchFooter>
                                        </S.MatchContent>
                                    </S.MatchCard>
                                </motion.div>
                            ))}
                        </S.MatchesGrid>

                        <motion.div variants={item} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                            <S.ViewAllButton onClick={() => router.push('/matches')}>View All Matches</S.ViewAllButton>
                        </motion.div>
                    </motion.div>
                </Container>
            </S.SectionWrapper>

            <Footer />
        </S.PageWrapper>
    );
};

export default LandingPage;