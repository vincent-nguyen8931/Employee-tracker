var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");
const Department = require("../Classes/department");
const Employee = require("../Classes/employee");
const Role = require("../Classes/role");

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


module.exports = {
  viewEmployees: function () {
    connection.query("SELECT * FROM employee", function(err, res) {
      console.log(res);
       });
       connection.end();
  },
  viewRolse: function () {

  },
  viewDepartments: function () {

  }
}
