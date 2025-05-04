import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllShopItems = async () => {
    return await prisma.shop.findMany();
};