-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2021 at 08:37 AM
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
-- Table structure for table `parking_total_slot`
--

CREATE TABLE `parking_total_slot` (
  `total_slot_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `total_slot` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parking_total_slot`
--

INSERT INTO `parking_total_slot` (`total_slot_id`, `location_id`, `total_slot`) VALUES
(1, 1, 30),
(2, 2, 40),
(3, 3, 50),
(4, 4, 60),
(5, 5, 80),
(6, 6, 100),
(7, 7, 40),
(8, 8, 50),
(9, 9, 40),
(10, 10, 80),
(11, 11, 44),
(12, 12, 30),
(13, 13, 20),
(14, 14, 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parking_total_slot`
--
ALTER TABLE `parking_total_slot`
  ADD PRIMARY KEY (`total_slot_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parking_total_slot`
--
ALTER TABLE `parking_total_slot`
  MODIFY `total_slot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
