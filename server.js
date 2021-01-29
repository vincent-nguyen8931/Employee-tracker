var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
var add = require("/Assets/Queries/add");
var update = require("/Assets/Queries/update");
var view = require("/Assets/Queries/view");

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

connection.connect(function(err) {
  if (err) throw err;
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "Add Employee(s)",
      "Add Role(s)",
      "Add Department(s)",
      "View All Roles",
      "View All Departments",
      "View All Employees",
      "Update Employee's role"
    ]
  })
  .then(function(answer) {
    switch (answer.action) {
      
    }
  })
});

