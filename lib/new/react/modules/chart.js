const values = require('../react-value');
const inquirer = require('inquirer');
const reactModuleGen = require('./moduleIndex');

const questions = [
  {
    type: 'rawlist',
    name: 'chartType',
    message: 'Select type',
    choices: values.chartTypes,
  },
];

module.exports = function () {
  inquirer.prompt(questions).then((ans) => {
    if (ans.chartTypes === 'react-svg-donuts') {
      let url =
        'https://raw.githubusercontent.com/Manntrix/webli-react-npm-modules/master/Chart/webli-react-svg-donuts.zip';
      let pn = ans.chartTypes;
      reactModuleGen(url, pn);
    }
  });
};
