'use client';

import { 
    Gamepad2 
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

export default function GamesPage() {
    const games = [
        {
            id: 1,
            name: 'Counter-Strike 2',
            image: '/placeholder.svg?height=160&width=300',
            description:
                'The iconic first-person shooter game where FURIA competes at the highest level in international tournaments.',
            teams: 1,
            players: 5,
            tournaments: 15,
        },
        {
            id: 2,
            name: 'Valorant',
            image: '/placeholder.svg?height=160&width=300',
            description:
                'Riot Games tactical shooter where FURIA has established a competitive presence in the Valorant Champions Tour.',
            teams: 1,
            players: 5,
            tournaments: 8,
        },
        {
            id: 3,
            name: 'League of Legends',
            image: '/placeholder.svg?height=160&width=300',
            description:
                'The popular MOBA game where FURIA competes in the Brazilian Championship of League of Legends (CBLOL).',
            teams: 1,
            players: 5,
            tournaments: 6,
        },
        {
            id: 4,
            name: 'Rainbow Six Siege',
            image: '/placeholder.svg?height=160&width=300',
            description:
                'Tactical shooter where FURIAs team competes in the Brazilian Championship and international events.',
            teams: 1,
            players: 5,
            tournaments: 7,
        },
        {
            id: 5,
            name: 'Free Fire',
            image: '/placeholder.svg?height=160&width=300',
            description:
                'Mobile battle royale game where FURIA has a competitive team participating in regional tournaments.',
            teams: 1,
            players: 4,
            tournaments: 5,
        },
        {
            id: 6,
            name: 'EA FC 24',
            image: '/placeholder.svg?height=160&width=300',
            description: 'Football simulation game where FURIAs players compete in individual and team competitions.',
            teams: 1,
            players: 2,
            tournaments: 4,
        },
    ];

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <Gamepad2 size={24} />
                    Games
                </S.PageTitle>
            </S.PageHeader>

            <S.GamesGrid>
                {games.map((game) => (
                    <S.GameCard key={game.id}>
                        <S.GameImage image={game.image} />
                        <S.GameHeader>
                            <S.GameTitle>{game.name}</S.GameTitle>
                        </S.GameHeader>
                        <S.GameContent>
                            <S.GameDescription>{game.description}</S.GameDescription>
                            <S.GameStats>
                                <S.StatItem>
                                    <S.StatValue>{game.teams}</S.StatValue>
                                    <S.StatLabel>Teams</S.StatLabel>
                                </S.StatItem>
                                <S.StatItem>
                                    <S.StatValue>{game.players}</S.StatValue>
                                    <S.StatLabel>Players</S.StatLabel>
                                </S.StatItem>
                                <S.StatItem>
                                    <S.StatValue>{game.tournaments}</S.StatValue>
                                    <S.StatLabel>Tournaments</S.StatLabel>
                                </S.StatItem>
                            </S.GameStats>
                        </S.GameContent>
                    </S.GameCard>
                ))}
            </S.GamesGrid>
        </DashboardLayout>
    );
};