// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "README Title ",
        },
        {
            type: "input",
            name: "description",
            message: "README Description ",
        },
        {
            type: "input",
            name: "installInstructions",
            message: "README Install Instructions ",
            default: "npm install"
        },
        {
            type: "input",
            name: "usageInstructions",
            message: "README Usage Instructions ",
        },
        {
            type: "input",
            name: "contributionsGuide",
            message: "README Contributions Guide ",
        },
        {
            type: "input",
            name: "tests",
            message: "README Tests ",
        },
        {
            type: "input",
            name: "githubUsername",
            message: "README Github Username ",
        },
        {
            type: "input",
            name: "email",
            message: "README Email ",
        },
        {
            type: "input",
            name: "userportfolio",
            message: "README Portfolio ",
        },
        {
            type: "list",
            name: "license",
            message: "README License ",
            choices: [
                "Apache-2.0",
                "BSD-3-Clause",
                "BSD-2-Clause",
                "gpl-license",
                "lgpl-license",
                "MIT",
                "MPL-2.0",
                "CDDL-1.0",
                "EPL-2.0"
            ]
        }
    ]).then( (data) => {
        writeToFile("README.md", generateMarkdown(data));
    })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("error writing and creating README.md file");
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
