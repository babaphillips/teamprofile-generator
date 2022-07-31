// The require method lets your application know that it needs to use the inquirer package to execute the code below.
const inquirer = require("inquirer");

// The fs module provides a lot of very useful functionality to access and interact with the file system.
// Once you do so, you have access to all its methods, which include: fs.
const fs = require("fs");

// This function is contained in the page-generator file
const generatePage = require("./src/page-generator");

// require the employees information
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// empty array for employees
const employeesArray = [];

const managerQuestions = () => {
  return inquirer
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
        message: "Enter an employee ID for the manager",
        // validates answer is a number - NaN = Not-a-Number 
        validate: (idInput) => {
          if (isNaN(idInput)) {
            return "Please enter a number for the employee ID";
          }
          return true;
          },
        },
      {
        type: "input",
        name: "email",
        message: "Enter email address for team manager!",
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
        name: "officeNumber",
        message: "Enter office number for manager!",
        validate: (officeNumberInput) => {
          if (isNaN(officeNumberInput)) {
            return "Please enter a office number for the manager!";
          }
          return true;
          },
      },
    ])
    .then((val) => {
      const manager = new Manager(
        val.name,
        val.id,
        val.email,
        val.officeNumber
      );
      console.table(manager);
      employeesArray.push(manager);
      addTeamMember();
    });
};

const addTeamMember = () => {
  console.log(`
    =================
    Add employees to the team
    =================
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
    .then((val) => {
      if (val.roles === "Engineer") {
        engineerQuestions();
      } else if (val.roles === "Intern") {
        internQuestions();
      } else {
        generatePage();
      }
    });
};
//addTeamMember();

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
        message: "Enter an employee ID for the engineer",
          // validates answer is a number - NaN = Not-a-Number 
          validate: (idInput) => {
            if (isNaN(idInput)) {
              return "Please enter a number for the employee ID";
            }
            return true;
            },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address for engineer!",
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
        name: "github",
        message: "Enter GitHub username for the team engineer!",
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
    .then((val) => {
      const engineer = new Engineer(val.name, val.id, val.email, val.github);
      console.table(engineer);
      employeesArray.push(engineer);
      addTeamMember();
    });
};

function internQuestions() {
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
        message: "Enter an employee ID for the intern",
        // validates answer is a number - NaN = Not-a-Number 
        validate: (idInput) => {
          if (isNaN(idInput)) {
            return "Please enter a number for the employee ID";
          }
          return true;
          },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address for intern!",
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
          "Enter the school the intern is currently enrolled or graduated!",
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
    .then((val) => {
      const intern = new Intern(val.name, val.id, val.email, val.school);
      console.table(intern);
      employeesArray.push(intern);
      addTeamMember();
    });
}

// Create a function to initialize app
managerQuestions()
  .then((employeesArray) => {
    return generatePage(employeesArray);
  })
  .then((pageHTML) => {
    return fs.writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
