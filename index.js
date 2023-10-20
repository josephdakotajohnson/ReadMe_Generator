// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'deployedApp',
        message: 'What is the name of the repository (this is case sensitive, example: "ReadMe_Generator")?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: `What is the name of your GitHub (type this example: "[SoAndSo's GitHub account](https://github.com/soandso)"?`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description (example: "I want to create...")?',
    },
    {
        type: 'input',
        name: 'credits1',
        message: 'Who coded this website?',
    },
    {
        type: 'input',
        name: 'credits2',
        message: 'Who should the README credit?',
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'What badges should be added to the README?',
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are the features? (Use "When", "Then", and "If", place " - " before each one and a space after each one.)',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'What is the name of the screenshot?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
`# ${deployedApp}
${description} 

## Description

 - ${description}

## Table of Contents

  - [Credits](#credits)
  - [Badges](#badges)
  - [Features](#features)
  - [Questions](#questions)
  - [Screenshot](#screenshot)
  - [DeployedApp](#deployedApp)

## Credits

 - This website was coded by ${credits1}.

${credits2}

## Badges

 - 

## Features

${features}

## Questions

 - If you have any questions for me, my GitHub account is ${gitHub}.

## Screenshot

 - This is a screenshot of the application: ![Application Screenshot](assets/images/${screenshot}).

## DeployedApp

 - This is a link to the fully deployed application: (https://josephdakotajohnson.github.io/${deployedApp}/).
`;}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
