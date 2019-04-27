'use strict';
const fs = require('fs');
const Generator = require('yeoman-generator');

const corePkg = ['dotenv-save'];
const coreDevPkg = ['pre-commit'];
const minimalDevPkg = ['@types/jest', '@types/node', 'jest', 'ts-jest', 'ts-node-dev', 'tslint-eslint-rules', 'tslint', 'typescript'];

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('framework', { type: String, required: false });
  }

  start() {
    const framework = this.options.framework || this.options.fr || 'minimal';

    if (!fs.existsSync(this.templatePath(framework))) {
      /* eslint-disable no-console */
      return console.log(`Only support frameworks: minimal, nestjs`);
      /* eslint-enable no-console */
    }

    this.log('Initializing...');

    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name: ',
        default: 'typescript-stater-' + +new Date()
      }
    ]).then(answers => {
      // create destination folder
      this.destinationRoot(answers.name);
      this.spawnCommandSync('git', ['init']);

      this.fs.copyTpl(this.templatePath(`core/**/*`), this.destinationPath(this.destinationRoot()), answers, undefined, {
        globOptions: { dot: true }
      });

      this.fs.copyTpl(this.templatePath(`${framework}/**/*`), this.destinationPath(this.destinationRoot()), answers, undefined, {
        globOptions: { dot: true }
      });

      this.npmInstall();
      this.npmInstall(corePkg);
      this.npmInstall(coreDevPkg, { 'save-dev': true });

      switch (framework) {
        case 'minimal':
          this.npmInstall(minimalDevPkg, { 'save-dev': true });
          break;
      }
    });
  }
};
