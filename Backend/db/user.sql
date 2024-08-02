CREATE DATABASE IF NOT EXISTS P02;

drop user 'admin'@'localhost';

CREATE USER 'p02'@'localhost' IDENTIFIED BY 'p02';

GRANT ALL PRIVILEGES ON cms.* TO 'cms'@'localhost';

USE P02;