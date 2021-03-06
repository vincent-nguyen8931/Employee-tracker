var inquirer = require("inquirer");
var mysql = require("mysql");
var cTable = require("console.table");
var Department = require("./Assets/Classes/department");
var Employee = require("./Assets/Classes/employee");
var Role = require("./Assets/Classes/role");
var view = require("./Assets/Queries/view");

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
          updateEmployeeRole();
          break;

        case "Exit Application":
          exitApplication();
          break;
      }
    })
}
start();

function addEmployee() {
  // creates array and fills it with the names of all the titles in the roles table. This array will be used to populate choices when selecting a role.
  var choiceArr = [];
  connection.query("SELECT title FROM roles", function (err, res) {
    for (i = 0; i < res.length; i++) {
      choiceArr.push(res[i].title);
    }
  })
  inquirer.prompt([
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
      choices: choiceArr
    }
  ])
    .then(function (answer) {

      connection.query("SELECT roleID FROM roles WHERE title=?", [answer.title], function (err, res) {
        if (err) throw err;
        connection.query("INSERT INTO employee SET ?",
          {
            // takes user input from their role title, salary, and department choice
            firstName: answer.firstName,
            lastName: answer.lastName,
            roleID: res[0].roleID
            // answer.title
          }, function (err, res) {
            if (err) throw err;
            console.log("Employee successfully added.");
            start();
          })
        /* Try out in the future
        var employeeAdding = new Employee (answer.firstName, answer.lastName, answer.title);
    
        var strEmployee = employeeAdding.toString();
        console.log("employeeAdding:");
        console.log(strEmployee);

        var query = "INSERT INTO employee SET ?";
        query += "VALUES (?, ?);";

        console.log("Quiery:")
        console.log(query)
        */
      })
    })
};

function addRole() {
  // creates array and fills it with the names of all the departments in the department table. This array will be used to populate choices when selecting a department.
  var deptArr = [];
  connection.query("SELECT departmentName FROM department", function (err, res) {
    for (i = 0; i < res.length; i++) {
      deptArr.push(res[i].departmentName);
    }
  })
  inquirer.prompt([
    {
      name: "roleTitle",
      type: "input",
      message: "What is the role title?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the role's salary",
    },
    {
      name: "deptChoice",
      type: "list",
      message: "Choose the department this role belongs to:",
      choices: deptArr
    }
  ])
    .then(function (answer) {

      connection.query("SELECT departmentID FROM department WHERE departmentName=?", [answer.deptChoice], function (err, res) {
        if (err) throw err;
        connection.query("INSERT INTO roles SET ?",
          {
            // takes user input from their role title, salary, and department choice
            title: answer.roleTitle,
            salary: answer.salary,
            departmentID: res[0].departmentID
          }, function (err, res) {
            if (err) throw err;
            console.log("Role successfully added.");
            start();
          })
      });
    });
}

function addDepartment() {
  inquirer.prompt([
    {
      name: "deptName",
      type: "input",
      message: "What is the department name?",
    }
  ])
    .then(function (answer) {
      connection.query("INSERT INTO department SET ?",
        {
          departmentName: answer.deptName
        }, function (err, res) {
          if (err) throw err;
          console.log("Department successfully added.");
          start();
        })
    });
};

function updateEmployeeRole() {
  // creates array and fills it with the names of all the employees in the employee table. This array will be used to populate choices when selecting a department.

  connection.query("SELECT * FROM employee", function (err, res) {
    // for (i = 0; i < res.length; i++) {
    //   firstName.push(res[i].firstName);
    //   lastName.push(res[i].lastName);
    // }

    inquirer.prompt([
      {
        name: "employeeFirstName",
        type: "list",
        message: "Choose the employee's first name to update their role:",
        choices: function () {
          var firstName = [];
          for (i = 0; i < res.length; i++) {
            firstName.push(res[i].firstName);
          }
          return firstName;
        }
      },
      {
        name: "employeeLastName",
        type: "list",
        message: "Choose the employee's last name to update their role:",
        choices: function () {
          var lastName = [];
          for (i = 0; i < res.length; i++) {
            lastName.push(res[i].lastName);
          }
          return lastName;
        }
      },
      {
        name: "roleChange",
        type: "list",
        message: "Choose the employee's new role:",
        choices: function () {
          var roles = [];
          connection.query("SELECT title FROM roles", function (err, res) {
            for (i = 0; i < res.length; i++) {
              roles.push(res[i].roleChange);
            }
          })
          return roles;
        }
      }
    ])
      .then(function (answer) {
        var query = "SELECT roleID FROM employee WHERE firstName='" + [answer.employeeFirstName] + "' && lastName='" + [answer.employeeLastName] + "';";
        connection.query(query, function (err, res) {
          // if (err) throw err;

          connection.query("UPDATE employee SET ? WHERE ?",
            [
              {
                roleID: res[0].roleID
              },
              {
                roleID: answer.roleChange
              }
            ],
            function (err, res) {
              if (err) throw err;
              console.log("Role successfully changed.");
              start();
            })
        });
      });
  })
}

function exitApplication() {
  console.log("Bye!")
  connection.end();
  process.exit();
}



