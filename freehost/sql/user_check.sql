-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2021 at 08:39 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id15609866_snake`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_check`
--

CREATE TABLE `user_check` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `a_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_check`
--

INSERT INTO `user_check` (`id`, `name`, `username`, `password`, `email`, `a_number`) VALUES
(26, 'User', 'User123', '12345678', 'user@gmail.com', 1),
(28, 'Sarose', 'Sd', '12345678', 'saruj@gmail.com', 1516174937),
(29, 'Rofiqul Islam', 'Rofiqul', '123456', 'rofiquldk1@gmail.com', 1866332212),
(30, 'Rofiqul Islam', 'Rofiqul', '123456', 'rofiquldk1@gmail.com', 1866332212),
(31, 'গগ', 'বগ', '১২৩৪৫৬', 'আব', 0),
(32, 'Bulbul Ahmed ', 'Bulbul ', 'Atiqur22', 'bulbul.cse.cu@gmail.com ', 1712907724),
(33, '', '', '', '', 0),
(34, 'Atiqur Rahman', 'bulbul22', 'atiqur22', 'bulbul.cse.cu@gmail.com', 1712907724),
(35, 'Xbd', 'Gee', 'Hrrhbdn', 'Bdb', 0),
(36, 'Atiqur Rahman ', 'At', '12345678', 'Bulbul.cse.cu@gmail.com ', 1712907724),
(37, 'user2', 'user2', '12345678', 'user2@gmail.com', 1516174938);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_check`
--
ALTER TABLE `user_check`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_check`
--
ALTER TABLE `user_check`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
