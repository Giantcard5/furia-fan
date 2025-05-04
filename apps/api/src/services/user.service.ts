import { PrismaClient } from '@prisma/client';

import {
    UserOverview,
    UserRegistration,
    UserSettings
} from '@furiafan/types';

const prisma = new PrismaClient();

export const getUserByCpf = async (cpf: string) => {
    return await prisma.user.findUnique({
        where: { cpf },
        include: {
            events: true,
            purchases: true,
            games: true,
            socialMedia: true,
            documents: true,
        }
    });
};

export const createUser = async (data: UserRegistration) => {
    const { personalInfo, gamingPreferences, documents, socialMedia } = data;

    console.log('Chegou aqui:', personalInfo.cpf);

    try {
        const user = await prisma.user.create({
            data: {
                fullName: personalInfo.fullName,
                username: personalInfo.username,
                email: personalInfo.email,
                cpf: personalInfo.cpf,
                phoneNumber: personalInfo.phoneNumber,
                birthDate: personalInfo.birthDate,
                address: personalInfo.address,
                city: personalInfo.city,
                state: personalInfo.state,
                zipCode: personalInfo.zipCode,
                password: personalInfo.password,
                profileImage: personalInfo.profileImage || null,
                platform: gamingPreferences?.platform || '',
                playFrequency: gamingPreferences?.playFrequency || '',

                settings: {
                    create: {
                        language: 'pt-BR',
                        emailNotifications: true,
                        pushNotifications: true,
                        marketingEmails: true,
                        eventReminders: true
                    }
                },

                games: Array.isArray(gamingPreferences?.games) && gamingPreferences.games.length
                    ? {
                        create: gamingPreferences.games.map((g: string) => ({ name: g }))
                    }
                    : undefined,

                events: Array.isArray(gamingPreferences?.events) && gamingPreferences.events.length
                    ? {
                        create: gamingPreferences.events.map((e: string) => ({ name: e }))
                    }
                    : undefined,

                purchases: Array.isArray(gamingPreferences?.purchases) && gamingPreferences.purchases.length
                    ? {
                        create: gamingPreferences.purchases.map((p: string) => ({ name: p }))
                    }
                    : undefined,

                documents: {
                    create: {
                        idDocument: '', // Change to link
                        selfieWithId: '' // Change to link
                    }
                },

                socialMedia: socialMedia
                    ? {
                        create: {
                            twitch: null,
                            discord: null,
                            HLTV: null
                        }
                    }
                    : undefined
            },
            include: {
                settings: true,
                games: true,
                events: true,
                purchases: true,
                documents: true,
                socialMedia: true
            }
        });

        if (user) {
            console.log('✅ Usuário criado com sucesso:', user);
            return user;
        } else {
            console.warn('⚠️ A criação do usuário retornou vazio.');
            return null;
        }
    } catch (error) {
        console.error('❌ Erro ao criar usuário:', error);
        throw error;
    }
};


export const loginUser = async (cpf: string, password: string): Promise<boolean> => {
    const user = await prisma.user.findUnique({ where: { cpf } });
    return !!(user && user.password === password);
};

export const getUserSocialConnections = async (cpf: string): Promise<Record<string, string | undefined> | null> => {
    const user = await prisma.user.findUnique({
        where: { cpf },
        include: { socialMedia: true },
    });
    if (!user || !user.socialMedia) return null;

    return {
        twitch: user.socialMedia.twitch || undefined,
        discord: user.socialMedia.discord || undefined,
        HLTV: user.socialMedia.HLTV || undefined,
    };
};

export const getUserProfileOverview = async (cpf: string): Promise<UserOverview | null> => {
    const user = await prisma.user.findUnique({
        where: { cpf },
        include: {
            socialMedia: true,
            games: true,
        },
    });

    if (!user) return null;

    const socialMedia: UserOverview['socialMedia'] = {};
    if (user.socialMedia?.twitch) socialMedia.twitch = { username: user.socialMedia.twitch };
    if (user.socialMedia?.discord) socialMedia.discord = { username: user.socialMedia.discord };
    if (user.socialMedia?.HLTV) socialMedia.hltv = { username: user.socialMedia.HLTV };

    return {
        profileImage: user.profileImage,
        email: user.email,
        fullName: user.fullName,
        games: user.games.map(g => g.name),
        socialMedia,
    };
};

export const getUserSettings = async (cpf: string): Promise<UserSettings | null> => {
    const user = await prisma.user.findUnique({
        where: { cpf },
        include: { settings: true }
    });

    if (!user || !user.settings) return null;

    return {
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        language: user.settings.language,
        emailNotifications: user.settings.emailNotifications,
        pushNotifications: user.settings.pushNotifications,
        marketingEmails: user.settings.marketingEmails,
        eventReminders: user.settings.eventReminders,
    };
};

export const updateUserSettings = async (cpf: string, settings: Partial<UserSettings>) => {
    const user = await prisma.user.findUnique({ where: { cpf } });
    if (!user) return null;

    await prisma.user.update({
        where: { cpf },
        data: {
            fullName: settings.fullName,
            username: settings.username,
            email: settings.email,
            password: settings.password,
            phoneNumber: settings.phoneNumber,
        },
    });

    const updated = await prisma.userSettings.update({
        where: { cpf },
        data: {
            language: settings.language,
            emailNotifications: settings.emailNotifications,
            pushNotifications: settings.pushNotifications,
            marketingEmails: settings.marketingEmails,
            eventReminders: settings.eventReminders,
        },
    });

    return {
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        password: settings.password || user.password,
        phoneNumber: user.phoneNumber,
        language: updated.language,
        emailNotifications: updated.emailNotifications,
        pushNotifications: updated.pushNotifications,
        marketingEmails: updated.marketingEmails,
        eventReminders: updated.eventReminders,
    };
};