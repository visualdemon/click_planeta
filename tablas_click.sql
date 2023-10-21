-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-10-2023 a las 00:29:33
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laravel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `click01`
--

CREATE TABLE `click01` (
  `id` int(11) NOT NULL,
  `detalle` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `click01`
--

INSERT INTO `click01` (`id`, `detalle`) VALUES
(1, 'Gmail'),
(2, 'Microsoft'),
(3, 'iCloud'),
(4, 'Amazon'),
(5, 'Xiaomi'),
(6, 'Huawei'),
(7, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `click02`
--

CREATE TABLE `click02` (
  `id` int(11) NOT NULL,
  `detalle` varchar(50) NOT NULL,
  `siglas` varchar(10) NOT NULL,
  `dividir` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `click02`
--

INSERT INTO `click02` (`id`, `detalle`, `siglas`, `dividir`) VALUES
(1, 'GIGABYTES', 'GB', 1),
(2, 'MEGABYTES', 'MG', 1000),
(3, 'KILOBYTES', 'KB', 1000000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `click03`
--

CREATE TABLE `click03` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_click01` int(11) NOT NULL,
  `id_click02` int(11) NOT NULL,
  `c_click01` int(11) NOT NULL,
  `c_click02` int(11) NOT NULL,
  `cg_click02` decimal(15,6) NOT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `click03`
--

INSERT INTO `click03` (`id`, `id_user`, `id_click01`, `id_click02`, `c_click01`, `c_click02`, `cg_click02`, `fecha`) VALUES
(18, 1, 2, 2, 2, 200, 0.200000, '2023-09-02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `click04`
--

CREATE TABLE `click04` (
  `id` int(11) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `click04`
--

INSERT INTO `click04` (`id`, `detalle`, `total`) VALUES
(1, 'INSTITUCIÓN PRUEBA', 0),
(2, 'INSTITUCIÓN PRUEBA 2', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `click01`
--
ALTER TABLE `click01`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `click02`
--
ALTER TABLE `click02`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `click03`
--
ALTER TABLE `click03`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_click01` (`id_click01`),
  ADD KEY `id_click02` (`id_click02`);

--
-- Indices de la tabla `click04`
--
ALTER TABLE `click04`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `click01`
--
ALTER TABLE `click01`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `click02`
--
ALTER TABLE `click02`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `click03`
--
ALTER TABLE `click03`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `click04`
--
ALTER TABLE `click04`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `click03`
--
ALTER TABLE `click03`
  ADD CONSTRAINT `id_click01` FOREIGN KEY (`id_click01`) REFERENCES `click01` (`id`),
  ADD CONSTRAINT `id_click02` FOREIGN KEY (`id_click02`) REFERENCES `click02` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
