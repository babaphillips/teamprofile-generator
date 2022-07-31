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
})

test('can set email thru constructor arguments', () => {
    const testEmail = "amandavphillips@icloud.com";
    const employee = new Employee("Julia", 12, testEmail);
    expect(employee.email).toBe(testEmail);
})

test('can get name via getName() function', () => {
    const testName = 'Amanda';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
})

