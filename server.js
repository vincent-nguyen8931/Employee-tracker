var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
const Department = require("./Assets/Classes/department");
const Employee = require("./Assets/Classes/employee");
const Role = require("./Assets/Classes/role");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "company_db"
});

  connection.query("SELECT * FROM employee", function(err, res) {
   console.log(res);
    });
    connection.end();


