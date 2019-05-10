'use strict';
const fs = require('fs');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('framework', { type: String, required: false });
    this.argument('name', { type: String, required: false });
  }

  start() {
    const framework = this.options.framework || 'minimal';

    if (!fs.existsSync(this.templatePath(framework))) {
      return this.log(`Only support frameworks: minimal, nestjs`);
    }

    this.log('Initializing...');

    const questions = [];

    if (!this.options.name)
      questions.push({
        type: 'input',
        name: 'name',
        message: 'Project name: ',
        default: 'typescript-stater-' + +new Date()
      });

    this.prompt(questions).then(answers => {
      const params = Object.assign({}, this.options, answers);
      
      // create destination folder
      this.destinationRoot(params.name);
      const destination = this.destinationPath(this.destinationRoot());
      const copyTplOptions = { globOptions: { dot: true } };
      
      this.spawnCommandSync('git', ['init']);

      this.fs.copyTpl(this.templatePath(`core/**/*`), destination, params, undefined, copyTplOptions);
      this.fs.copyTpl(this.templatePath(`${framework}/**/*`), destination, params, undefined, copyTplOptions);

      this.npmInstall();
    });
  }
};
