// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a short description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List your collaborators or tutorials used:',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
    name: 'license',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to generate README content
function generateREADME(answers) {
  // Implement logic to generate the README content using template literals

  const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} License.

## Credits
${answers.credits}
`;

  return readmeContent;
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
      console.log('README.md generated successfully!');
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();