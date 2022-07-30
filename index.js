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
const teamMembers = [];

// function that start prompts
function init() {
  managerQuestions();
}

const managerQuestions = () => {
  return inquirer.prompt([
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
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an employee ID for the manager!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address for team manager!",
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
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter office number for team manager!");
          return false;
        }
      },
    },
  ])
  //.then((val) => {
    //const manager = new Manager(
      val.name,
      val.id,
      val.email,
      val.officeNumber
    //);
    //console.table(manager);
    //teamMembers.push(manager);
    //});
  }
  //addTeamMember();

const addTeamMember = () => {
  inquirer
  .prompt([
    {
      type: "list",
      name: "roles",
      message: "Do you want to add an engineer or intern to the team?",
      choices: [
        "Manager",
        "Intern",
        "Team is done",
      ],
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

const engineerQuestions = () => {
  return inquirer.prompt([
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
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter an employee ID for the engineer!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address for engineer!",
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
}

// Create a function to initialize app
init(); //.then((readmeData) => {
// Create a function to write README file
//fs.writeFile("index.html", renderReadme(readmeData), (err) => {
//if (err) throw new Error(err);
//else
//console.log(
//"Team HTML generated!"
//);
// });
//});
