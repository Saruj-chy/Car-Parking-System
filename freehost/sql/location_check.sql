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
-- Table structure for table `location_check`
--

CREATE TABLE `location_check` (
  `location_id` int(11) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location_check`
--

INSERT INTO `location_check` (`location_id`, `latitude`, `longitude`, `title`, `description`) VALUES
(1, '22.357878', '91.842455', 'Location 01', 'its the\'main point of location'),
(2, '22.3557585', '91.8419251', 'Location 02', 'It\'s your location'),
(3, '22.351446', '91.838292', 'Location 03', 'It placed in nearby your home'),
(4, '23.7480806', '90.3465226', 'Location 04', 'my house location'),
(5, '23.746809478283353', '90.3455385583508', 'location 05', 'my moszid location'),
(6, '23.74731459337609', '90.34851816133617', 'location 06', 'my resturant location'),
(7, '33.981955535845955', '-118.2250872282821', 'Hungtington Park', 'it\'s located on USA'),
(8, '34.0518025563629', '-118.24248374836915', 'Los Angles', 'it\'s located on california, USA'),
(9, '32.4890889651168', '3.694087457804456', 'Ghardia', 'this place located in algeria.'),
(10, '34.162010480658395', '0.06673225993997947', 'mairie al khaiter', 'This place is located on Krader, Algeria'),
(11, '33.924668215754465', '-0.02626060154391861', 'al-brod', 'this place located in, Bougtob algeria.'),
(12, '33.96260322255747', '0.06968563231698821', 'bogtob', 'this place located in, Bougtob algeria.'),
(13, '33.988335204449186', '0.013751019385310616', 'N6 1', 'This place is located on Krader, Algeria'),
(14, '33.98156438533061', '0.029674011387758974', 'N6 point 2', 'this place located in, Bougtob algeria.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `location_check`
--
ALTER TABLE `location_check`
  ADD PRIMARY KEY (`location_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `location_check`
--
ALTER TABLE `location_check`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
