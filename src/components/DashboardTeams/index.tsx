'use client';

import { 
    useEffect, 
    useState 
} from 'react';

import { 
    Trophy, 
    Users 
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

import { 
    apiService 
} from '@/lib/api-service';

import { 
    Team 
} from '@/types/team';

export default function TeamsPage() {
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState<Team[]>([]);
    
    const fetchTeams = async () => {
        setLoading(true);

        try {
            const response = await apiService.getTeamsData();

            if (response.error) {
                throw new Error(response.error);
            };

            console.log(response.data);

            setTeams(response.data);
        } catch (err) {
            console.error('Error fetching messages:', err);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchTeams();
    }, []);

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
                            <S.TeamImage $image={team.image} />
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
                                            <S.PlayerAvatar $image={player.image} />
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