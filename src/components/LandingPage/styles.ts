import styled, { keyframes } from 'styled-components';

import Button from '../UI/button';

const ping = keyframes`
    75%, 100% {
        transform: scale(2);
        opacity: 0;
    }
`;

const bounce = keyframes`
    0%, 100% {
        transform: translateY(4px);
    }
    50% {
        transform: translateY(16px);
    }
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const PageWrapper = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    overflow-x: hidden;
`;

const HeroSection = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
`;

const BackgroundOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), ${({ theme }) => theme.colors.black});
`;

const RadialGradient = styled.div`
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%);
`;

const AnimatedLinesWrapper = styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: 0.2;
`;

const VerticalLine = styled.div<{ left?: string; right?: string }>`
    position: absolute;
    top: 0;
    ${({ left }) => left && `left: ${left};`}
    ${({ right }) => right && `right: ${right};`}
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.white}, transparent);
`;

const HorizontalLine = styled.div<{ top?: string; bottom?: string }>`
    position: absolute;
    left: 0;
    ${({ top }) => top && `top: ${top};`}
    ${({ bottom }) => bottom && `bottom: ${bottom};`}
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.white}, transparent);
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    padding: ${({ theme }) => `${theme.space[6]} 0`};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoText = styled.span`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.white};
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[6]};
`;

const HeroContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 64rem;
    margin: 0 auto;
`;

const LogoIconWrapper = styled.div`
    display: inline-block;
    padding: ${({ theme }) => theme.space[2]};
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${({ theme }) => theme.radii.full};
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const HeroTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['6xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[6]};
    letter-spacing: -0.025em;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes['7xl']};
    }
`;

const WhiteSpan = styled.span`
    color: ${({ theme }) => theme.colors.white};
`;

const GradientSpan = styled.span`
    background: linear-gradient(to right, ${({ theme }) => theme.colors.white}, ${({ theme }) => theme.colors.gray[400]});
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const HeroDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.space[8]};
    max-width: 36rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: row;
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => `${theme.space[6]} ${theme.space[8]}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    border-radius: ${({ theme }) => theme.radii.md};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.9);
    }
    
    svg {
        transition: ${({ theme }) => theme.transitions.default};
    }
    
    &:hover svg {
        animation: ${pulse} 1s infinite;
    }
`;

const SecondaryButton = styled(Button)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: ${({ theme }) => `${theme.space[6]} ${theme.space[8]}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    border-radius: ${({ theme }) => theme.radii.md};
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const LiveMatchIndicator = styled.div`
    margin-top: ${({ theme }) => theme.space[12]};
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => theme.space[4]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[4]};
`;

const LiveDot = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LiveDotPing = styled.div`
    position: absolute;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: ${({ theme }) => theme.colors.white};
    animation: ${ping} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
`;

const LiveDotCore = styled.div`
    width: 0.75rem;
    height: 0.75rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: ${({ theme }) => theme.colors.white};
`;

const LiveMatchInfo = styled.div``;

const LiveMatchTitle = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const LiveMatchSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ScrollIndicator = styled.div`
    position: relative;
    top: 9em;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`;

const ScrollText = styled.span`
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const ScrollMouse = styled.div`
    width: 1.25rem;
    height: 2.5rem;
    border-radius: ${({ theme }) => theme.radii.full};
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    display: flex;
    justify-content: center;
    padding: ${({ theme }) => theme.space[1]};
`;

const ScrollDot = styled.div`
    width: 0.25rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radii.full};
    animation: ${bounce} 1.5s infinite;
`;

const SectionWrapper = styled.div<{ dark?: boolean }>`
    padding: ${({ theme }) => `${theme.space[20]} 0`};
    background: ${({ dark, theme }) =>
        dark ? theme.colors.black : `linear-gradient(to bottom, ${theme.colors.black}, ${theme.colors.gray[900]})`};
    position: relative;
    overflow: hidden;
`;

const SectionBackground = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.1;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[16]};
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
`;

const SectionDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    max-width: 36rem;
    margin: 0 auto;
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const FeatureCard = styled.div`
    background: linear-gradient(to bottom right, ${({ theme }) => theme.colors.gray[900]}, ${({ theme }) => theme.colors.black});
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
    border-radius: ${({ theme }) => theme.radii.xl};
    padding: ${({ theme }) => theme.space[6]};
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
        border-color: rgba(255, 255, 255, 0.3);
    }
`;

const FeatureIconWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${({ theme }) => theme.radii.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
    transition: ${({ theme }) => theme.transitions.default};
    
    ${FeatureCard}:hover & {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const FeatureTitle = styled.h3`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const FeatureDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FeatureLink = styled.button`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.md};
    
    &:hover {
        text-decoration: underline;
    }
`;

const MatchesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const MatchCard = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
    border-radius: ${({ theme }) => theme.radii.xl};
    overflow: hidden;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
        border-color: rgba(255, 255, 255, 0.3);
    }
`;

const MatchImageWrapper = styled.div`
    position: relative;
    height: 10rem;
`;

const MatchImageOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, ${({ theme }) => theme.colors.black}, transparent);
`;

const MatchBadge = styled.div<{ variant?: 'live' | 'upcoming' }>`
    position: absolute;
    top: ${({ theme }) => theme.space[2]};
    right: ${({ theme }) => theme.space[2]};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
    border-radius: ${({ theme }) => theme.radii.md};
`;

const MatchContent = styled.div`
    padding: ${({ theme }) => theme.space[4]};
`;

const MatchMeta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const MatchMetaText = styled.span`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const MatchTitle = styled.h3`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const MatchFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MatchType = styled.span`
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const ViewAllButton = styled(Button)`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: ${({ theme }) => theme.space[10]};
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const CTASection = styled.div`
    padding: ${({ theme }) => `${theme.space[20]} 0`};
    background: linear-gradient(to bottom, ${({ theme }) => theme.colors.gray[900]}, ${({ theme }) => theme.colors.black});
`;

const CTACard = styled.div`
    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.radii.xl};
    padding: ${({ theme }) => theme.space[8]};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.space[12]};
        text-align: left;
        flex-direction: row;
    }
`;

const CTAContent = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
        margin-right: ${({ theme }) => theme.space[8]};
    }
`;

const CTATitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
`;

const CTADescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    max-width: 36rem;
`;

const Footer = styled.footer`
    padding: ${({ theme }) => `${theme.space[12]} 0`};
    background-color: ${({ theme }) => theme.colors.black};
    border-top: 1px solid ${({ theme }) => theme.colors.gray[900]};
`;

const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[8]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
    }
`;

const SponsorsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
    }
`;

const SponsorText = styled.span`
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const FooterBottom = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.gray[900]};
    padding-top: ${({ theme }) => theme.space[8]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const Copyright = styled.p`
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
    }
`;

const FooterLinks = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[6]};
`;

const FooterLink = styled.button`
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

export {
    PageWrapper,
    HeroSection,
    BackgroundWrapper,
    BackgroundOverlay,
    RadialGradient,
    AnimatedLinesWrapper,
    VerticalLine,
    HorizontalLine,
    ContentWrapper,
    Header,
    LogoWrapper,
    LogoText,
    NavLinks,
    HeroContent,
    LogoIconWrapper,
    HeroTitle,
    WhiteSpan,
    GradientSpan,
    HeroDescription,
    ButtonGroup,
    PrimaryButton,
    SecondaryButton,
    LiveMatchIndicator,
    LiveDot,
    LiveDotPing,
    LiveDotCore,
    LiveMatchInfo,
    LiveMatchTitle,
    LiveMatchSubtitle,
    ScrollIndicator,
    ScrollText,
    ScrollMouse,
    ScrollDot,
    SectionWrapper,
    SectionBackground,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    FeaturesGrid,
    FeatureCard,
    FeatureIconWrapper,
    FeatureTitle,
    FeatureDescription,
    FeatureLink,
    MatchesGrid,
    MatchCard,
    MatchImageWrapper,
    MatchImageOverlay,
    MatchBadge,
    MatchContent,
    MatchMeta,
    MatchMetaText,
    MatchTitle,
    MatchFooter,
    MatchType,
    ViewAllButton,
    CTASection,
    CTACard,
    CTAContent,
    CTATitle,
    CTADescription,
    Footer,
    FooterTop,
    FooterLogo,
    SponsorsWrapper,
    SponsorText,
    FooterBottom,
    Copyright,
    FooterLinks,
    FooterLink
};