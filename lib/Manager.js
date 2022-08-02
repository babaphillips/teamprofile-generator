const Employee = require("./Employee");
//The extends keyword extends a class (indicates that a class is inherited from another class).
class Manager extends Employee {
  ////The constructor method is a special method of a class for creating and initializing an object instance of that class.
  constructor(name, id, email, officeNumber) {
    // call parent constructor 
    super(name, id, email);
    // officeNumber property
    this.officeNumber = officeNumber;
  }
  // getOfficenumber() - method
  getOfficenumber() {
    return this.officeNumber;
  }
  // getRole() // Overridden to return 'Manager' - method 
  getRole() {
    return "Manager"
  }
}
//Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
module.exports = Manager;
