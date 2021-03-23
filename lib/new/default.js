const values = require('./default-value');
const inquirer = require('inquirer');
const reactGen = require('./react/react-gen');

const questions = [
  {
    type: 'list',
    name: 'defaultType',
    message: 'Select Platform',
    choices: values.webTypes,
  },
];

module.exports = () => {
  inquirer.prompt(questions).then((ans) => {
    if (ans.defaultType === 'React') {
      reactGen();
    } else if (ans.defaultType === 'HTML') {
      // htmlGen();
    }
  });
};
