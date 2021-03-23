var shell = require('shelljs');

const Git = require('simple-git/promise');
const ora = require('../oraconfig');

// const fse = require('fs-extra');

function fileGenerator(url, sn) {
  Git()
    .clone(url, sn, {}, ora.generating.start())
    .then(() => {
      ora.generating.succeed();
      shell.cd(sn);
      ora.installing.start();

      shell.rm('-rf', '.git');
      shell.exec('npm install', { silent: true });
      ora.installing.succeed();

      if (shell.which('code')) {
        shell.exec('code .');
      }
      shell.exec('npm start');
    })
    .catch((err) => {
      ora.generating.fail();
      // eslint-disable-next-line no-undef
      console.log(err);
    });
}

module.exports = { fileGenerator };
