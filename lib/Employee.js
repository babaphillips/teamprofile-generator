//The first class is an Employee parent class with the following properties and methods: name, id and email
class Employee {
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

module.exports = Employee;



