const Employee = require('../lib/Employee');

test('creates a new manager profile', () => {
    const employee = new Manager('manager');
    expect(typeof(employee)).toBe("object");
})