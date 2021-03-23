// const colors = require('colors');
const values = require('./react-value');

const inquirer = require('inquirer');
// const shell = require('shelljs');

const { fileGenerator } = require('../gitConfig');
// const ora = require('ora');

const questions = [
  {
    type: 'list',
    name: 'exType',
    message: 'Select Type',
    choices: values.exampleTypes,
  },
];

module.exports = function () {
  inquirer.prompt(questions).then((ans) => {
    // const siteName = ans.exType;

    if (ans.exType === 'Calculator') {
      let link = 'https://github.com/ahfarmer/calculator.git';
      fileGenerator(link, ans.exType);
    }
  });
};
