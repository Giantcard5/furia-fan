import fs from 'fs';
import path from 'path';

import { Game } from '../types/game.type';

export class GamesService {
    private readonly dataFilePath: string;
    private games: Game[];

    constructor() {
        this.dataFilePath = path.join(__dirname, '../../data/games.json');
        this.games = this.loadGames();
    }

    private loadGames(): Game[] {
        try {
            if (fs.existsSync(this.dataFilePath)) {
                const data = fs.readFileSync(this.dataFilePath, 'utf-8');
                return JSON.parse(data);
            } else {
                console.error('Games data file not found:', this.dataFilePath);
                return [];
            }
        } catch (error) {
            console.error('Error loading games:', error);
            return [];
        }
    }

    getAllGames(): Game[] {
        return this.games;
    }
} 