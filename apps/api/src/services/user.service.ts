import fs from 'fs';
import path from 'path';

import { UserOverview, UserRegistration, UserSettings } from '../types/user.types';

export class UserService {
    private readonly dataFilePath: string;

    constructor() {
        this.dataFilePath = path.join(__dirname, '../../data/users.json');
        this.ensureDataFileExists();
    }

    private ensureDataFileExists(): void {
        const dataDir = path.dirname(this.dataFilePath);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        if (!fs.existsSync(this.dataFilePath)) {
            fs.writeFileSync(this.dataFilePath, JSON.stringify([], null, 2));
        }
    }

    private readUsers(): UserRegistration[] {
        const data = fs.readFileSync(this.dataFilePath, 'utf-8');
        return JSON.parse(data);
    }

    private writeUsers(users: UserRegistration[]): void {
        fs.writeFileSync(this.dataFilePath, JSON.stringify(users, null, 2));
    }

    async registerUser(userData: UserRegistration): Promise<UserRegistration> {
        const users = this.readUsers();

        const existingUser = users.find(user => user.personalInfo.cpf === userData.personalInfo.cpf ||
            user.personalInfo.email === userData.personalInfo.email);

        if (existingUser) {
            throw new Error('User with this CPF or email already exists');
        }

        users.push(userData);
        this.writeUsers(users);


        return userData;
    }


    async loginUser(cpf: string, password: string): Promise<boolean> {
        const user = await this.getUserByCpf(cpf);
        if (!user) {
            return false;
        }
        return user.personalInfo.password === password;
    }

    async updateUser(cpf: string, userData: Partial<UserRegistration>): Promise<UserRegistration | null> {
        const users = this.readUsers();
        const userIndex = users.findIndex(user => user.personalInfo.cpf === cpf);

        if (userIndex === -1) {
            return null;
        }

        const updatedUser: UserRegistration = {
            ...users[userIndex],
            ...userData
        };

        users[userIndex] = updatedUser;
        this.writeUsers(users);

        return updatedUser;

    }

    async getUserByCpf(cpf: string): Promise<UserRegistration | null> {
        const users = this.readUsers();
        return users.find(user => user.personalInfo.cpf === cpf) || null;
    }

    async getUserByEmail(email: string): Promise<UserRegistration | null> {
        const users = this.readUsers();
        return users.find(user => user.personalInfo.email === email) || null;
    }

    async getUserSocialConnections(cpf: string): Promise<{ [key: string]: string | undefined } | null> {
        const user = await this.getUserByCpf(cpf);
        if (!user) {
            return null;
        }

        return user.socialMedia;
    }

    async getUserProfileOverview(cpf: string): Promise<UserOverview | null> {
        const user = await this.getUserByCpf(cpf);
        if (!user) {
            return null;
        }

        const socialMedia = Object.entries(user.socialMedia).reduce((acc, [key, value]) => {
            if (value) acc[key as keyof typeof acc] = { username: value };
            return acc;
        }, {} as UserOverview['socialMedia']);

        return {
            profileImage: user.personalInfo.profileImage,
            email: user.personalInfo.email,
            fullName: user.personalInfo.fullName,
            games: user.gamingPreferences.games,
            socialMedia
        };
    }

    async getUserSettings(cpf: string): Promise<UserSettings | null> {
        const user = await this.getUserByCpf(cpf);
        if (!user) {
            return null;
        }
        
        return {
            fullName: user.personalInfo.fullName,
            username: user.personalInfo.username,
            email: user.personalInfo.email,
            password: user.personalInfo.password
        };
    }
}