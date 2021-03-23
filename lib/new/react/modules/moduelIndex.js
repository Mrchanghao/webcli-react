const unzipper = require('unzipper');
const fs = require('fs');
const shell = require('shelljs');
const ora = require('../../../oraconfig');
const https = require('https');
const fse = require('fs-extra');

module.exports = function (url, pn) {
  let file = fs.createWriteStream('file.zip');

  ora.generating.start();
  https.get(url, (res) => {
    res.pipe(file);
    res.on('end', () => {
      fs.createReadStream('./file.zip')
        .pipe(unzipper.Extract({ path: process.cwd() }))
        .on('entry', (entry) => entry.autodrain())
        .promise()
        .then(() => {
          fse.readSync('file.zip');
          shell.cd(`webli-${pn}`);
          ora.generating.succeed();
          ora.installing.start();

          shell.exec('npm install');
          ora.installing.succeed();

          if (shell.which('code')) {
            shell.exec('code .');
          }
        });
    });
  });
};
