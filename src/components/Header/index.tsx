'use client';

import React from 'react'

import {
    useRouter
} from 'next/navigation';

import Image from 'next/image';

import {
    Button
} from '@/components/UI/button';

import Container from '../UI/container';

import * as S from './styles';

export function Header({ $isOnboarding }: { $isOnboarding?: boolean }) {
    const router = useRouter();

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
                        <Button onClick={() => router.push('/onboarding')}>Join Now</Button>
                    </S.NavLinks>
                </S.Content>
            </Container>
        </S.Header>
    );
};

export default Header;