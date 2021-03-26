// TODO: Include packages needed for this application


// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
// function init() {
// }

// Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project description?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do you install your app?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your app used?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How may people make contributions?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What tests will you provide and how should they be used?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license are you using?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ]);
};

const generateREADME = (answers) =>
`
# ${answers.title}

## Description
${answers.description}

## Table of Contents
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributions](#Contributions)  
[Testing](#Testing)  
[Questions](#Questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
${answers.license}

## Contributions
${answers.contribution}

## Testing
${answers.test}

## Questions
[GitHub](https://github.com/${answers.github})  
Feel free to reach out to me by [email](mailto:${answers.email}) with any questions you may have.
`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();
