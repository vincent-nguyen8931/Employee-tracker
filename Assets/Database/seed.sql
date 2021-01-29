DROP DATABASE IF EXISTS Company_DB;

CREATE DATABASE Company_DB;

USE Company_DB;

CREATE TABLE department (
  departmentID INT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(45) NOT NULL,
  PRIMARY KEY (departmentID)
);

CREATE TABLE roles (
  roleID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  salary INT NOT NULL,
  departmentID INT NOT NULL,
  PRIMARY KEY (roleID),
  FOREIGN KEY (departmentID) REFERENCES department(departmentID)
);

CREATE TABLE employee (
  employeeID INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) NOT NULL,
  lastName VARCHAR(45) NOT NULL,
  roleID INT NOT NULL,
  managerID INT NULL, 
  PRIMARY KEY (employeeID),
  FOREIGN KEY (roleID) REFERENCES roles(roleID)
  -- FOREIGN KEY (manager_id) REFERENCES manager(manager_id) --
);

INSERT INTO department (departmentName)
VALUES 
("Human Resources"),
("Bacon Eaters"),
("Pig Buyers");

INSERT INTO roles (title, salary, departmentID)
VALUES 
("Intern", 20000, 1),
("Entry Eater", 30000, 2),
("Entry Buyer", 35000, 3);

INSERT INTO employee (firstName, lastName, roleID)
VALUES 
("Sarah", "Johnson", 1),
("Joe", "Smith", 1),
("Beatrice", "Simmons", 2);
("Timothy", "Jerry", 3)

select * from employee;
select * from department;
select * from roles;