-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 17, 2022 at 10:04 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my-documents`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `documentId` int(11) NOT NULL,
  `title` varchar(256) DEFAULT NULL,
  `content` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`documentId`, `title`, `content`, `created`) VALUES
(21, 'Hej hej', '<h2 style=\"text-align: center;\"><span style=\"color: rgb(45, 194, 107);\">God dag!</span></h2>\n<p>&nbsp;</p>\n<p><span style=\"color: rgb(224, 62, 45);\"><strong>H&auml;r &auml;r ett nytt dokument. <span style=\"color: rgb(53, 152, 219);\">Det &auml;r f&auml;rgglatt :)</span></strong></span></p>', '2022-06-17 21:55:42'),
(22, 'Wow vilket dokument!', '<h1 style=\"text-align: right;\">H&auml;r &auml;r ett till dokument!</h1>\n<p>&nbsp;</p>\n<h3 style=\"text-align: center;\"><span style=\"color: rgb(45, 194, 107);\">Wooooooooow! :)</span></h3>', '2022-06-17 21:56:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`documentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `documentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
