var mysql = require("mysql");
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
  addEmployee: function () {
console.log("hello")
startServer.beginServer();
  },
  addRole: function () {

  },
  addDepartment: function () {

  }
}