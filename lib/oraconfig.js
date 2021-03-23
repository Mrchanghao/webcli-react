const ora = require('ora');
const colors = require('colors');

exports.generating = ora(colors.cyan('Generating Files'));
exports.installing = ora(
  colors.green('node packages들을 설치하는 중입니다. 조금만 기다려 주세요')
);

exports.configDatabase = ora(colors.yellow('데이터 베이스 설정 중'));
exports.importDatabase = ora(colors.gray(`데이터 베이스 임포트 중,,,`));

exports.changeURL = ora(colors.magenta('replaing Url'));
exports.removeBackup = ora(colors.green('remove the backup file'));
exports.usersLoading = ora(colors.magenta('users loading'));

exports.archivingFiles = ora(colors.cyan.bool('archieving files'));

exports.extractingFiles = ora(colors.yellow('extracing '));

exports.encryption = ora(colors.red.bold('암호화'));
