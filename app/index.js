'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the new project: '
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for the new project: '
      },
      {
        type: 'input',
        name: 'author',
        message: 'Enter a author for the new project: '
      }
    ]).then(answers => {
      // create destination folder
      this.destinationRoot(answers.name);
      this.spawnCommandSync('git', ['init']);
      this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath(this.destinationRoot()), answers, undefined, {
        globOptions: { dot: true }
      });
      this.npmInstall(
        ['@types/jest', '@types/node', 'dotenv', 'jest', 'pre-commit', 'ts-jest', 'ts-node-dev', 'tslint-eslint-rules', 'tslint', 'typescript'],
        { 'save-dev': true }
      );
    });
  }
};
