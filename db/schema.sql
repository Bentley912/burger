CREATE DATABSE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR,
    devoured BOOLEAN,
    date TIMESTAMP 
)

