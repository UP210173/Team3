CREATE DATABASE IF NOT EXISTS p02;

drop user 'p02'@'localhost';

CREATE USER 'p02'@'localhost' IDENTIFIED BY 'p02';

GRANT ALL PRIVILEGES ON p02.* TO 'p02'@'localhost';

USE p02;