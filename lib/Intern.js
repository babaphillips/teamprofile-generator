const Employee = require("./Employee");
////The extends keyword extends a class (indicates that a class is inherited from another class).
class Intern extends Employee {
  ////The constructor method is a special method of a class for creating and initializing an object instance of that class.
  constructor(name, id, email, school) {
    super(name, id, email);
    // school property
    this.school = school;
  }
    // getSchool() - method
    getSchool() {
        return this.school;
      }
  // getRole() // Overridden to return 'Intern' - method
  getRole() {
    return "Intern";
  }
}
//Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
module.exports = Intern;
