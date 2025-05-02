import fs from 'fs';
import path from 'path';

import { Team } from '../types/team.types';

export class TeamsService {
    private readonly dataFilePath: string;
    private teams: Team[];

    constructor() {
        this.dataFilePath = path.join(__dirname, '../../data/teams.json');
        this.teams = this.loadTeams();
    }

    private loadTeams(): Team[] {
        try {
            if (fs.existsSync(this.dataFilePath)) {
                const data = fs.readFileSync(this.dataFilePath, 'utf-8');
                return JSON.parse(data);
            } else {
                console.error('Team data file not found:', this.dataFilePath);
                return [];
            }
        } catch (error) {
            console.error('Error loading teams:', error);
            return [];
        }
    }

    getAllTeams(): Team[] {
        return this.teams;
    }
} 