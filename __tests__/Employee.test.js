const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test('can set name thru constructor arguments', () => {
    const testName = 'Amanda';
    const employee = new Employee(testName);
    expect(employee.name).toBe(testName);
})

test('can set id thru constructor arguments', () => {
    const testId = 200;
    const employee = new Employee("Amanda", testId);
    expect(employee.id).toBe(testId);
});

test('can set email thru constructor arguments', () => {
    const testEmail = "amandavphillips@icloud.com";
    const employee = new Employee("Julia", 12, testEmail);
    expect(employee.email).toBe(testEmail);
});

test('can get name via getName() function', () => {
    const testName = 'Amanda';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test('can get id via getId() function', () => {
    const testId = 123;
    const employee = new Employee("Amanda", testId);
    expect(employee.getId()).toBe(testId);
});

test('can get email via getEmail() function', () => {
    const testEmail = "amandavphillips@icloud.com";
    const employee = new Employee("Amanda", 12, testEmail);
});

test('can get role via getRole() function', () => {
    const testRole = "Employee";
    const employee = new Employee("Jade", 17, "amandavphillips@icloud.com")
});

