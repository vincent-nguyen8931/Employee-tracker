var mysql = require("mysql");
var cTable = require("console.table");
var Department = require("../Classes/department");
var Employee = require("../Classes/employee");
var Role = require("../Classes/role");
var startServer = require("../Js/startServer");

// creates variable to link to the proper database
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
      console.table(res);
       });
       connection.end();
       startServer.beginServer();
  },
  viewRoles: function () {
    connection.query("SELECT * FROM roles", function(err, res) {
      console.table(res);
       });
       connection.end();
  },
  viewDepartments: function () {
    connection.query("SELECT * FROM department", function(err, res) {
      console.table(res);
       });
       connection.end();
  }
}
