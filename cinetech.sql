-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 15, 2024 at 06:03 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinetech`
--

-- --------------------------------------------------------

--
-- Table structure for table `tmdb`
--

CREATE TABLE `tmdb` (
  `id` int NOT NULL,
  `idUser` int NOT NULL,
  `idTMDB` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tmdb`
--

INSERT INTO `tmdb` (`id`, `idUser`, `idTMDB`) VALUES
(14, 2, 848538),
(15, 2, 1006540),
(16, 2, 823464),
(17, 2, 969492),
(22, 2, 634492),
(49, 2, 787699),
(50, 2, 787699),
(51, 2, 787699),
(52, 2, 787699),
(53, 2, 787699),
(54, 2, 787699),
(55, 2, 787699),
(56, 2, 787699),
(57, 2, 787699),
(58, 2, 787699),
(59, 2, 787699),
(60, 2, 787699),
(61, 2, 787699),
(62, 2, 787699),
(63, 2, 787699),
(64, 2, 787699),
(65, 2, 787699),
(66, 2, 787699),
(67, 2, 787699),
(68, 2, 787699),
(69, 2, 787699),
(70, 2, 787699),
(71, 2, 787699),
(72, 2, 787699),
(73, 2, 787699),
(74, 2, 787699),
(75, 2, 787699),
(76, 2, 787699),
(77, 2, 787699),
(80, 3, 823464),
(81, 3, 786892);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `pseudo` tinytext COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `pseudo`, `email`, `password`) VALUES
(1, 'dfd', 'dffd@dfd.fd', 'Test123$'),
(2, 'Test', 'test@test.fr', 'Test123$'),
(3, 'toki', 'toki@toki.fr', 'Test1234%');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tmdb`
--
ALTER TABLE `tmdb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tmdb`
--
ALTER TABLE `tmdb`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
