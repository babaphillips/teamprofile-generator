const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    // school property
    this.school = school;
  }
    // getSchool()
    getSchool() {
        return this.school;
      }
  // getRole() // Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
