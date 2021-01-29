var mysql = require("mysql");
var cTable = require("console.table");

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
    var query ="SELECT employee.employeeID, employee.firstName, employee.lastName, roles.title, department.departmentName, roles.salary, employee.managerID ";
    query +="from employee ";
    query +="join roles on employee.roleID=roles.roleID ";
    query +="join department on department.departmentID=roles.departmentID ";
    query +="order by employee.employeeID";

    connection.query(query, function (err, res) {
      console.table(res);
    });
  },
  viewRoles: function () {
    connection.query("SELECT * FROM roles", function (err, res) {
      console.table(res);
    });
  },
  viewDepartments: function () {
    connection.query("SELECT * FROM department", function (err, res) {
      console.table(res);
    });
  }
}
