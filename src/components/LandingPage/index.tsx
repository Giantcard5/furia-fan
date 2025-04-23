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

import { Button } from '@/components/UI/button';
import { Container } from '@/components/UI/container';

import * as S from './styles';

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
                    <S.RadialGradient />
                </S.BackgroundWrapper>

                <S.AnimatedLinesWrapper>
                    <S.VerticalLine left='25%' />
                    <S.VerticalLine right='25%' />
                    <S.HorizontalLine top='25%' />
                    <S.HorizontalLine bottom='25%' />
                </S.AnimatedLinesWrapper>

                <Container>
                    <S.ContentWrapper>
                        <S.Header>
                            <S.LogoWrapper>
                                <Image
                                    src='/icon-text-white.svg'
                                    alt='FURIA Text'
                                    width={70}
                                    height={70}
                                />
                            </S.LogoWrapper>

                            <S.NavLinks>
                                <Button variant='link' onClick={() => router.push('/about')}>
                                    About
                                </Button>
                                <Button variant='link' onClick={() => router.push('/teams')}>
                                    Teams
                                </Button>
                                <Button variant='link' onClick={() => router.push('/matches')}>
                                    Matches
                                </Button>
                                <Button variant='link' onClick={() => router.push('/community')}>
                                    Community
                                </Button>
                                <Button onClick={() => router.push('/onboarding')}>Join Now</Button>
                            </S.NavLinks>
                        </S.Header>

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
                                    <Button variant='ghost' size='sm' onClick={() => router.push('/matches/live')}>
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
                                        <Calendar size={24} color='#FFFFFF' />
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
                                        <Users size={24} color='#FFFFFF' />
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
                                        <Info size={24} color='#FFFFFF' />
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
                                        <HelpCircle size={24} color='#FFFFFF' />
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

            <S.SectionWrapper dark={true}>
                <S.SectionBackground>
                    <S.HorizontalLine top='0' />
                    <S.HorizontalLine bottom='0' />
                </S.SectionBackground>

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
                            <motion.div variants={item}>
                                <S.MatchCard>
                                    <S.MatchImageWrapper>
                                        {/* <Image
                                            src=''
                                            alt='FURIA vs MIBR'
                                            fill
                                            style={{ objectFit: 'cover', filter: 'brightness(0.75)' }}
                                        /> */}
                                        <S.MatchImageOverlay />
                                        <S.MatchBadge variant='live'>LIVE</S.MatchBadge>
                                    </S.MatchImageWrapper>
                                    <S.MatchContent>
                                        <S.MatchMeta>
                                            <S.MatchMetaText>PGL Major Copenhagen</S.MatchMetaText>
                                            <S.MatchMetaText>May 1, 2025</S.MatchMetaText>
                                        </S.MatchMeta>
                                        <S.MatchTitle>FURIA vs MIBR</S.MatchTitle>
                                        <S.MatchFooter>
                                            <S.MatchType>CS2 - Bo3</S.MatchType>
                                            <Button variant='outline' size='sm' onClick={() => router.push('/matches/furia-vs-mibr')}>
                                                Watch
                                            </Button>
                                        </S.MatchFooter>
                                    </S.MatchContent>
                                </S.MatchCard>
                            </motion.div>

                            <motion.div variants={item}>
                                <S.MatchCard>
                                    <S.MatchImageWrapper>
                                        {/* <Image
                                            src=''
                                            alt='FURIA vs Liquid'
                                            fill
                                            style={{ objectFit: 'cover', filter: 'brightness(0.75)' }}
                                        /> */}
                                        <S.MatchImageOverlay />
                                        <S.MatchBadge variant='upcoming'>UPCOMING</S.MatchBadge>
                                    </S.MatchImageWrapper>
                                    <S.MatchContent>
                                        <S.MatchMeta>
                                            <S.MatchMetaText>PGL Major Copenhagen</S.MatchMetaText>
                                            <S.MatchMetaText>May 15, 2025</S.MatchMetaText>
                                        </S.MatchMeta>
                                        <S.MatchTitle>FURIA vs Liquid</S.MatchTitle>
                                        <S.MatchFooter>
                                            <S.MatchType>CS2 - Bo3</S.MatchType>
                                            <Button variant='outline' size='sm' onClick={() => router.push('/matches/furia-vs-liquid')}>
                                                Remind me
                                            </Button>
                                        </S.MatchFooter>
                                    </S.MatchContent>
                                </S.MatchCard>
                            </motion.div>

                            <motion.div variants={item}>
                                <S.MatchCard>
                                    <S.MatchImageWrapper>
                                        {/* <Image
                                            src=''
                                            alt='FURIA Fan Meet'
                                            fill
                                            style={{ objectFit: 'cover', filter: 'brightness(0.75)' }}
                                        /> */}
                                        <S.MatchImageOverlay />
                                        <S.MatchBadge variant='upcoming'>UPCOMING</S.MatchBadge>
                                    </S.MatchImageWrapper>
                                    <S.MatchContent>
                                        <S.MatchMeta>
                                            <S.MatchMetaText>Fan Event</S.MatchMetaText>
                                            <S.MatchMetaText>June 10, 2025</S.MatchMetaText>
                                        </S.MatchMeta>
                                        <S.MatchTitle>FURIA Fan Meet</S.MatchTitle>
                                        <S.MatchFooter>
                                            <S.MatchType>Rio de Janeiro, Brazil</S.MatchType>
                                            <Button variant='outline' size='sm' onClick={() => router.push('/events/fan-meet')}>
                                                Details
                                            </Button>
                                        </S.MatchFooter>
                                    </S.MatchContent>
                                </S.MatchCard>
                            </motion.div>
                        </S.MatchesGrid>

                        <motion.div variants={item} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                            <S.ViewAllButton onClick={() => router.push('/matches')}>View All Matches</S.ViewAllButton>
                        </motion.div>
                    </motion.div>
                </Container>
            </S.SectionWrapper>

            <S.CTASection>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <S.CTACard>
                            <S.CTAContent>
                                <S.CTATitle>Join the FURIA Family Today</S.CTATitle>
                                <S.CTADescription>
                                    Create your fan profile, connect with the community, and get exclusive access to content, events, and
                                    more.
                                </S.CTADescription>
                            </S.CTAContent>
                            <S.PrimaryButton onClick={() => router.push('/onboarding')}>Get Started</S.PrimaryButton>
                        </S.CTACard>
                    </motion.div>
                </Container>
            </S.CTASection>

            <S.Footer>
                <Container>
                    <S.FooterTop>
                        <S.FooterLogo>
                            <Image
                                src='/icon-text-white.svg'
                                alt='FURIA Text'
                                width={70}
                                height={20}
                            />
                        </S.FooterLogo>

                        <S.SponsorsWrapper>
                            <S.SponsorText>Adidas</S.SponsorText>
                            <S.SponsorText>Cruzeiro do Sul</S.SponsorText>
                            <S.SponsorText>Hellmann's</S.SponsorText>
                            <S.SponsorText>POKERSTARS</S.SponsorText>
                            <S.SponsorText>Lenovo LEGION</S.SponsorText>
                            <S.SponsorText>RedBull</S.SponsorText>
                        </S.SponsorsWrapper>
                    </S.FooterTop>

                    <S.FooterBottom>
                        <S.Copyright>© 2025 FURIA Esports. All rights reserved.</S.Copyright>
                        <S.FooterLinks>
                            <S.FooterLink onClick={() => router.push('/privacy')}>Privacy Policy</S.FooterLink>
                            <S.FooterLink onClick={() => router.push('/terms')}>Terms of Service</S.FooterLink>
                            <S.FooterLink onClick={() => router.push('/contact')}>Contact Us</S.FooterLink>
                        </S.FooterLinks>
                    </S.FooterBottom>
                </Container>
            </S.Footer>
        </S.PageWrapper>
    );
};

export default LandingPage;