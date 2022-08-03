// The require method lets your application know that it needs to use the inquirer package to execute the code below.
const inquirer = require("inquirer");

// The fs module provides a lot of very useful functionality to access and interact with the file system.
// Once you do so, you have access to all its methods, which include: fs.
const fs = require("fs");

// This function is contained in the page-generator file
const generatePage = require("./src/page-generator");

// require the employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// empty array for employees to be added on
const employeesArray = [];

// starting with Manager questions as stated in acceptance criteria
const managerQuestions = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the team manager? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the name of the team manager!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message:
            "Enter an employee ID for the manager: (Only numbers accepted)",
          // validates answer is a number - NaN = Not-a-Number
          validate: (idInput) => {
            if (isNaN(idInput)) {
              console.log(
                "  Please enter a number for your employee ID for the manager!"
              );
              return false;
            } else {
              return true;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter email address for team manager: (Required)",
          // validates email address
          validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (valid) {
              console.log("  Nice!");
              return true;
            } else {
              console.log("  Please enter a valid email");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter office number for manager: (Required)",
          validate: (officeNumberInput) => {
            if (officeNumberInput) {
              return true;
            } else {
              console.log("Please enter an office number for the manager!");
              return false;
            }
          },
        },
      ])
      //The then() method returns a Promise. It takes two arguments: callback functions for the success and failure cases of the Promise.
      .then((data) => {
        //is used to create an instance of an object that has a constructor function.
        const manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        // The push method adds new items to the end of an array. Adding manager to employeesArray
        employeesArray.push(manager);
        // run addTeamMember function
        addTeamMember();
      })
  );
};

// Add team member function
const addTeamMember = () => {
  console.log(`
    ===========================
     Add employees to the team
    ===========================
    `);
  inquirer
    .prompt([
      {
        type: "list",
        name: "roles",
        message: "Do you want to add an engineer or intern to the team?",
        choices: ["Engineer", "Intern", "Team is done"],
      },
    ])
    .then((selected) => {
      // if Engineer is selected, engineerQuestions function will run

      switch (selected.roles) {
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        default:
          generateTeam();
      }
    });
};

// Engineer questions function
const engineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team engineer? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the name of the team engineer!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message:
          "Enter an employee ID for the engineer: (Only numbers accepted)",
        // validates answer is a number - NaN = Not-a-Number
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log(
              "  Please enter a number for your employee ID for the engineer!"
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address for engineer: (Required)",
        // validates email address
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            console.log("Great job");
            return true;
          } else {
            console.log("  Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter GitHub username for the team engineer: (Required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter GitHub username for the team engineer!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employeesArray.push(engineer);
      addTeamMember();
    });
};

// Intern questions function
const internQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team intern? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the name of the team intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter an employee ID for the intern: (Only numbers)",
        // validates there is an answer
        validate: (idInput) => {
          if (isNaN(idInput)) {
            console.log(
              "  Please enter a number for your employee ID for the intern!"
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address for intern: (Required)",
        // validates email address
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            console.log("Great job");
            return true;
          } else {
            console.log("Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message:
          "Enter the school the intern is currently enrolled or graduated: (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log(
              "Please enter the school the intern is currently enrolled or graduated"
            );
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employeesArray.push(intern);
      addTeamMember();
    });
};

// creates a function that generates my HTML
function generateTeam() {
  fs.writeFile("./dist/index.html", generatePage(employeesArray), (err) => {
    if (err) throw new Error(err);
    else console.log("Team profile page created in dist folder!");
  });
}

// Create a function to initialize app
managerQuestions();
