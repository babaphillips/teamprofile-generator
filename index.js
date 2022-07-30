// The require method lets your application know that it needs to use the inquirer package to execute the code below.
const inquirer = require("inquirer");
// The fs module provides a lot of very useful functionality to access and interact with the file system.
// Once you do so, you have access to all its methods, which include: fs.
const fs = require("fs");
// require the employees information
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

function init() {
  managerQuestions();
}

// This function is contained in the generateHTML file
//const renderTeam = require("./dist/gene");
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
          console.log(".  Please enter a valid email");
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
  .then((val) => {
    const manager = new Manager(
      val.name,
      val.id,
      val.email,
      val.officeNumber
    );
    console.table(manager);
    teamMembers.push(manager);
    addTeamMember();
  });
}

=================
Add a New Team Member
=================

function addTeamMember() {
  inquirer
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
