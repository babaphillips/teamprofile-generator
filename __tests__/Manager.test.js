const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('creates a new manager profile', () => {
    const employee = new Manager('manager');
    expect(typeof(employee)).toBe("object");
})

test('can set office number thru constructor argument', () => {
    const officeNumberTest = 12;
    const employee = new Manager("Lauren", 33, "laureng@gmail.com", officeNumberTest);
    expect(employee.officeNumber).toBe(officeNumberTest);
})

test('can get role via getRole() function', () => {
    const testRole = "Manager"
    const employee = new Manager("Lauren", 33, "laureng@gmail.com", 1882);
    expect(employee.getRole()).toBe(testRole);
})
