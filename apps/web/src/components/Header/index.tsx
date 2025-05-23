'use client';

import React from 'react'

import {
    useRouter
} from 'next/navigation';

import {
    User
} from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import {
    Button
} from '@/components/UI/button';

import Container from '../UI/container';

import * as S from './styles';
import Cookies from 'js-cookie';

export function Header({ $isOnboarding }: { $isOnboarding?: boolean }) {
    const router = useRouter();

    const handleLogin = () => {
        const userCookie = Cookies.get('furiaUser');
        const cpfCookie = Cookies.get('furiaCpf');

        if (userCookie && cpfCookie) {
            router.push('/dashboard');
        } else {
            router.push('/login');
        }
    };

    return (
        <S.Header $isOnboarding={$isOnboarding}>
            <Container>
                <S.Content>
                    <S.LogoWrapper>
                        <Image
                            src='/icon-text-white.svg'
                            alt='FURIA Text'
                            width={70}
                            height={70}
                        />
                    </S.LogoWrapper>

                    <S.NavLinks>
                        <Button $variant='link' onClick={() => router.push('/about')}>
                            About
                        </Button>
                        <Button $variant='link' onClick={() => router.push('/teams')}>
                            Teams
                        </Button>
                        <Button $variant='link' onClick={() => router.push('/matches')}>
                            Matches
                        </Button>
                        <Button $variant='link' onClick={() => router.push('/community')}>
                            Community
                        </Button>
                        <S.AuthButtons>
                            <S.ButtonLogin onClick={handleLogin} $variant='outline' size='md'>
                                Login
                            </S.ButtonLogin>
                            <S.ButtonJoin onClick={() => router.push('/onboarding')}>
                                Join Now
                            </S.ButtonJoin>
                        </S.AuthButtons>
                    </S.NavLinks>
                </S.Content>
            </Container>
        </S.Header>
    );
};

export default Header;