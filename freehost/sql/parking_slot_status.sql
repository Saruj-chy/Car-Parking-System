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
-- Table structure for table `parking_slot_status`
--

CREATE TABLE `parking_slot_status` (
  `slot_status_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL,
  `slot_numb` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `booked_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `parking_slot_status`
--

INSERT INTO `parking_slot_status` (`slot_status_id`, `location_id`, `slot_numb`, `status`, `id`, `booked_time`) VALUES
(44, 3, 27, 'booked', 28, '2021-07-26 20:14:28'),
(49, 3, 14, 'booked', 28, '2021-07-27 11:04:21'),
(50, 1, 1, 'booked', 32, '2021-07-27 11:21:56'),
(51, 3, 15, 'booked', 32, '2021-07-27 11:22:05'),
(53, 3, 6, 'booked', 37, '2021-07-27 11:55:09'),
(54, 3, 19, 'booked', 37, '2021-07-27 11:56:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parking_slot_status`
--
ALTER TABLE `parking_slot_status`
  ADD PRIMARY KEY (`slot_status_id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `parking_slot_status`
--
ALTER TABLE `parking_slot_status`
  MODIFY `slot_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `parking_slot_status`
--
ALTER TABLE `parking_slot_status`
  ADD CONSTRAINT `parking_slot_status_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user_check` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
