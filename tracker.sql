DROP DATABASE IF EXISTS Company_DB;

CREATE DATABASE Company_DB;

USE Company_DB;

CREATE TABLE employee (
  employeeID INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) NOT NULL,
  lastName VARCHAR(45) NOT NULL,
  roleID INT(10) NOT NULL,
  managerID INT(10) NULL 
  PRIMARY KEY (employeeID)
  FOREIGN KEY (roleID) REFERENCES roles(roleID)
  -- FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);

CREATE TABLE roles (
  roleID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  salary INT(10) NOT NULL,
  departmentID INT(10) NOT NULL,
  PRIMARY KEY (roleID)
  FOREIGN KEY (departmentID) REFERENCES department(departmentID)
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