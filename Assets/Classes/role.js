class Role {
  constructor(title, salary, departmentID) {
    this.title = title;
    this.salary = salary;
    this.departmentID = departmentID;
  }

  getTitle() {
    return this.title;
  }

  getSalary() {
    return this.salary;
  }

  getDepartmentId() {
    return this.departmentID;
  }
}

module.exports = Role;
