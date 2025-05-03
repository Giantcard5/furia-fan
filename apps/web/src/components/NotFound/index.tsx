'use client'

import Image from 'next/image';

import { 
    ArrowLeft, 
    Home 
} from 'lucide-react';

import * as S from './styles';

export default function NotFoundPage() {
    return (
        <S.NotFoundContainer>
            <S.Decoration />
            <S.Logo>
                <Image src='/icon-text-white.svg' alt='FURIA Logo' width={180} height={180} />
            </S.Logo>
            <S.ErrorCode>404</S.ErrorCode>
            <S.ErrorTitle>Página não encontrada</S.ErrorTitle>
            <S.ErrorMessage>
                Parece que você se aventurou em território desconhecido. A página que você está procurando não existe ou foi
                movida para outro endereço.
            </S.ErrorMessage>
            <S.ButtonsContainer>
                <S.PrimaryButton href='/'>
                    <Home size={18} />
                    Voltar para Home
                </S.PrimaryButton>
                <S.SecondaryButton onClick={() => window.history.back()}>
                    <ArrowLeft size={18} />
                    Voltar
                </S.SecondaryButton>
            </S.ButtonsContainer>
        </S.NotFoundContainer>
    );
};