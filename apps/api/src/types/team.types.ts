export interface Player {
    name: string;
    role: string;
    image: string;
}

export interface TeamStat {
    value: number;
    label: string;
}

export interface Team {
    id: number;
    name: string;
    image: string;
    description: string;
    stats: TeamStat[];
    players: Player[];
} 