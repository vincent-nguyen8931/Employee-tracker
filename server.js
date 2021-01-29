var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
var add = require("./Assets/Queries/add");
var update = require("./Assets/Queries/update");
var view = require("./Assets/Queries/view");

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

// connection.connect(function (err) {
  // if (err) throw err;
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add Employee(s)",
      "Add Role(s)",
      "Add Department(s)",
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "Update Employee's role"
    ]
  })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Employee(s)":
          addEmployee();
          break;

        case "Add Role(s)":
          addRole();
          break;

        case "Add Department(s)":
          addDepartment();
          break;

        case "View All Employees":
          view.viewEmployees();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;



        case "Update Employee's role":
          updateEmployeeRole();
          break;

      }
    })
// });

