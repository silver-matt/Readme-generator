const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  let badge = "";
  if (License === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (License === "Apache 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (License === "GPL v3") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    badge = " ";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  let licenseLink = "";
  if (License === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/";
  } else if (License === "Apache 2.0") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  } else if (License === "GPL v3") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
  } else {
    licenseLink = " ";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  let licenseSection = "";
  if (License === "none") {
    licenseSection = "";
  } else {
    licenseSection = 'License:';
  }
  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.Title}
  ## ${data.License}
  ## ${renderLicenseSection(data.License)} ${renderLicenseBadge(data.License)}
  ## ${renderLicenseLink(data.License)}

  # Description 
  ${data.Description}
  # Table of Contents:
  * [License](#License)
  * [Install](#Install)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  # Install:
  You must install the following for this app to function: ${data.Install}

  # Usage:
  ${data.Usage}

  # Contributing:
  ${data.Contributing}

  # Tests:
  Run the following commands in your terminal to test this program: ${data.Tests}

  # Questions:
  If you have questions, reach out to 
  GitHub: https://github.com/${data.Username}/Readme-generator
  or
  Email: ${data.Email}
`;
}

module.exports = generateMarkdown;
