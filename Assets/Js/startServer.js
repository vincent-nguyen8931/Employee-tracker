var inquirer = require("inquirer");
var cTable = require("console.table");
var add = require("./Assets/Queries/add");
var update = require("./Assets/Queries/update");
var view = require("./Assets/Queries/view");

module.exports = {
  // Prompts user to make a selection of what action to take among the given choices.
  beginServer: function() {
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
            add.addEmployee();
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
            view.viewRoles();
            break;
  
          case "View All Departments":
            view.viewDepartments();
            break;
  
          case "Update Employee's role":
            updateEmployeeRole();
            break;
        }
      })
    }
  }