DROP DATABASE IF EXISTS Company_DB;

CREATE DATABASE Company_DB;

USE Company_DB;

CREATE TABLE employee (
  employeeID INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  roleID INT NOT NULL,
  managerID INT NULL, 
  PRIMARY KEY (employeeID),
  FOREIGN KEY (roleID) REFERENCES roles(roleID)
  -- FOREIGN KEY (manager_id) REFERENCES manager(manager_id)
);

CREATE TABLE roles (
  roleID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR NOT NULL,
  salary INT NOT NULL,
  departmentID INT NOT NULL,
  PRIMARY KEY (roleID),
  FOREIGN KEY (departmentID) REFERENCES department(departmentID)
);

CREATE TABLE department (
  departmentID INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR NOT NULL,
  PRIMARY KEY (departmentID)
);
