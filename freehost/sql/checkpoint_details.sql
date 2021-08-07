-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2021 at 08:36 AM
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
-- Table structure for table `checkpoint_details`
--

CREATE TABLE `checkpoint_details` (
  `checkpoint_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `free` int(11) NOT NULL,
  `booked` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `checkpoint_details`
--

INSERT INTO `checkpoint_details` (`checkpoint_id`, `location_id`, `total`, `free`, `booked`) VALUES
(1, 1, 100, 65, 35);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checkpoint_details`
--
ALTER TABLE `checkpoint_details`
  ADD PRIMARY KEY (`checkpoint_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checkpoint_details`
--
ALTER TABLE `checkpoint_details`
  MODIFY `checkpoint_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
