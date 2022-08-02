//The first class is an Employee parent class with the following properties and methods: name, id and email
class Employee {
    //The constructor method is a special method of a class for creating and initializing an object instance of that class.
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    //getName() - method
    getName() {
        return this.name;
    }

    //getId() - method
    getId() {
        return this.id;
    }

    //getEmail() - method
    getEmail() {
        return this.email;
    }

    //getRole() // Returns 'Employee' - method
    getRole() {
        return this.role;
    }
}
// Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
module.exports = Employee;



