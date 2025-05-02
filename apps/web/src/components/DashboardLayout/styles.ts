import styled from 'styled-components';

import Link from 'next/link';

const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

const Sidebar = styled.aside`
    width: 240px;
    background-color: ${({ theme }) => theme.colors.background};
    border-right: 1px solid #333333;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 50;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
`;

const SidebarHeader = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333333;
    padding: 0 ${({ theme }) => theme.space[4]};
`;

const SidebarContent = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.space[2]} 0;
    overflow-y: auto;
`;

const SidebarFooter = styled.div`
    padding: ${({ theme }) => theme.space[2]} 0;
    border-top: 1px solid #333333;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
    color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.gray[400])};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    border-radius: 4px;
    margin: 2px ${({ theme }) => theme.space[2]};
    
    ${({ $active }) => $active && `background-color: rgba(255, 255, 255, 0.08);`}
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: ${({ theme }) => theme.colors.gold};
    }
    
    svg {
        margin-right: ${({ theme }) => theme.space[3]};
    }
`;

const NavItemWithSubmenu = styled.div<{ $active?: boolean }>`
    margin: 2px ${({ theme }) => theme.space[2]};
    border-radius: 6px;
    
    ${({ $active }) => $active && ` background-color: rgba(255, 255, 255, 0.1);`}
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const NavItemHeader = styled.div<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
    color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.gray[400])};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }
`;

const NavItemContent = styled.div`
    display: flex;
    align-items: center;
    
    svg {
        margin-right: ${({ theme }) => theme.space[3]};
    }
`;

const SubNavGroup = styled.div<{ $isOpen?: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    margin-top: ${({ theme }) => theme.space[1]};
`;

const SubNavItem = styled(Link)<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
    padding-left: ${({ theme }) => theme.space[10]};
    color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.gray[400])};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    
    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }
    
    svg {
        margin-right: ${({ theme }) => theme.space[3]};
        width: 16px;
        height: 16px;
    }
`;

const MainContainer = styled.main`
    flex: 1;
    min-width: 0;
    margin-left: 240px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-left: 0;
    }
`;

const TopBar = styled.div`
    height: 60px;
    border-bottom: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${({ theme }) => theme.space[4]};
    background-color: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: 0;
    right: 0;
    left: 240px;
    z-index: 10;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        left: 0;
    }
`;

const MobileMenuButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gold};
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const TopBarTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.gold};
`;

const UserActions = styled(Link)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[4]};
`;

const IconButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.02);
    border: none;
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: ${({ theme }) => theme.colors.gold};
    }
`;

const NotificationBadge = styled.span`
    position: absolute;
    top: -2px;
    right: -2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.background};
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const UserAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
    padding: ${({ theme }) => theme.space[3]};
    margin: ${({ theme }) => theme.space[20]} auto;
    max-width: 1200px;
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[6]};
    color: ${({ theme }) => theme.colors.gold};
`;

export {
    LayoutContainer,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    NavItem,
    NavItemWithSubmenu,
    NavItemHeader,
    NavItemContent,
    SubNavGroup,
    SubNavItem,
    MainContainer,
    TopBar,
    MobileMenuButton,
    TopBarTitle,
    UserActions,
    IconButton,
    NotificationBadge,
    UserAvatar,
    Content,
    PageTitle
};