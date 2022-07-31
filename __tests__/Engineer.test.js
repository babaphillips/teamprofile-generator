const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates a new engineer profile', () => {
    const employee = new Engineer('engineer');
    expect(typeof(employee)).toBe("object");
});

test('can set github thru constructor argument', () => {
    const githubTest = "littlelady";
    const employee = new Engineer("Lauren", 12, "laureng@gmail.com", "littlelady");
    expect(employee.github).toBe(githubTest);
});

test('can get github thru getGithub() function', () => {
    const githubTest = "littlelady";
    const employee = new Engineer("Lauren", 33, "laureng@mail.com", "littlelady");
    expect(employee.getGithub()).toBe(githubTest);
});

test('can get role via getRole() function', () => {
    const testRole = "Engineer"
    const employee = new Engineer("Lauren", 33, "laureng@gmail.com", "littlelady");
    expect(employee.getRole()).toBe(testRole);
});


