import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Criar times (Team)
    const teams = await Promise.all([
        prisma.team.create({
            data: {
                name: 'CS:GO',
                image: '/images/teams/csgo.png',
                description: 'A equipe de CS:GO da FURIA é uma das mais bem-sucedidas do Brasil, conhecida por seu estilo agressivo e jogadas inovadoras.',
            },
        }),
        prisma.team.create({
            data: {
                name: 'Valorant',
                image: '/images/teams/valorant.png',
                description: 'A equipe de Valorant da FURIA representa o Brasil com excelência, demonstrando um jogo tático e preciso.',
            },
        }),
        prisma.team.create({
            data: {
                name: 'League of Legends',
                image: '/images/teams/lol.png',
                description: 'A equipe de League of Legends da FURIA representa o Brasil com excelência, demonstrando um jogo tático e preciso.',
            },
        }),
        prisma.team.create({
            data: {
                name: 'Rocket League',
                image: '/images/teams/rocketleague.png',
                description: 'A equipe de Rocket League da FURIA representa o Brasil com excelência, demonstrando um jogo tático e preciso.',
            },
        }),
        prisma.team.create({
            data: {
                name: 'Rainbow Six Siege',
                image: '/images/teams/rainbow6.png',
                description: 'A equipe de Rainbow Six Siege da FURIA representa o Brasil com excelência, demonstrando um jogo tático e preciso.',
            },
        }),
        prisma.team.create({
            data: {
                name: 'PUBG',
                image: '/images/teams/pubg.png',
                description: 'A equipe de PUBG da FURIA representa o Brasil com excelência, demonstrando um jogo tático e preciso.',
            },
        }),
    ]);

    await prisma.stat.createMany({
        data: [
            { value: 5, label: 'Titulos', teamId: teams[0].id },
            { value: 15, label: 'Top 3', teamId: teams[0].id },
            { value: 30, label: 'Top 5', teamId: teams[0].id },
            { value: 3, label: 'Titulos', teamId: teams[1].id },
            { value: 10, label: 'Top 3', teamId: teams[1].id },
            { value: 20, label: 'Top 5', teamId: teams[1].id },
            { value: 1, label: 'Titulos', teamId: teams[2].id },
            { value: 3, label: 'Top 3', teamId: teams[2].id },
            { value: 5, label: 'Top 5', teamId: teams[2].id },
            { value: 1, label: 'Titulos', teamId: teams[3].id },
            { value: 3, label: 'Top 3', teamId: teams[3].id },
            { value: 1, label: 'Titulos', teamId: teams[4].id },
            { value: 3, label: 'Top 3', teamId: teams[4].id },
            { value: 1, label: 'Titulos', teamId: teams[5].id },
            { value: 3, label: 'Top 3', teamId: teams[5].id },
        ],
    });

    await prisma.player.createMany({
        data: [
            { name: 'KSCERATO', role: 'Player', image: '/images/players/kscerato.png', teamId: teams[0].id },
            { name: 'yuurih', role: 'Player', image: '/images/players/yuurih.png', teamId: teams[0].id },
            { name: 'FalleN', role: 'Player', image: '/images/players/falleN.png', teamId: teams[0].id },
            { name: 'Molodoy', role: 'Player', image: '/images/players/molodoy.png', teamId: teams[0].id },
            { name: 'Yekindar', role: 'Player', image: '/images/players/yekindar.png', teamId: teams[0].id },
            { name: 'sidde', role: 'Coach', image: '/images/players/sidde.png', teamId: teams[0].id },
            { name: 'skullz', role: 'Inactive Player', image: '/images/players/skullz.png', teamId: teams[0].id },
            { name: 'chelo', role: 'Inactive Player', image: '/images/players/chelo.png', teamId: teams[0].id },
            { name: 'raafa', role: 'Player', image: '/images/players/raafa.png', teamId: teams[1].id },
            { name: 'heat', role: 'Player', image: '/images/players/heat.png', teamId: teams[1].id },
            { name: 'havoc', role: 'Player', image: '/images/players/havoc.png', teamId: teams[1].id },
            { name: 'khalil', role: 'Player', image: '/images/players/khalil.png', teamId: teams[1].id },
            { name: 'pyze', role: 'Player', image: '/images/players/pyze.png', teamId: teams[1].id },
            { name: 'mwzera', role: 'Inactive Player', image: '/images/players/mwzera.png', teamId: teams[1].id },
            { name: 'peu', role: 'Coach', image: '/images/players/peu.png', teamId: teams[1].id },
            { name: 'lukzera', role: 'Assistant Coach', image: '/images/players/lukzera.png', teamId: teams[1].id },
            { name: 'Guigo', role: 'Player', image: '/images/players/guigo.png', teamId: teams[2].id },
            { name: 'Tatu', role: 'Player', image: '/images/players/tatu.png', teamId: teams[2].id },
            { name: 'Tutsz', role: 'Player', image: '/images/players/tutsz.png', teamId: teams[2].id },
            { name: 'Ayu', role: 'Player', image: '/images/players/ayu.png', teamId: teams[2].id },
            { name: 'JoJo', role: 'Player', image: '/images/players/jojo.png', teamId: teams[2].id },
            { name: 'Thinkcard', role: 'Coach', image: '/images/players/Thinkcard.png', teamId: teams[2].id },
            { name: 'yANXNZ', role: 'Player', image: '/images/players/yANXNZ.png', teamId: teams[3].id },
            { name: 'Lost', role: 'Player', image: '/images/players/lostt.png', teamId: teams[3].id },
            { name: 'DRUFINHO', role: 'Player', image: '/images/players/drufinho.png', teamId: teams[3].id },
            { name: 'STL', role: 'Coach', image: '/images/players/stl.png', teamId: teams[3].id },
            { name: 'FelipoX', role: 'Player', image: '/images/players/felipox.png', teamId: teams[4].id },
            { name: 'HerdsZ', role: 'Player', image: '/images/players/herdsz.png', teamId: teams[4].id },
            { name: 'Jv92', role: 'Player', image: '/images/players/jv92.png', teamId: teams[4].id },
            { name: 'Kheyze', role: 'Player', image: '/images/players/kheyze.png', teamId: teams[4].id },
            { name: 'Nade', role: 'Player', image: '/images/players/nade.png', teamId: teams[4].id },
            { name: 'igoorctg', role: 'Coach', image: '/images/players/igoorctg.png', teamId: teams[4].id },
            { name: 'guizeraa', role: 'Player', image: '/images/players/guizeraa.png', teamId: teams[5].id },
            { name: 'haven', role: 'Player', image: '/images/players/haven.png', teamId: teams[5].id },
            { name: 'possa', role: 'Player', image: '/images/players/possa.png', teamId: teams[5].id },
            { name: 'zkrakeN', role: 'Player', image: '/images/players/zkraken.png', teamId: teams[5].id },
            { name: 'rds149', role: 'Coach', image: '/images/players/rds149.png', teamId: teams[5].id },
        ],
    }),

        // Criar eventos (Event)
        await prisma.event.createMany({
            data: [
                {
                    title: 'FURIA vs MiBR',
                    type: 'match',
                    date: new Date('2025-04-30'),
                    time: '18:00:00',
                    location: 'São Paulo, Brazil',
                    attendees: 156,
                    game: 'CS2',
                },
                {
                    title: 'CS2 Major Copenhagen',
                    type: 'tournament',
                    date: new Date('2025-05-14'),
                    time: '10:00:00',
                    location: 'Copenhagen, Denmark',
                    attendees: 243,
                    game: 'CS2',
                    createdAt: new Date('2023-11-15 10:30:00'),
                    updatedAt: new Date('2023-11-15 10:30:00'),
                },
                {
                    title: 'FURIA Fan Meet',
                    type: 'fan-meet',
                    date: new Date('2025-06-09'),
                    time: '15:00:00',
                    location: 'Rio de Janeiro, Brazil',
                    attendees: 89,
                    createdAt: new Date('2023-11-15 10:30:00'),
                    updatedAt: new Date('2023-11-15 10:30:00'),
                },
                {
                    title: 'FURIA vs Liquid',
                    type: 'match',
                    date: new Date('2025-06-15'),
                    time: '19:30:00',
                    location: 'Los Angeles, USA',
                    attendees: 112,
                    game: 'CS2',
                    createdAt: new Date('2023-11-15 10:30:00'),
                    updatedAt: new Date('2023-11-15 10:30:00'),
                },
                {
                    title: 'Valorant Champions Tour',
                    type: 'tournament',
                    date: new Date('2025-07-05'),
                    time: '12:00:00',
                    location: 'Berlin, Germany',
                    attendees: 178,
                    game: 'Valorant',
                    createdAt: new Date('2023-11-15 10:30:00'),
                    updatedAt: new Date('2023-11-15 10:30:00'),
                },
                {
                    title: 'FURIA Community Day',
                    type: 'fan-meet',
                    date: new Date('2025-07-20'),
                    time: '14:00:00',
                    location: 'São Paulo, Brazil',
                    attendees: 65,
                    createdAt: new Date('2023-11-15 10:30:00'),
                    updatedAt: new Date('2023-11-15 10:30:00'),
                },
            ],
        });

    // Criar produtos (Shop)
    await prisma.shop.createMany({
        data: [
            {
                title: 'Camiseta Oficial FURIA',
                category: 'Apparel',
                price: 129.90,
                oldPrice: 149.90,
                discount: 13,
                rating: 4.8,
                ratingCount: 125,
                image: 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-oficial-24-preta-150177/336897-7.jpg?w=468&h=468&v=202502121640',
                tag: 'New',
                availability: 'In Stock',
                productLink: 'https://www.furia.gg/produto/camiseta-furia-oficial-24-preta-150177'
            },
            {
                title: 'Camiseta Furia | Adidas Preta',
                category: 'Apparel',
                price: 89.90,
                oldPrice: 99.90,
                discount: 10,
                rating: 4.6,
                ratingCount: 75,
                image: 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-adidas-preta-150263/337479-1.jpg?w=468&h=468&v=202503281012',
                tag: 'New',
                availability: 'In Stock',
                productLink: 'https://www.furia.gg/produto/camiseta-furia-adidas-preta-150263'
            }
        ]
    });

    console.log('🌱 Seed realizado com sucesso!');
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });