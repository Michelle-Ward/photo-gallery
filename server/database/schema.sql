-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- Database

CREATE DATABASE IF NOT EXISTS `photo_gallery`;

USE `photo_gallery`;

-- ---
-- Table 'property'
--
-- ---

-- DROP TABLE IF EXISTS `property`;

CREATE TABLE IF NOT EXISTS `property` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `address` MEDIUMTEXT NOT NULL,
  `address2` MEDIUMTEXT NULL DEFAULT NULL,
  `neighborhood` MEDIUMTEXT NULL DEFAULT NULL,
  `neighborhood_url` MEDIUMTEXT NULL DEFAULT NULL,
  `rent` MEDIUMTEXT NULL DEFAULT NULL,
  `price` MEDIUMTEXT NULL DEFAULT NULL,
  `beds` SMALLINT NOT NULL,
  `baths` SMALLINT NOT NULL,
  `sqft` SMALLINT NOT NULL,
  `favorite` bit NOT NULL DEFAULT 0,
  `petfriendly` bit NOT NULL DEFAULT 0,
  `new` bit NOT NULL DEFAULT 0,
  `new_construction` bit NOT NULL DEFAULT 0,
  `furnished` bit NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'photo'
--
-- ---

-- DROP TABLE IF EXISTS `photo`;

CREATE TABLE IF NOT EXISTS `photo` (
  `id` SMALLINT NOT NULL AUTO_INCREMENT,
  `property_id` SMALLINT NOT NULL,
  `filename` MEDIUMTEXT NULL,
  `format` MEDIUMTEXT NULL,
  `height` SMALLINT NULL,
  `width` SMALLINT NULL,
  `link` MEDIUMTEXT NULL,
  `thumbnail` MEDIUMTEXT NULL DEFAULT NULL,
  `floorplan` bit NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `photo` ADD FOREIGN KEY (property_id) REFERENCES `property` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `property` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `property` (`address`,`address2`,`neighborhood`,`neighborhood_url`,`rent`,`price`,`beds`,`baths`,`sqft`,`favorite`,`petfriendly`,`new`,`new_construction`,`furnished`) VALUES
-- ('123 Fake Street','','Hell','$1,000,000','5','3.5','3800','1','1','','','','','');
-- INSERT INTO `photo` (`property_id`,`filename`,`format`,`height`,`width`,`link`,`thumbnail`,`floorplan`) VALUES
-- ('1','photo5.jpg','jpg','640','480','http://photo.com/images/photo5.jpg','http://photo.com/images/photo5_thumb.jpg','');
