-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.42 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for furia_fan
CREATE DATABASE IF NOT EXISTS `furia_fan` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `furia_fan`;

-- Dumping structure for table furia_fan.Document
CREATE TABLE IF NOT EXISTS `Document` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idDocument` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `selfieWithId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Document_userId_key` (`userId`),
  CONSTRAINT `Document_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Document: ~0 rows (approximately)
INSERT INTO `Document` (`id`, `idDocument`, `selfieWithId`, `userId`) VALUES
	(1, 'id_document.jpg', 'data:image/jpeg;base64,/9j/4AAQSkZJRg...', 1),
	(2, 'id_document.jpg', 'data:image/jpeg;base64,/9j/4AAQSkZJRg...', 2);

-- Dumping structure for table furia_fan.Event
CREATE TABLE IF NOT EXISTS `Event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL,
  `time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attendees` int NOT NULL,
  `game` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Event: ~0 rows (approximately)
INSERT INTO `Event` (`id`, `title`, `type`, `date`, `time`, `location`, `image`, `attendees`, `game`, `createdAt`, `updatedAt`) VALUES
	(1, 'FURIA vs MiBR', 'match', '2025-04-30 00:00:00.000', '18:00:00', 'São Paulo, Brazil', '', 156, 'CS2', '2023-11-15 10:30:00.000', '2023-11-15 10:30:00.000'),
	(2, 'CS2 Major Copenhagen', 'tournament', '2025-05-14 00:00:00.000', '10:00:00', 'Copenhagen, Denmark', '', 243, 'CS2', '2023-11-15 10:30:00.000', '2023-11-15 10:30:00.000'),
	(3, 'FURIA Fan Meet', 'fan-meet', '2025-06-09 00:00:00.000', '15:00:00', 'Rio de Janeiro, Brazil', '', 89, '', '2023-11-15 10:30:00.000', '2023-11-15 10:30:00.000'),
	(4, 'FURIA vs Liquid', 'match', '2025-06-15 00:00:00.000', '19:30:00', 'Los Angeles, USA', '', 112, 'CS2', '2023-11-15 10:30:00.000', '2023-11-15 10:30:00.000'),
	(5, 'Valorant Champions Tour', 'tournament', '2025-07-05 00:00:00.000', '12:00:00', 'Berlin, Germany', '', 178, 'Valorant', '2023-11-15 10:30:00.000', '2023-11-15 10:30:00.000'),
	(6, 'FURIA Community Day', 'fan-meet', '2025-07-20 00:00:00.000', '14:00:00', 'São Paulo, Brazil', '', 65, '', '2023-11-15 10:30:00.000', '2023-11-15 10:30:00.000');

-- Dumping structure for table furia_fan.EventPreference
CREATE TABLE IF NOT EXISTS `EventPreference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `EventPreference_userId_fkey` (`userId`),
  CONSTRAINT `EventPreference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.EventPreference: ~0 rows (approximately)
INSERT INTO `EventPreference` (`id`, `name`, `userId`) VALUES
	(1, 'rio-major', 1),
	(2, 'vct-champions', 1),
	(3, 'cs2-major', 1),
	(4, 'Major Championships', 2),
	(5, 'Local Tournaments', 2),
	(6, 'Major Championships', 2),
	(7, 'Local Tournaments', 2);

-- Dumping structure for table furia_fan.Game
CREATE TABLE IF NOT EXISTS `Game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teams` int NOT NULL,
  `players` int NOT NULL,
  `tournaments` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Game: ~0 rows (approximately)
INSERT INTO `Game` (`id`, `name`, `image`, `description`, `teams`, `players`, `tournaments`) VALUES
	(1, 'CS:GO', '/images/teams/csgo.png', 'A equipe de CS:GO da FURIA u00e9 uma das mais bem-sucedidas do Brasil, conhecida por seu estilo agressivo e jogadas inovadoras.', 1, 5, 30),
	(2, 'Valorant', '/images/teams/valorant.png', 'A equipe de Valorant da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.', 1, 5, 20),
	(3, 'League of Legends', '/images/teams/lol.png', 'A equipe de League of Legends da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.', 1, 5, 5),
	(4, 'Rocket League', '/images/teams/rocketleague.png', 'A equipe de Rocket League da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.', 1, 3, 3),
	(5, 'Rainbow Six Siege', '/images/teams/rainbow6.png', 'A equipe de Rainbow Six Siege da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.', 1, 5, 3),
	(6, 'PUBG', '/images/teams/pubg.png', 'A equipe de PUBG da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.', 1, 4, 3);

-- Dumping structure for table furia_fan.GamePreference
CREATE TABLE IF NOT EXISTS `GamePreference` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `GamePreference_userId_fkey` (`userId`),
  CONSTRAINT `GamePreference_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.GamePreference: ~0 rows (approximately)
INSERT INTO `GamePreference` (`id`, `name`, `userId`) VALUES
	(1, 'counter-strike-2', 1),
	(2, 'valorant', 1),
	(3, 'CS:GO', 2),
	(4, 'Valorant', 2),
	(5, 'League of Legends', 2),
	(6, 'CS:GO', 2),
	(7, 'Valorant', 2),
	(8, 'League of Legends', 2);

-- Dumping structure for table furia_fan.Player
CREATE TABLE IF NOT EXISTS `Player` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teamId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Player_teamId_fkey` (`teamId`),
  CONSTRAINT `Player_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Player: ~0 rows (approximately)
INSERT INTO `Player` (`id`, `name`, `role`, `image`, `teamId`) VALUES
	(1, 'KSCERATO', 'Player', '/images/players/kscerato.png', 1),
	(2, 'yuurih', 'Player', '/images/players/yuurih.png', 1),
	(3, 'FalleN', 'Player', '/images/players/falleN.png', 1),
	(4, 'Molodoy', 'Player', '/images/players/molodoy.png', 1),
	(5, 'Yekindar', 'Player', '/images/players/yekindar.png', 1),
	(6, 'sidde', 'Coach', '/images/players/sidde.png', 1),
	(7, 'skullz', 'Inactive Player', '/images/players/skullz.png', 1),
	(8, 'chelo', 'Inactive Player', '/images/players/chelo.png', 1),
	(9, 'raafa', 'Player', '/images/players/raafa.png', 2),
	(10, 'heat', 'Player', '/images/players/heat.png', 2),
	(11, 'havoc', 'Player', '/images/players/havoc.png', 2),
	(12, 'khalil', 'Player', '/images/players/khalil.png', 2),
	(13, 'pyze', 'Player', '/images/players/pyze.png', 2),
	(14, 'mwzera', 'Inactive Player', '/images/players/mwzera.png', 2),
	(15, 'peu', 'Coach', '/images/players/peu.png', 2),
	(16, 'lukzera', 'Assistant Coach', '/images/players/lukzera.png', 2),
	(17, 'Guigo', 'Player', '/images/players/guigo.png', 3),
	(18, 'Tatu', 'Player', '/images/players/tatu.png', 3),
	(19, 'Tutsz', 'Player', '/images/players/tutsz.png', 3),
	(20, 'Ayu', 'Player', '/images/players/ayu.png', 3),
	(21, 'JoJo', 'Player', '/images/players/jojo.png', 3),
	(22, 'Thinkcard', 'Coach', '/images/players/Thinkcard.png', 3),
	(23, 'yANXNZ', 'Player', '/images/players/yANXNZ.png', 4),
	(24, 'Lost', 'Player', '/images/players/lostt.png', 4),
	(25, 'DRUFINHO', 'Player', '/images/players/drufinho.png', 4),
	(26, 'STL', 'Coach', '/images/players/stl.png', 4),
	(27, 'FelipoX', 'Player', '/images/players/felipox.png', 5),
	(28, 'HerdsZ', 'Player', '/images/players/herdsz.png', 5),
	(29, 'Jv92', 'Player', '/images/players/jv92.png', 5),
	(30, 'Kheyze', 'Player', '/images/players/kheyze.png', 5),
	(31, 'Nade', 'Player', '/images/players/nade.png', 5),
	(32, 'igoorctg', 'Coach', '/images/players/igoorctg.png', 5),
	(33, 'guizeraa', 'Player', '/images/players/guizeraa.png', 6),
	(34, 'haven', 'Player', '/images/players/haven.png', 6),
	(35, 'possa', 'Player', '/images/players/possa.png', 6),
	(36, 'zkrakeN', 'Player', '/images/players/zkraken.png', 6),
	(37, 'rds149', 'Coach', '/images/players/rds149.png', 6);

-- Dumping structure for table furia_fan.Purchase
CREATE TABLE IF NOT EXISTS `Purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Purchase_userId_fkey` (`userId`),
  CONSTRAINT `Purchase_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Purchase: ~0 rows (approximately)
INSERT INTO `Purchase` (`id`, `name`, `userId`) VALUES
	(1, 'furia-jersey', 1),
	(2, 'Team Jerseys', 2),
	(3, 'Game Skins', 2),
	(4, 'Team Jerseys', 2),
	(5, 'Game Skins', 2);

-- Dumping structure for table furia_fan.Shop
CREATE TABLE IF NOT EXISTS `Shop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `oldPrice` decimal(10,2) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `ratingCount` int DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tag` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `availability` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productLink` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Shop: ~0 rows (approximately)
INSERT INTO `Shop` (`id`, `title`, `category`, `price`, `oldPrice`, `discount`, `rating`, `ratingCount`, `image`, `tag`, `availability`, `productLink`) VALUES
	(1, 'Camiseta Furia Oficial 24 Preta', 'Apparel', 259.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-oficial-24-preta-150177/336897-7.jpg?w=468&h=468&v=202502121640', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-oficial-24-preta-150177'),
	(2, 'Camiseta Furia | Adidas Preta', 'Apparel', 299.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-adidas-preta-150263/337479-1.jpg?w=468&h=468&v=202503281012', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-adidas-preta-150263'),
	(3, 'Camiseta Oficial Furia | Adidas Preta', 'Apparel', 359.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oficial-furia-adidas-preta-150265/337491-1.jpg?w=468&h=468&v=202503281009', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oficial-furia-adidas-preta-150265'),
	(4, 'Camiseta Oversized Furia Ultras Preta', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-ultras-preta-150262/337472-1.jpg?w=468&h=468&v=202502241651', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-ultras-preta-150262'),
	(5, 'Camiseta Oversized Furia x Zor Preta Estonada', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-x-zor-preta-estonada-150241/337326-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-x-zor-preta-estonada-150241'),
	(6, 'Camiseta Furia x Zor Preta', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-zor-preta-150240/337319-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-zor-preta-150240'),
	(7, 'Camiseta Oversized Furia x Zor Woodhorse Marrom', 'Apparel', 149.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-x-zor-woodhorse-marrom-150243/337340-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-x-zor-woodhorse-marrom-150243'),
	(8, 'Camiseta Oversized Furia x Zor Woodhorse Preta', 'Apparel', 149.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-x-zor-woodhorse-preta-150244/337347-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-x-zor-woodhorse-preta-150244'),
	(9, 'Moletom Oversized Furia x Zor Chumbo', 'Apparel', 369.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-oversized-furia-x-zor-chumbo-150247/337368-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-oversized-furia-x-zor-chumbo-150247'),
	(10, 'Camiseta Furia x Zor Branca', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-zor-branca-150239/337312-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-zor-branca-150239'),
	(11, 'Moletom Polo Furia x Zor Preto', 'Apparel', 299.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-polo-furia-x-zor-preto-150248/337375-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-polo-furia-x-zor-preto-150248'),
	(12, 'Camiseta Furia Future is Black Sankofa Amarela', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-future-is-black-sankofa-amarela-150147/336687-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-future-is-black-sankofa-amarela-150147'),
	(13, 'Camiseta Furia Future is Black Sankofa Preta', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-future-is-black-sankofa-preta-150148/336694-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-future-is-black-sankofa-preta-150148'),
	(14, 'Jaqueta College My Hero Academia x Furia Azul', 'Apparel', 499.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/jaqueta-college-my-hero-academia-x-furia-azul-150230/337255-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/jaqueta-college-my-hero-academia-x-furia-azul-150230'),
	(15, 'Camiseta My Hero Academia x Furia Izuku Midorya Branca', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-my-hero-academia-x-furia-izuku-midorya-branca-150225/337220-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-my-hero-academia-x-furia-izuku-midorya-branca-150225'),
	(16, 'Jaqueta My Hero Academia x Furia Izuku Midorya Verde', 'Apparel', 319.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/jaqueta-my-hero-academia-x-furia-izuku-midorya-verde-150231/337262-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/jaqueta-my-hero-academia-x-furia-izuku-midorya-verde-150231'),
	(17, 'Camiseta My Hero Academia x Furia Shoto Azul', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-my-hero-academia-x-furia-shoto-azul-150226/337227-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-my-hero-academia-x-furia-shoto-azul-150226'),
	(18, 'Calu00e7a Furia x Zor Preta', 'Apparel', 349.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-furia-x-zor-preta-150236/337291-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-furia-x-zor-preta-150236'),
	(19, 'Moletom My Hero Academia x Furia Bakugo Preto', 'Apparel', 369.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-my-hero-academia-x-furia-bakugo-preto-150232/337269-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-my-hero-academia-x-furia-bakugo-preto-150232'),
	(20, 'Camiseta Furia Future is Black Preta', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-future-is-black-preta-150146/336680-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-future-is-black-preta-150146'),
	(21, 'Moletom Careca Furia Future is Black Preto', 'Apparel', 239.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-future-is-black-preto-150151/336715-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-future-is-black-preto-150151'),
	(22, 'Camiseta Oversized Furia x Zor Verde Estonada', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-x-zor-verde-estonada-150242/337333-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-x-zor-verde-estonada-150242'),
	(23, 'Camiseta My Hero Academia x Furia Bakugu Verde Militar', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-my-hero-academia-x-furia-bakugu-verde-militar-150224/337213-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-my-hero-academia-x-furia-bakugu-verde-militar-150224'),
	(24, 'Calu00e7a My Hero Academia x Furia Preta', 'Apparel', 249.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-my-hero-academia-x-furia-preta-150222/337199-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-my-hero-academia-x-furia-preta-150222'),
	(25, 'Camiseta Furia Classic Chumbo', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-chumbo-150182/337171-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-classic-chumbo-150182'),
	(26, 'Camiseta Furia x Champion Mascot Hoodie Off White', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-mascot-hoodie-off-white-150169/336841-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-champion-mascot-hoodie-off-white-150169'),
	(27, 'Jaqueta Furia x Zor Preta', 'Apparel', 399.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/jaqueta-furia-x-zor-preta-150245/337354-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/jaqueta-furia-x-zor-preta-150245'),
	(28, 'Moletom Careca Furia Classic Bege', 'Apparel', 299.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-classic-bege-150187/336968-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-classic-bege-150187'),
	(29, 'Shorts My Hero Academia x Furia Preto', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/shorts-my-hero-academia-x-furia-preto-150233/337276-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/shorts-my-hero-academia-x-furia-preto-150233'),
	(30, 'Camiseta My Hero Academia x Furia U.A Branca', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-my-hero-academia-x-furia-u-a-branca-150228/337241-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-my-hero-academia-x-furia-u-a-branca-150228'),
	(31, 'Camiseta Infantil Furia | Adidas Preta', 'Apparel', 259.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-infantil-furia-adidas-preta-150264/337486-2.jpg?w=468&h=468&v=202503281015', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-infantil-furia-adidas-preta-150264'),
	(32, 'Calu00e7a Furia Future Is Black Preta', 'Apparel', 279.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-furia-future-is-black-preta-150143/336659-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-furia-future-is-black-preta-150143'),
	(33, 'Camiseta Furia Clutch Branca', 'Apparel', 83.40, 139.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-clutch-branca-150194/336994-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-clutch-branca-150194'),
	(34, 'Camiseta Oversized Furia Harder To Kill Off White', 'Apparel', 219.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-harder-to-kill-off-white-150159/336771-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-harder-to-kill-off-white-150159'),
	(35, 'Camiseta Furia Future is Black Pantera Amarela', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-future-is-black-pantera-amarela-150144/336666-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-future-is-black-pantera-amarela-150144'),
	(36, 'Camiseta Furia Classic 2 Cinza Mescla', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-2-cinza-mescla-150179/336914-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-classic-2-cinza-mescla-150179'),
	(37, 'Camiseta Furia x Champion College Off White', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-college-off-white-150165/336813-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-champion-college-off-white-150165'),
	(38, 'Cropped Furia Clutch Branco', 'Apparel', 71.40, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/cropped-furia-clutch-branco-150196/337008-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/cropped-furia-clutch-branco-150196'),
	(39, 'Camiseta Furia x Champion Lockup Off White', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-lockup-off-white-150167/336827-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-champion-lockup-off-white-150167'),
	(40, 'Camiseta My Hero Academia x Furia U.A Azul', 'Apparel', 129.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-my-hero-academia-x-furia-u-a-azul-150227/337234-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-my-hero-academia-x-furia-u-a-azul-150227'),
	(41, 'Calu00e7a Jogger Furia Preta', 'Apparel', 249.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-jogger-furia-preta-150198/337022-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-jogger-furia-preta-150198'),
	(42, 'Camiseta Furia Classic Preta', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-preta-150183/336942-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-classic-preta-150183'),
	(43, 'Moletom Oversized Furia Future is Black Sankofa Preto', 'Apparel', 369.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-oversized-furia-future-is-black-sankofa-preto-150152/336722-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-oversized-furia-future-is-black-sankofa-preto-150152'),
	(44, 'Bonu00e9 Furia Preto', 'Apparel', 119.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-furia-preto-150142/336658-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/bone-furia-preto-150142'),
	(45, 'Moletom Furia Spray It Preto', 'Apparel', 275.40, 459.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-furia-spray-it-preto-150199/337029-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-furia-spray-it-preto-150199'),
	(46, 'Camiseta Furia Clutch Roxa', 'Apparel', 83.40, 139.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-clutch-roxa-150195/337001-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-clutch-roxa-150195'),
	(47, 'Camiseta Furia x Champion Mascot Hoodie Preta', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-mascot-hoodie-preta-150170/336848-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-champion-mascot-hoodie-preta-150170'),
	(48, 'Bonu00e9 Furia Furioso Preto', 'Apparel', 119.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-furia-furioso-preto-150141/336657-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/bone-furia-furioso-preto-150141'),
	(49, 'Camiseta Furia Classic 2 Azul Marinho', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-2-azul-marinho-150178/336907-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-classic-2-azul-marinho-150178'),
	(50, 'Calu00e7a Moletom Furia x Zor Preta', 'Apparel', 199.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-moletom-furia-x-zor-preta-150238/337305-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-moletom-furia-x-zor-preta-150238'),
	(51, 'Moletom Furia x Batman 85 Long Live The Bat Preto', 'Apparel', 229.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-furia-x-batman-85-long-live-the-bat-preto-150254/337415-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-furia-x-batman-85-long-live-the-bat-preto-150254'),
	(52, 'Calu00e7a Furia x Zor Verde Militar', 'Apparel', 349.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-furia-x-zor-verde-militar-150237/337298-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-furia-x-zor-verde-militar-150237'),
	(53, 'Meia Furia Magic Panthera Preta', 'Apparel', 53.40, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/meia-furia-magic-panthera-preta-150213/337127-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/meia-furia-magic-panthera-preta-150213'),
	(54, 'Camiseta Oversized Furia Harder To Kill Marrom', 'Apparel', 219.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-harder-to-kill-marrom-150158/336764-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-harder-to-kill-marrom-150158'),
	(55, 'Bonu00e9 Furia Furiosa Preto', 'Apparel', 119.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-furia-furiosa-preto-150140/336656-3.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/bone-furia-furiosa-preto-150140'),
	(56, 'Shorts My Hero Academia x Furia Verde', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/shorts-my-hero-academia-x-furia-verde-150234/337283-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/shorts-my-hero-academia-x-furia-verde-150234'),
	(57, 'Camiseta Oversized My Hero Academia x Furia Tomura Roxa', 'Apparel', 149.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-my-hero-academia-x-furia-tomura-roxa-150229/337248-2.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-my-hero-academia-x-furia-tomura-roxa-150229'),
	(58, 'Calu00e7a College My Hero Academia x Furia Azul', 'Apparel', 249.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-college-my-hero-academia-x-furia-azul-150221/337192-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-college-my-hero-academia-x-furia-azul-150221'),
	(59, 'Moletom Careca Furia x Champion Mascot Off White', 'Apparel', 299.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-x-champion-mascot-off-white-150173/336869-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-x-champion-mascot-off-white-150173'),
	(60, 'Camiseta Oversized Furia Harder To Kill Cinza', 'Apparel', 219.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-harder-to-kill-cinza-150157/336757-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-oversized-furia-harder-to-kill-cinza-150157'),
	(61, 'Jaqueta Furia x Zor Verde Militar', 'Apparel', 399.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/jaqueta-furia-x-zor-verde-militar-150246/337361-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/jaqueta-furia-x-zor-verde-militar-150246'),
	(62, 'Moletom Careca Furia Classic 2 Preto', 'Apparel', 299.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-classic-2-preto-150186/337164-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-classic-2-preto-150186'),
	(63, 'Moletom Cropped Furia Clutch Bege', 'Apparel', 179.40, 299.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-cropped-furia-clutch-bege-150197/337015-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-cropped-furia-clutch-bege-150197'),
	(64, 'Camiseta Furia Hard To Love Off White', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-hard-to-love-off-white-150154/336736-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-hard-to-love-off-white-150154'),
	(65, 'Bucket Furia x New Era Preto e Branco', 'Apparel', 309.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bucket-furia-x-new-era-preto-e-branco-150189/336982-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/bucket-furia-x-new-era-preto-e-branco-150189'),
	(66, 'Moletom Oversized Furia Harder To Kill Preto', 'Apparel', 459.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-oversized-furia-harder-to-kill-preto-150164/336806-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-oversized-furia-harder-to-kill-preto-150164'),
	(67, 'Moletom Oversized Furia Harder To Kill Off White', 'Apparel', 459.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-oversized-furia-harder-to-kill-off-white-150163/336799-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-oversized-furia-harder-to-kill-off-white-150163'),
	(68, 'Moletom Manga Dupla My Hero Academia x Furia Verde', 'Apparel', 369.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-manga-dupla-my-hero-academia-x-furia-verde-150220/337185-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-manga-dupla-my-hero-academia-x-furia-verde-150220'),
	(69, 'Camisa Furia Magic Panthera Laranja', 'Apparel', 239.40, 399.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camisa-furia-magic-panthera-laranja-150210/337106-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camisa-furia-magic-panthera-laranja-150210'),
	(70, 'Moletom Careca Furia Harder To Kill Marrom', 'Apparel', 379.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-harder-to-kill-marrom-150162/336792-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-harder-to-kill-marrom-150162'),
	(71, 'Moletom Furia Classic 2 Cinza Mescla', 'Apparel', 319.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-furia-classic-2-cinza-mescla-150188/336977-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-furia-classic-2-cinza-mescla-150188'),
	(72, 'Camiseta Furia x Champion Mascot Preta', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-mascot-preta-150172/336862-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-champion-mascot-preta-150172'),
	(73, 'Camiseta Furia x Champion Mascot Off White', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-mascot-off-white-150171/336855-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-x-champion-mascot-off-white-150171'),
	(74, 'Camiseta Furia Harder To Kill Azul Petru00f3leo', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-harder-to-kill-azul-petroleo-150155/336743-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-harder-to-kill-azul-petroleo-150155'),
	(75, 'Camiseta Furia Hard To Love Laranja', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-hard-to-love-laranja-150153/336729-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-hard-to-love-laranja-150153'),
	(76, 'Calu00e7a My Hero Academia x Furia Tomura Preta', 'Apparel', 349.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-my-hero-academia-x-furia-tomura-preta-150223/337206-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-my-hero-academia-x-furia-tomura-preta-150223'),
	(77, 'Bonu00e9 9Twenty Furia x New Era Preto e Branco', 'Apparel', 199.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-9twenty-furia-x-new-era-preto-e-branco-150192/336987-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/bone-9twenty-furia-x-new-era-preto-e-branco-150192'),
	(78, 'Moletom Careca Furia Classic 2 Cinza Mescla', 'Apparel', 299.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-classic-2-cinza-mescla-150185/336956-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-classic-2-cinza-mescla-150185'),
	(79, 'Calu00e7a Moletom Furia Magic Panthera Preta', 'Apparel', 209.40, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-moletom-furia-magic-panthera-preta-150206/337078-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-moletom-furia-magic-panthera-preta-150206'),
	(80, 'Moletom Furia x Champion College Preto', 'Apparel', 499.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-furia-x-champion-college-preto-150174/336876-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-furia-x-champion-college-preto-150174'),
	(81, 'Shorts Furia Magic Panthera Laranja', 'Apparel', 161.40, 269.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/shorts-furia-magic-panthera-laranja-150218/337150-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/shorts-furia-magic-panthera-laranja-150218'),
	(82, 'Bonu00e9 9Twenty Furia x New Era Branco e Preto', 'Apparel', 199.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-9twenty-furia-x-new-era-branco-e-preto-150190/336985-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/bone-9twenty-furia-x-new-era-branco-e-preto-150190'),
	(83, 'Cropped Furia Future is Black Preto', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/cropped-furia-future-is-black-preto-150149/336701-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/cropped-furia-future-is-black-preto-150149'),
	(84, 'Cropped Furia Hard To Love Preto', 'Apparel', 159.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/cropped-furia-hard-to-love-preto-150160/336778-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/cropped-furia-hard-to-love-preto-150160'),
	(85, 'Sacochila Furia Preta', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/sacochila-furia-preta-150267/337499-1.jpg?w=468&h=468&v=202504101318', NULL, 'In Stock', 'https://www.furia.gg/produto/sacochila-furia-preta-150267'),
	(86, 'Sacochila Furia FC Preta', 'Apparel', 179.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/sacochila-furia-fc-preta-150266/337498-1.jpg?w=468&h=468&v=202504101319', NULL, 'In Stock', 'https://www.furia.gg/produto/sacochila-furia-fc-preta-150266'),
	(87, 'Moletom Careca Furia Magic Panthera Azul', 'Apparel', 197.40, 329.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-magic-panthera-azul-150217/337143-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-magic-panthera-azul-150217'),
	(88, 'Shorts Furia Magic Panthera Preto', 'Apparel', 161.40, 269.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/shorts-furia-magic-panthera-preto-150208/337092-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/shorts-furia-magic-panthera-preto-150208'),
	(89, 'Calu00e7a Moletom Furia Magic Panthera Laranja', 'Apparel', 209.40, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/calca-moletom-furia-magic-panthera-laranja-150204/337064-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/calca-moletom-furia-magic-panthera-laranja-150204'),
	(90, 'Moletom Careca Furia Magic Panthera Laranja', 'Apparel', 197.40, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-magic-panthera-laranja-150203/337057-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-magic-panthera-laranja-150203'),
	(91, 'Camiseta Furia Classic Bege', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-bege-150181/336926-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/camiseta-furia-classic-bege-150181'),
	(92, 'Moletom Careca Furia Hard To Love Azul Petru00f3leo', 'Apparel', 379.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-careca-furia-hard-to-love-azul-petroleo-150161/336785-1.jpg?w=468&h=468&v=no-value', NULL, 'In Stock', 'https://www.furia.gg/produto/moletom-careca-furia-hard-to-love-azul-petroleo-150161'),
	(93, 'Camiseta Furia Future is Black Pantera Preta', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-future-is-black-pantera-preta-150145/336673-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-future-is-black-pantera-preta-150145'),
	(94, 'Camiseta Furia x Champion College Preta', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-college-preta-150166/336820-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-x-champion-college-preta-150166'),
	(95, 'Camiseta Furia Classic 2 Preta', 'Apparel', 139.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-2-preta-150180/336921-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-classic-2-preta-150180'),
	(96, 'Moletom Furia x Batman 85 Shadows Preto', 'Apparel', 229.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-furia-x-batman-85-shadows-preto-150255/337423-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/moletom-furia-x-batman-85-shadows-preto-150255'),
	(97, 'Moletom Oversized Furia Spray It Preto', 'Apparel', 209.40, 349.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-oversized-furia-spray-it-preto-150200/337036-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/moletom-oversized-furia-spray-it-preto-150200'),
	(98, 'Bonu00e9 9Forty Trucker Furia x New Era Branco e Preto', 'Apparel', 209.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-9forty-trucker-furia-x-new-era-branco-e-preto-150191/336986-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/bone-9forty-trucker-furia-x-new-era-branco-e-preto-150191'),
	(99, 'Moletom Furia x Champion Mascot Hoodie Preto', 'Apparel', 399.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-furia-x-champion-mascot-hoodie-preto-150176/336890-6.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/moletom-furia-x-champion-mascot-hoodie-preto-150176'),
	(100, 'Camiseta Oversized Furia Hard To Love Preta', 'Apparel', 219.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-oversized-furia-hard-to-love-preta-150156/336750-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-oversized-furia-hard-to-love-preta-150156'),
	(101, 'Camiseta Furia x Batman 85 Shadows Preta', 'Apparel', 107.91, 119.90, 10, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-batman-85-shadows-preta-150253/337407-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-x-batman-85-shadows-preta-150253'),
	(102, 'Camiseta Furia x Champion Lockup Preta', 'Apparel', 179.99, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-champion-lockup-preta-150168/336834-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-x-champion-lockup-preta-150168'),
	(103, 'Camiseta Furia x Batman 85 Long Live The Bat Chumbo', 'Apparel', 107.91, 119.90, 10, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-batman-85-long-live-the-bat-chumbo-150252/337399-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-x-batman-85-long-live-the-bat-chumbo-150252'),
	(104, 'Mochila Furia Preta', 'Apparel', 219.00, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/mochila-furia-preta-150216/337142-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/mochila-furia-preta-150216'),
	(105, 'Moletom Oversized Furia Spray It Rosa', 'Apparel', 209.40, 349.00, 40, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/moletom-oversized-furia-spray-it-rosa-150201/337043-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/moletom-oversized-furia-spray-it-rosa-150201'),
	(106, 'Camiseta Furia x Batman 85 Gotham City Preta', 'Apparel', 119.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/camiseta-furia-x-batman-85-gotham-city-preta-150250/337383-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/camiseta-furia-x-batman-85-gotham-city-preta-150250'),
	(107, 'Bonu00e9 59Fifty Furia x New Era Preto e Branco', 'Apparel', 229.90, NULL, NULL, NULL, NULL, 'https://furiagg.fbitsstatic.net/img/p/bone-59fifty-furia-x-new-era-preto-e-branco-150193/336989-1.jpg?w=468&h=468&v=no-value', NULL, 'Sold Out', 'https://www.furia.gg/produto/bone-59fifty-furia-x-new-era-preto-e-branco-150193');

-- Dumping structure for table furia_fan.SocialMedia
CREATE TABLE IF NOT EXISTS `SocialMedia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `twitch` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discord` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HLTV` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SocialMedia_userId_key` (`userId`),
  CONSTRAINT `SocialMedia_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.SocialMedia: ~0 rows (approximately)
INSERT INTO `SocialMedia` (`id`, `twitch`, `discord`, `HLTV`, `userId`) VALUES
	(1, 'johndoe', 'johndoe', 'johndoe', 2);

-- Dumping structure for table furia_fan.Stat
CREATE TABLE IF NOT EXISTS `Stat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` int NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `teamId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Stat_teamId_fkey` (`teamId`),
  CONSTRAINT `Stat_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Stat: ~0 rows (approximately)
INSERT INTO `Stat` (`id`, `value`, `label`, `teamId`) VALUES
	(1, 5, 'Titulos', 1),
	(2, 15, 'Top 3', 1),
	(3, 30, 'Top 5', 1),
	(4, 3, 'Titulos', 2),
	(5, 10, 'Top 3', 2),
	(6, 20, 'Top 5', 2),
	(7, 1, 'Titulos', 3),
	(8, 3, 'Top 3', 3),
	(9, 5, 'Top 5', 3),
	(10, 1, 'Titulos', 4),
	(11, 3, 'Top 3', 4),
	(12, 1, 'Titulos', 5),
	(13, 3, 'Top 3', 5),
	(14, 1, 'Titulos', 6),
	(15, 3, 'Top 3', 6);

-- Dumping structure for table furia_fan.Team
CREATE TABLE IF NOT EXISTS `Team` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.Team: ~0 rows (approximately)
INSERT INTO `Team` (`id`, `name`, `image`, `description`) VALUES
	(1, 'CS:GO', '/images/teams/csgo.png', 'A equipe de CS:GO da FURIA u00e9 uma das mais bem-sucedidas do Brasil, conhecida por seu estilo agressivo e jogadas inovadoras.'),
	(2, 'Valorant', '/images/teams/valorant.png', 'A equipe de Valorant da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.'),
	(3, 'League of Legends', '/images/teams/lol.png', 'A equipe de League of Legends da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.'),
	(4, 'Rocket League', '/images/teams/rocketleague.png', 'A equipe de Rocket League da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.'),
	(5, 'Rainbow Six Siege', '/images/teams/rainbow6.png', 'A equipe de Rainbow Six Siege da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.'),
	(6, 'PUBG', '/images/teams/pubg.png', 'A equipe de PUBG da FURIA representa o Brasil com excelu00eancia, demonstrando um jogo tu00e1tico e preciso.');

-- Dumping structure for table furia_fan.User
CREATE TABLE IF NOT EXISTS `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipCode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthDate` datetime(3) NOT NULL,
  `profileImage` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `platform` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `playFrequency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_cpf_key` (`cpf`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.User: ~0 rows (approximately)
INSERT INTO `User` (`id`, `cpf`, `email`, `fullName`, `username`, `password`, `address`, `city`, `state`, `zipCode`, `phoneNumber`, `birthDate`, `profileImage`, `platform`, `playFrequency`) VALUES
	(1, '427.752.258-02', 'giantcard5.dev@outlook.com', 'Renato Soares', 'giantcard5', '12345678', 'Alameda', 'SP', 'SP', '00000-000', '(00) 00000-0000', '2006-02-27 00:00:00.000', NULL, 'pc', 'daily'),
	(2, '123.456.789-00', 'john.doe@example.com', 'John Doe', 'johndoe', 'hashedPassword1234', '123 Main Street', 'São Paulo', 'SP', '01234-567', '(11) 12345-6789', '1990-01-01 00:00:00.000', 'https://example.com/profile.jpg', 'PC', 'Daily');

-- Dumping structure for table furia_fan.UserSettings
CREATE TABLE IF NOT EXISTS `UserSettings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cpf` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `emailNotifications` tinyint(1) NOT NULL,
  `pushNotifications` tinyint(1) NOT NULL,
  `marketingEmails` tinyint(1) NOT NULL,
  `eventReminders` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserSettings_cpf_key` (`cpf`),
  CONSTRAINT `UserSettings_cpf_fkey` FOREIGN KEY (`cpf`) REFERENCES `User` (`cpf`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table furia_fan.UserSettings: ~0 rows (approximately)
INSERT INTO `UserSettings` (`id`, `cpf`, `language`, `emailNotifications`, `pushNotifications`, `marketingEmails`, `eventReminders`) VALUES
	(1, '427.752.258-02', 'pt-BR', 1, 1, 1, 1),
	(2, '123.456.789-00', 'en', 0, 0, 0, 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;