var inquirer = require("inquirer");
var add = require("./Assets/Queries/add");
var view = require("./Assets/Queries/view");
var update = require("./Assets/Queries/update");

// Prompts user to make a selection of what action to take among the given choices.
function start() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add Employee(s)",
      "Add Role(s)",
      "Add Department(s)",
      "View All Employees",
      "View All Employees by Role",
      "View All Employees by Department",
      "Update Employee's role",
      "Exit Application"
    ]
  })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Employee(s)":
          add.addEmployee();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "Add Role(s)":
          add.addRole();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "Add Department(s)":
          add.addDepartment();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "View All Employees":
          view.viewEmployees();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "View All Employees by Role":
          view.viewRoles();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "View All Employees by Department":
          view.viewDepartments();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "Update Employee's role":
          update.updateEmployeeRole();
          setTimeout(function () {
            start();
          }, 500);
          break;

        case "Exit Application":
          update.exitApplication();
          break;
      }
    })
}
start();





