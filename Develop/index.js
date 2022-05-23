// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// These are the questions asked to generate the README

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "Contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "input",
    name: "Install",
    message: "What command is required to install dependencies?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What does the user need to know about using the repo?",
  },
//   This prevents entering an empty string, but I left one as none as an "other" option
  {
    type: "list",
    name: "License",
    message: "What kind of license should the project have? Select One.",
    choices: ['MIT', 'GPL v3', 'Apache 2.0', 'none']
  },
  {
    type: "input",
    name: "Tests",
    message: "What command is required to run tests?",
  },
  {
    type: "input",
    name: "Username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    // console.log(fileName);
    // console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("README Complete!");
    }
  });
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    // console.log(data);
  });
}

// // Function call to initialize app

init();
