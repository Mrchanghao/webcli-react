const values = require('./tools-value');
const inquirer = require('inquirer');

var file_system = require('fs');
var fs = require('fs-extra');
var os = require('os');
const archiever = require('archiver');

const path = require('path');
inquirer.registerPrompt('directory', require('inquirer-select-directory'));
const ora = require('../oraconfig');

const questions = [
  {
    type: 'list',
    name: 'archieveType',
    message: 'Select your platform',
    choices: values.archieveTypes,
  },
  {
    type: 'directory',
    name: 'from',
    message: 'Source folder',
    basePath: process.cwd(),
  },
  {
    type: 'input',
    name: 'target',
    message: 'Enter your archieve name',
    default: 'webli',
  },
];
