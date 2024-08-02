CREATE DATABASE IF NOT EXISTS CMS;

drop user 'admin'@'localhost';

CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON CMS.* TO 'admin'@'localhost';

USE CMS;