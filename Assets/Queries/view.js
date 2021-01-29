var inquirer = require("inquirer");
var cTable = require("console.table");
const Department = require("./Assets/Classes/department");
const Employee = require("./Assets/Classes/employee");
const Role = require("./Assets/Classes/role");

connection.query("SELECT * FROM employee", function(err, res) {
  console.log(res);
   });
   connection.end();