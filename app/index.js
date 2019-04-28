'use strict';
const fs = require('fs');
const Generator = require('yeoman-generator');

const corePkg = ['dotenv-safe'];
const coreDevPkg = ['pre-commit'];
const minimalDevPkg = ['@types/jest', '@types/node', 'jest', 'ts-jest', 'ts-node-dev', 'tslint-eslint-rules', 'tslint', 'typescript'];

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('framework', { type: String, required: false });
    this.argument('name', { type: String, required: false });
  }

  async start() {
    const framework = this.options.framework || 'minimal';

    if (!fs.existsSync(this.templatePath(framework))) {
      return this.log(`Only support frameworks: minimal, nestjs`);
    }

    this.log('Initializing...');

    const questions = [];

    if (!this.options.name) questions.push({
      type: 'input',
      name: 'name',
      message: 'Project name: ',
      default: 'typescript-stater-' + +new Date()
    });

    const answers = await this.prompt(questions);

    const params = Object.assign({}, this.options, answers);

    // create destination folder
    this.destinationRoot(params.name);
    this.spawnCommandSync('git', ['init']);

    this.fs.copyTpl(this.templatePath(`core/**/*`), this.destinationPath(this.destinationRoot()), params, undefined, {
      globOptions: { dot: true }
    });

    this.fs.copyTpl(this.templatePath(`${framework}/**/*`), this.destinationPath(this.destinationRoot()), params, undefined, {
      globOptions: { dot: true }
    });

    this.npmInstall();
    this.npmInstall(corePkg);
    this.npmInstall(coreDevPkg, { 'save-dev': true });

    switch (framework) {
      case 'minimal':
        this.npmInstall(minimalDevPkg, { 'save-dev': true });
        break;
      case 'nestjs':
        this.npmInstall(['pg', 'sequelize', 'sequelize-typescript']);
        this.npmInstall(['@types/sequelize'], { 'save-dev': true });
    }
  }
};
