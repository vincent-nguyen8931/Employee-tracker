DROP DATABASE IF EXISTS Company_DB;

CREATE DATABASE Company_DB;

USE Company_DB;

CREATE TABLE employee (
  employeeID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  rold_id INT(10) NOT NULL,
  manager_id INT(10) NULL 
  PRIMARY KEY (employeeID)
  FOREIGN KEY (roleID) REFERENCES roles(roleID)
  FOREIGN KEY (departmentID) REFERENCES department(departmentID)
);

CREATE TABLE roles (
  roleID INT NOT NULL AUTO_INCREMENT,
  charName VARCHAR(45) NOT NULL,
  coolness INTEGER(5) NOT NULL,
  attitude VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  departmentID INT NOT NULL AUTO_INCREMENT,
  charName VARCHAR(45) NOT NULL,
  coolness INTEGER(5) NOT NULL,
  attitude VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);



INSERT INTO cast (charName, coolness, attitude)
VALUES ("Jake Peralta", 90, "Careless");

INSERT INTO cast (charName, coolness, attitude)
VALUES ("Gina Linetti", 100, "Chaotic");

INSERT INTO cast (charName, coolness, attitude)
VALUES ("Amy Santiago", 90, "Perfectionist");