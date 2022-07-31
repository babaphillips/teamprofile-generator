const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test('creates a new intern profile', () => {
    const employee = new Intern;
    expect(typeof(employee)).toBe("object");
});

test('can set school thru constructor argument', () => {
    const schoolTest = "VCU";
    const employee = new Intern("Amanda", 12, "amandavphillips@icloud.com", "VCU");
    expect(employee.school).toBe(schoolTest);
});

test('can get school thru getSchool() function', () => {
    const schoolTest = "VCU"
    const employee = new Intern("Amanda", 12, "amandavphillips@icloud.com", "VCU")
    expect(employee.getSchool()).toBe(schoolTest);
});

test('can get role via getRole() function', () => {
    const testRole = "Intern"
    const employee = new Intern("Lauren", 33, "laureng@gmail.com", "VCU");
    expect(employee.getRole()).toBe(testRole);
});

