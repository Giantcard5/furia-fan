'use client';

import React from 'react'

import {
    useRouter
} from 'next/navigation';

import {
    Container
} from '@/components/UI/container';

import Image from 'next/image';

import * as S from './styles';

export function Footer() {
    const router = useRouter();

    return (
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
    );
};

export default Footer;