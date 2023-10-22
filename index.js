// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            choices: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            type: 'input',
            name: 'features',
            message: 'What are the features? (Use "When", "Then", and "If", place "," after each one with no space added.)',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'What is the name of the screenshot?',
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What licenses should be added to the README?',
            choices: ['MIT', 'BSD2', 'Apache2', 'none'],
        },
    ])
};

// let text = "When I do this?,Then I do that!";
// const myArray = text.split(",");

// function renderFeatures(feature) { // Work on Credits1.
//     const featureArr = feature.split(",");
//     var featureSection = ``;
//     for (var i = 0; i < featureArr.length; i++) {
//         featureSection += ` - ${featureArr[i]}\n`;
//     }
//     return featureSection;
// }

function renderFeatures(feature) {
    const featureArr = feature.split(",");
    var featureSection = ``;
    for (var i = 0; i < featureArr.length; i++) {
        featureSection += ` - ${featureArr[i]}\n`;
    }
    return featureSection;
}

function renderBadges(badge) {
    var badgeSection = ``;
    for (var i = 0; i < badge.length; i++) {
        badgeSection += ` - ${badge[i]}\n`;
    }
    return badgeSection;
}

function renderLicenseBadge(license) {
    if (license === 'none') {
        return "";
    }
    return `\n\n - ![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

function renderLicenseLink(license) {
    if (license === 'none') {
        return "";
    }
    return "- [License](#license)"
}

function renderLicenseSection(license) {
    if (license === 'none') {
        return "";
    }
    return "\n\n## License"
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
const generateREADME = ({ deployedApp, gitHub, description, credits1, credits2, badges, features, screenshot, licenses }) =>
`# ${deployedApp}
${description}

## Description

 - ${description}${renderLicenseSection(licenses)}${renderLicenseBadge(licenses)}

## Table of Contents

  - [Credits](#credits)
  - [Badges](#badges)
  - [Features](#features)
  - [Questions](#questions)
  - [Screenshot](#screenshot)
  - [DeployedApp](#deployedApp)
  ${renderLicenseLink(licenses)}

## Credits

 - This website was coded by ${credits1}.

${credits2}

## Badges

${renderBadges(badges)}

## Features

${renderFeatures(features)}

## Questions

 - If you have any questions for me, my GitHub account is ${gitHub}.

## Screenshot

 - This is a screenshot of the application: ![Application Screenshot](assets/images/${screenshot}).

## DeployedApp

 - This is a link to the fully deployed application: (https://josephdakotajohnson.github.io/${deployedApp}/).
`;

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote a README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();







// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// // TODO: Create an array of questions for user input
// inquirer
//     .prompt([
//     {
//         type: 'input',
//         name: 'deployedApp',
//         message: 'What is the name of the repository (this is case sensitive, example: "ReadMe_Generator")?',
//     },
//     {
//         type: 'input',
//         name: 'gitHub',
//         message: `What is the name of your GitHub (type this example: "[SoAndSo's GitHub account](https://github.com/soandso)"?`,
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'What is the description (example: "I want to create...")?',
//     },
//     {
//         type: 'input',
//         name: 'credits1',
//         message: 'Who coded this website?',
//     },
//     {
//         type: 'input',
//         name: 'credits2',
//         message: 'Who should the README credit?',
//     },
//     {
//         type: 'checkbox',
//         name: 'badges',
//         message: 'What badges should be added to the README?',
//     },
//     {
//         type: 'input',
//         name: 'features',
//         message: 'What are the features? (Use "When", "Then", and "If", place " - " before each one and a space after each one.)',
//     },
//     {
//         type: 'input',
//         name: 'screenshot',
//         message: 'What is the name of the screenshot?',
//     },
// ])
//     .then((answers) => {
//         const readmePageContent = generateHTML(answers);

//         fs.writeFile('README.md', htmlPageContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//         );
// });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// `# ${deployedApp}
// ${description} 

// ## Description

//  - ${description}

// ## Table of Contents

//   - [Credits](#credits)
//   - [Badges](#badges)
//   - [Features](#features)
//   - [Questions](#questions)
//   - [Screenshot](#screenshot)
//   - [DeployedApp](#deployedApp)

// ## Credits

//  - This website was coded by ${credits1}.

// ${credits2}

// ## Badges

//  - 

// ## Features

// ${features}

// ## Questions

//  - If you have any questions for me, my GitHub account is ${gitHub}.

// ## Screenshot

//  - This is a screenshot of the application: ![Application Screenshot](assets/images/${screenshot}).

// ## DeployedApp

//  - This is a link to the fully deployed application: (https://josephdakotajohnson.github.io/${deployedApp}/).
// `;}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
