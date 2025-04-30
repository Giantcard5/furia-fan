import styled from 'styled-components';

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