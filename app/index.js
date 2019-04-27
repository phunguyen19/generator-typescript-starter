'use strict';
const fs = require('fs');
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('framework', { type: String, required: false });
    this.argument('fr', { type: String, required: false });
    this.log('Initializing...');
  }

  start() {
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the new project: '
      }
    ]).then(answers => {
      const framework = this.options.framework || this.options.fr || 'minimal';

      if (!fs.existsSync(this.templatePath(framework))) {
        throw new Error(`Support frameworks: minimal, nestjs`);
      }

      // create destination folder
      this.destinationRoot(answers.name);
      this.spawnCommandSync('git', ['init']);

      this.fs.copyTpl(this.templatePath(`${framework}/**/*`), this.destinationPath(this.destinationRoot()), answers, undefined, {
        globOptions: { dot: true }
      });

      switch (framework) {
        case 'minimal':
          this.npmInstall(
            ['@types/jest', '@types/node', 'dotenv', 'jest', 'pre-commit', 'ts-jest', 'ts-node-dev', 'tslint-eslint-rules', 'tslint', 'typescript'],
            { 'save-dev': true }
          );
          break;

        case 'nestjs':
          this.npmInstall();
          this.npmInstall(['pre-commit'], { 'save-dev': true });
          break;
      }
    });
  }
};
