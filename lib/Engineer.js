const Employee = require("./Employee");
//The extends keyword extends a class (indicates that a class is inherited from another class).
class Engineer extends Employee {
  ////The constructor method is a special method of a class for creating and initializing an object instance of that class.
  constructor(name, id, email, github) {
    super(name, id, email);
    // github // GitHub username property
    this.github = github;
  }
  // getGithub() - method
  getGithub() {
    return this.github;
  }
  // getRole() // Overridden to return 'Engineer' - method
  getRole() {
    return "Engineer";
  }
}
//Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
module.exports = Engineer;
