const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test('can set name thru constructor arguments', () => {
    const name = 'Amanda';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})