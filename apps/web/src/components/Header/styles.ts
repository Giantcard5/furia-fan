import styled from 'styled-components';
import Button from '../UI/button';

const Header = styled.header<{ $isOnboarding?: boolean }>`
    padding: ${({ theme }) => `${theme.space[2]} 0`};
    background-color: ${({ $isOnboarding, theme }) => $isOnboarding ? theme.colors.black : 'transparent'};
    border-bottom: ${({ $isOnboarding, theme }) => $isOnboarding ? `1px solid ${theme.colors.gray[900]}` : 'none'};
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[6]};
`;

const AuthButtons = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[3]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
        margin-top: ${({ theme }) => theme.space[4]};
    }
`;

const ButtonLogin = styled(Button)`
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const ButtonJoin = styled(Button)`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[900]};
`;

export {
    Header,
    Content,
    LogoWrapper,
    NavLinks,
    AuthButtons,
    ButtonLogin,
    ButtonJoin
};