'use client';

import { 
    useState, 
    useEffect 
} from 'react';

import {
    Gamepad2
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

import { 
    apiService 
} from '@/lib/api-service';

import { 
    Game 
} from '@furiafan/types';

export default function GamesPage() {
    const [loading, setLoading] = useState(true);
    const [games, setGames] = useState<Game[]>([]);

    const fetchEvents = async () => {
        setLoading(true);

        try {
            const response = await apiService.getGamesData();

            if (response.error) {
                throw new Error(response.error);
            };

            console.log(response.data);

            setGames(response.data);
        } catch (err) {
            console.error('Error fetching messages:', err);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchEvents();
    }, []);

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
                        <S.GameImage $image={game.image} />
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