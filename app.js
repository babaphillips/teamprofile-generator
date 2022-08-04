// Include packages needed for this application

// The require method lets your application know that it needs to use the inquirer package to execute the code below.
const inquirer = require("inquirer");

// The fs module provides a lot of very useful functionality to access and interact with the file system.
// Once you do so, you have access to all its methods, which include: fs.
const fs = require("fs");

// This function is contained in the GenerateMarkdown file
const renderReadme = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your Project Title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for your Project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description for your Project!");
          return false;
        }
      },
    },
    // {
    //   type: "checkbox",
    //   name: "languages",
    //   message: "What did you this project with? (Check all that apply)",
    //   choices: [
    //     "JavaScript",
    //     "HTML",
    //     "CSS",
    //     "ES6",
    //     "jQuery",
    //     "Bootstrap",
    //     "Node",
    //     "No Badge",
    //   ],
    // },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions for your Project",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter your instructions for your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information for your Project",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter usage information for your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "youtube",
      message: "Enter link to Youtube walkthrough video:",
      validate: (youtubeInput) => {
        if (youtubeInput) {
          return true;
        } else {
          console.log("Please enter your Youtube link");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Select the license used in your Project",
      choices: [
        "No License",
        "Apache_2_0",
        "MPL_2.0",
        "GPL-3.0",
        "MIT",
        "Boost",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines to your Project",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log("Please enter contribution guidelines to your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions for your Project",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("Please enter your test instructions for your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
  ]);
};

// Create a function to initialize app
questions().then((readmeData) => {
  // Create a function to write README file
  fs.writeFile("README.md", renderReadme(readmeData), (err) => {
    if (err) throw new Error(err);
    else console.log("README.md created!");
  });
});
