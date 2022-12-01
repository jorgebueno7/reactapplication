-- MySQL dump 10.13  Distrib 5.7.39, for Linux (x86_64)
--
-- Host: localhost    Database: apirest
-- ------------------------------------------------------
-- Server version	5.7.39-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `localizacion` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `anyo_fundacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Nike','EEUU','Deporte',1976),(2,'Adidas','Inglaterra','Deporte',1986),(3,'Prozis','España','Suplementacion',2006),(4,'HSN','Francia','Suplementacion',2009),(5,'Puma','Portugal','Deporte',2009),(6,'MyProtein','España','Suplementacion',2010),(7,'Gymshark','EEUU','Ropa',2014),(8,'SBD','EEUU','Deporte',2013),(9,'Reebok','Inglaterra','Deporte',1990),(10,'Kappa','Italia','Deporte',1982);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditcards`
--

DROP TABLE IF EXISTS `creditcards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creditcards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` int(11) DEFAULT NULL,
  `nombre_completo` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `CVC` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `numero` (`numero`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditcards`
--

LOCK TABLES `creditcards` WRITE;
/*!40000 ALTER TABLE `creditcards` DISABLE KEYS */;
INSERT INTO `creditcards` VALUES (1,123456789,'Laura Lopez Martinez','2025-06-11',182),(2,987654321,'Pablo Juarez Ruiz','2030-11-26',588),(3,112233449,'Francisco Soler Garcia','2030-10-06',996),(4,998877661,'Sonia Huertas Ortiz','2028-04-14',109),(5,220011987,'David Trillo Franco','2023-07-10',657),(6,654321098,'Maria Plaza Garcia','2031-02-06',777),(7,147258369,'Jorge Sancho Lorca','2028-05-05',761),(8,753986412,'Kevin Nuñez Lorca','2027-03-29',430),(9,564231897,'Nuria Esteve Lorca','2024-09-11',846),(10,698523417,'Gema Indigo Talavera','2026-08-04',907);
/*!40000 ALTER TABLE `creditcards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lineapedido` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,12,'Nada a objetar',1,'Av Maissonave 12'),(2,3,'Fragil',12,'Calle Rafael Asin 5'),(3,9,'Fragil',2,'Calle Hipólito 45'),(4,1,'Entregar al vecino por ausente',1,'Calle Roselló 8'),(5,4,'Nada a objetar',1,'Calle Luengo 11'),(6,46,'Nada a objetar',10,'Calle Paradero 67'),(7,6,'Fragil',2,'Av Paco Garcia 6'),(8,10,'Fragil',1,'Av Madrid s/n'),(9,22,'Nada a objetar',5,'Av de las setas s/n'),(10,16,'Nada a objetar',3,'Calle Rodrigo Perez 21');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Proteina Whey','Prozis','Suplementacion deportiva',36.99),(2,'Proteina Whey','Prozis','Suplementacion deportiva',32.99),(3,'Mochila','Adidas','Complementos',14.99),(4,'Bandas elásticas','Decathlon','Accesorios deportivos',16),(5,'Zapatillas Running','Asics','Material deportivo',84.99),(6,'Creatina','HSN','Suplementacion deportiva',26.99),(7,'Cafeina en cápsulas','Prozis','Suplementacion deportiva',8.99),(8,'Camiseta','Puma','Material deportivo',9.99),(9,'Pantalón largo chándal','Umbro','Material deportivo',14.99),(10,'Aminoácidos esenciales','MyProtein','Suplementación deportiva',17.95);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dni` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'47977662M','Laura','Lopez Martinez',24,'lauloma@gmail.com','$2b$10$tk5EkmZCs2S8u2gyp2tCJunbHJzxMVSplO9ckl4Gm2Vzx5KlB5rFO',722913813,'Av Maissonave 12'),(2,'59040351Y','Pablo','Juarez Ruiz',54,'pajuru@gmail.com','$2b$10$ICdTKFYWQeNSvnNUA2Z4KuwRVF7SWQILamicCG9DK0E34GcB3sqNi',645132098,'Av de las setas s/n'),(3,'11568430L','Francisco','Soler Garcia',30,'pacoso@gmail.com','$2b$10$t54VebvmDkTq4qqQ36R95u4tbLMsGXTDBYG/Do/PfcR0UikKpS65K',651304776,'Calle Rafael Asin 5'),(4,'90513248W','Sonia','Huertas Ortiz',21,'sonihuertas@gmail.com','$2b$10$VU2ctvbjbvZ.OlIkMa7ckeMf7giFfTt2IX49/cgHlRquuKupIPgYO',623014596,'Calle Roselló 8'),(5,'71652239B','David','Trillo Franco',29,'davidtrillo2@gmail.com','$2b$10$3gcHXuBb8wFYrOv/HvLLduzkOpEk1XocMXRj/BMEO0r0B.cLGWqye',600214688,'Calle Hipólito 45'),(6,'33216589R','Maria','Plaza Gracia',33,'meryplaza@gmail.com','$2b$10$SqY/UGDXer4iQkEC.lHBF.labOrY/OMRzoAYO1lEqweMbpBQpHvS.',664951207,'Calle Rodrigo Perez 21'),(7,'415678903K','Jorge','Sancho Lorca',26,'jorgesalo@gmail.com','$2b$10$5WNtNVA25nCjaLoIa8biBuKAVv6z8.VsYITV8AMvbxlb5aDeVOD0O',694123780,'Av Madrid s/n'),(8,'487529123P','Kevin','Nuñez Calvo',42,'kevinino@gmail.com','$2b$10$iFD5rNtD/pUHiHSJzNelFO5h9sG5fU2yMSpV1vIbdguxRSPWMuDBG',722153049,'Av Paco Garcia 6'),(9,'84651320G','Nuria','Esteve Rubio',30,'nuriesteru@gmail.com','$2b$10$AWPw0GM8IbN0mWCapZsA2ORHjToioPGYWThJ3UrVe9pRU0TZ4tm8y',665147892,'Calle Paradero 67'),(10,'06152394X','Gema','Indigo Talavera',43,'gemaindi@gmail.com','$2b$10$4lJfQSAWQ9AR3x.I5NDaxuidr6k3IyA2jj0K3HkoD3lUOEzMl3C6.',678130200,'Calle Luengo 11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-24 20:47:12
