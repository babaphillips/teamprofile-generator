const Employee = require("./Employee");

//The extends keyword extends a class (indicates that a class is inherited from another class).
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // officeNumber
    this.officeNumber = officeNumber;
  }
  // getRole() // Overridden to return 'Manager'
  getRole() {
    return "Manager"
  }
}

module.exports = Manager;
