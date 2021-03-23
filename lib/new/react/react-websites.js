const values = require('./react-value');
const inquirer = require('inquirer');
const landingGen = require('./demos/landingPage');

const questions = [
  {
    type: 'list',
    name: 'webType',
    message: 'Select Type',
    choices: values.websiteTypes,
  },
];

module.exports = function () {
  inquirer.prompt(questions).then((ans) => {
    if (ans.webType === 'Landing Page') {
      landingGen();
    } else {
      throw Error('처음 부터 다시');
    }
  });
};
