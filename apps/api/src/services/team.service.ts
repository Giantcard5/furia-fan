import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTeams = async () => {
    return await prisma.team.findMany({
        include: {
            players: true,
            stats: true,
        },
    });
};