import styled from 'styled-components';

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

export {
    Header,
    Content,
    LogoWrapper,
    NavLinks,
};