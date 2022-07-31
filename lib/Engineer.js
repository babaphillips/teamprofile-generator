const Employee = require("./Employee");

//The extends keyword extends a class (indicates that a class is inherited from another class).
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      // officeNumber
      this.github = github;
    }
    getGithub() {
        return this.github;
    }
    // getRole() // Overridden to return 'Manager'
    getRole() {
      return "Engineer"
    }
  }

module.exports = Engineer;