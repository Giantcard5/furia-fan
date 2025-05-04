import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllGames = async () => {
    return await prisma.game.findMany();
};