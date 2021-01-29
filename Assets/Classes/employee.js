class Employee {
  constructor(firstName, lastName, roleID, managerID) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleID = roleID;
    this.managerID = managerID
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getRoleId() {
    return this.roleID;
  }

  getManagerID() {
    return this.managerID;
  }
}

module.exports = Employee;
