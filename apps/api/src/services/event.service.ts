import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllEvents = async () => {
    return await prisma.event.findMany();
};

export const getEventById = async (id: number) => {
    return await prisma.event.findUnique({
        where: { id },
    });
};

export const getNextEvents = async () => {
    const now = new Date();
    return await prisma.event.findMany({
        where: { date: { gt: now } },
    });
};