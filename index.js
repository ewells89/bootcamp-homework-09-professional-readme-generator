// packages required
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions for how to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide specific usage guidelines for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide specific contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add instructions for specific tests for your project and how to use them.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for this project?',
        choices: ['Common Development and Distribution License (CDDL-1.0)','The MIT License (MIT)','Apache License 2','Open Software License 3.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// function to write README file
function writeToFile() {
    inquirer.prompt(questions)
    .then(data => {
        const readmeTitle = 'NewReadMe.md'; 
        fs.writeFile(readmeTitle, generateMarkdown(data), 'UTF8', (err => {
            if (err) throw err;
            console.log('ReadMe file generated.');
        }));
    })
    .catch(error => 
        console.log(error)
    );
};

// function to initialize program
function init() {
    writeToFile();
}

// function call to initialize program
init();
