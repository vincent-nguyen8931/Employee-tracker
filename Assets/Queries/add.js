var mysql = require("mysql");
var inquirer = require("inquirer");
var Department = require("../Classes/department");
var Employee = require("../Classes/employee");
var Role = require("../Classes/role");


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
    inquirer.prompt(
      {
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name",
      },
      {
        name: "title",
        type: "list",
        message: "Choose the employee's title",
        choices: [
          connection.query("SELECT title FROM roles", function (err, res) {
            for (i = 0; i < res.length; i++){
              res[i].title.toString();
            }
          })
        ]
      }
    )
      .then(function (answer) {
        var query = "INSERT INTO employee (firstName, lastName, roleID) "
        query += "VALUES (" + answer.firstName + " ," + answer.lastName + " ," + answer.title + ");"
        connection.query(query, function (err, res) {
          console.table(res);
        })
      })
  },
  addRole: function () {

  },
  addDepartment: function () {

  }
}