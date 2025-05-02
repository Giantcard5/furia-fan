'use client';

import React, { 
    useEffect,
    useState 
} from 'react';

import { 
    usePathname 
} from 'next/navigation';

import {
    Home,
    User,
    Calendar,
    Users,
    Gamepad2,
    ShoppingBag,
    Settings,
    HelpCircle,
    MessageSquare,
    Trophy,
    ChevronDown,
    ChevronRight,
} from 'lucide-react';

import Image from 'next/image';

import * as S from './styles';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const [isMounted, setIsMounted] = useState(false);
    const [communityOpen, setCommunityOpen] = useState(pathname.includes('/dashboard/community'));
  
    useEffect(() => {
        setIsMounted(true);
    }, []);
  
    if (!isMounted) return null;

    const toggleCommunity = () => {
        setCommunityOpen(!communityOpen);
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    const isCommunityActive = () => {
        return pathname.includes('/dashboard/community');
    };

    return (
        <S.LayoutContainer>
            <S.Sidebar>
                <S.SidebarHeader>
                    <Image src='/icon-text-white.svg' alt='FURIA FAN HUB' width={80} height={24} />
                </S.SidebarHeader>

                <S.SidebarContent>
                    <S.NavItem href='/dashboard' $active={isActive('/dashboard')}>
                        <Home size={18} />
                        Dashboard
                    </S.NavItem>

                    <S.NavItem href='/dashboard/profile' $active={isActive('/dashboard/profile')}>
                        <User size={18} />
                        My Profile
                    </S.NavItem>

                    <S.NavItem href='/dashboard/events' $active={isActive('/dashboard/events')}>
                        <Calendar size={18} />
                        Events
                    </S.NavItem>

                    <S.NavItemWithSubmenu>
                        <S.NavItemHeader $active={isCommunityActive()} onClick={toggleCommunity}>
                            <S.NavItemContent>
                                <Users size={18} />
                                Community
                            </S.NavItemContent>
                            {communityOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </S.NavItemHeader>
                        <S.SubNavGroup $isOpen={communityOpen}>
                            <S.SubNavItem href='/dashboard/community/forums' $active={isActive('/dashboard/community/forums')}>
                                <MessageSquare size={16} />
                                Forums
                            </S.SubNavItem>
                            <S.SubNavItem href='/dashboard/community/teams' $active={isActive('/dashboard/community/teams')}>
                                <Trophy size={16} />
                                Teams
                            </S.SubNavItem>
                            <S.SubNavItem href='/dashboard/community/games' $active={isActive('/dashboard/community/games')}>
                                <Gamepad2 size={16} />
                                Games
                            </S.SubNavItem>
                        </S.SubNavGroup>
                    </S.NavItemWithSubmenu>

                    <S.NavItem href='/dashboard/shop' $active={isActive('/dashboard/shop')}>
                        <ShoppingBag size={18} />
                        Shop
                    </S.NavItem>
                </S.SidebarContent>

                <S.SidebarFooter>
                    <S.NavItem href='/dashboard/settings' $active={isActive('/dashboard/settings')}>
                        <Settings size={18} />
                        Settings
                    </S.NavItem>

                    <S.NavItem href='/dashboard/help' $active={isActive('/dashboard/help')}>
                        <HelpCircle size={18} />
                        Help & Support
                    </S.NavItem>
                </S.SidebarFooter>
            </S.Sidebar>

            <S.MainContainer>
                <S.TopBar>
                    <S.UserActions href='/dashboard/profile'>
                        <S.IconButton>
                            <User size={20} />
                        </S.IconButton>
                    </S.UserActions>
                </S.TopBar>

                <S.Content>{children}</S.Content>
            </S.MainContainer>
        </S.LayoutContainer>
    );
};