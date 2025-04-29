'use client';

import { 
    Trophy, 
    Users 
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

export default function TeamsPage() {
    const teams = [
        {
            id: 1,
            name: 'FURIA CS2',
            image: '/placeholder.svg?height=200&width=400',
            description:
                'FURIAs Counter-Strike 2 team is one of the most successful Brazilian esports teams, competing at the highest level in international tournaments.',
            stats: [
                { value: 15, label: 'Tournaments' },
                { value: 78, label: 'Wins' },
                { value: 3, label: 'Trophies' },
            ],
            players: [
                { name: 'arT', role: 'In-game Leader', image: '/placeholder.svg?height=40&width=40' },
                { name: 'KSCERATO', role: 'Rifler', image: '/placeholder.svg?height=40&width=40' },
                { name: 'yuurih', role: 'Rifler', image: '/placeholder.svg?height=40&width=40' },
                { name: 'saffee', role: 'AWPer', image: '/placeholder.svg?height=40&width=40' },
                { name: 'chelo', role: 'Support', image: '/placeholder.svg?height=40&width=40' },
            ],
        },
        {
            id: 2,
            name: 'FURIA Valorant',
            image: '/placeholder.svg?height=200&width=400',
            description:
                'FURIAs Valorant team competes in the Valorant Champions Tour and other major tournaments, representing Brazil on the international stage.',
            stats: [
                { value: 8, label: 'Tournaments' },
                { value: 42, label: 'Wins' },
                { value: 1, label: 'Trophies' },
            ],
            players: [
                { name: 'Quick', role: 'In-game Leader', image: '/placeholder.svg?height=40&width=40' },
                { name: 'Khalil', role: 'Duelist', image: '/placeholder.svg?height=40&width=40' },
                { name: 'Mazin', role: 'Initiator', image: '/placeholder.svg?height=40&width=40' },
                { name: 'Nozwerr', role: 'Controller', image: '/placeholder.svg?height=40&width=40' },
                { name: 'Dgzin', role: 'Sentinel', image: '/placeholder.svg?height=40&width=40' },
            ],
        },
    ];

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <Trophy size={24} />
                    Teams
                </S.PageTitle>
            </S.PageHeader>

            <S.TeamsContainer>
                {teams.map((team) => (
                    <S.TeamCard key={team.id}>
                        <S.TeamHeader>
                            <S.TeamTitle>
                                <Trophy size={20} />
                                {team.name}
                            </S.TeamTitle>
                        </S.TeamHeader>

                        <S.TeamContent>
                            <S.TeamImage image={team.image} />
                            <S.TeamDescription>{team.description}</S.TeamDescription>

                            <S.TeamStats>
                                {team.stats.map((stat, index) => (
                                    <S.StatItem key={index}>
                                        <S.StatValue>{stat.value}</S.StatValue>
                                        <S.StatLabel>{stat.label}</S.StatLabel>
                                    </S.StatItem>
                                ))}
                            </S.TeamStats>

                            <S.TeamRoster>
                                <S.RosterTitle>
                                    <Users size={18} style={{ display: 'inline', marginRight: '8px' }} />
                                    Current Roster
                                </S.RosterTitle>
                                <S.PlayersList>
                                    {team.players.map((player, index) => (
                                        <S.PlayerItem key={index}>
                                            <S.PlayerAvatar image={player.image} />
                                            <S.PlayerInfo>
                                                <S.PlayerName>{player.name}</S.PlayerName>
                                                <S.PlayerRole>{player.role}</S.PlayerRole>
                                            </S.PlayerInfo>
                                        </S.PlayerItem>
                                    ))}
                                </S.PlayersList>
                            </S.TeamRoster>
                        </S.TeamContent>
                    </S.TeamCard>
                ))}
            </S.TeamsContainer>
        </DashboardLayout>
    );
};