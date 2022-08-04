//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`;
  }
  return ``;
}

// Create a function that returns the license link
// If there is no license, return an empty string
// == operator means "is qual to" matching by value only
// ! = reverse the value, returning the opposite
function renderLicenseLink(license) {
  if (license !== "No License") {
    return `- [License](#license)`;
  }
  return ``;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No License") {
    return `## License
    
  This application is licensed under the ${license} license.`;
  }
  return ``;
}

// function generateBadgeLanguage(badge) {
//   if (badge !== "No Badge") {
//     return `![Badge](https://img.shields.io/badge/${badge}-E34F26?style=for-the-badge&logo=html5&logoColor=white)`;
//   }
//   return ``;
// }

// Create a function to generate markdown for README
//function generateMarkdown(data) {
module.exports = (inputData) => {
  return `# ${inputData.title}
${renderLicenseBadge(inputData.license)}

## Description:

${inputData.description}
  
## Contents
- [Installation](#installation)
- [Usage](#usage)
- [Visuals](#visuals)
${renderLicenseLink(inputData.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${inputData.installation}

## Usage 

${inputData.usage}

## Visuals

[Youtube](${inputData.youtube})

${renderLicenseSection(inputData.license)}

## Contributing

${inputData.contributing}

## Tests

${inputData.tests}

## Questions?

Check out my other projects at my Github here: [Github](https://github.com/${
    inputData.github
  })

How To Reach Me For Additional Questions: ${inputData.email}
`;
};
