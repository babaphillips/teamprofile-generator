const Employee = require('../lib/Employee');

test('creates a new manager profile', () => {
    const employee = new Manager('manager');

    expect(employee.name).toBe('input');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');
})