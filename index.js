var inquirer = require("inquirer");
var fs = require("fs");
// const util = require("util");
// const axios = require("axios");

var generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter project title:", 
        name: "title"
    },
    {
        type: "input",
        message: "Enter project description:", 
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions: ", 
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information:", 
        name: "usage"
    },
    {
        type: "list",
        message: "Choose license:", 
        name: "license",
        choices: [
            "license 1",
            "license 2",
            "license 3"
        ]
    },
    {
        type: "input",
        message: "Add contribution guidelines:", 
        name: "contributing"
    },
    {
        type: "input",
        message: "Add test instructions:", 
        name: "tests"
    },
    {
        type: "input",
        message: "Enter GitHub username:", 
        name: "questionsUsername"
    },
    {
        type: "input",
        message: "Enter email address:", 
        name: "questionsEmail"
    },
];

// function to write README file
function writeToFile(fileName, data) {

    const README = generateMarkdown(data);

    // From W3 Schools
    fs.writeFile(fileName, README, function (err) {
        if (err) throw err;
        console.log('Success!');
    })
}

// function to initialize program
function init() {

    // Basic structure from Inquirer documentation
    inquirer
        .prompt(questions)
        .then(answers => writeToFile("README.txt", answers))
        .catch(error => {
            throw error;
        });
}

// function call to initialize program
init();
