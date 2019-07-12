'use strict';
const fs = require('fs');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('template', {  description: 'Template for generating', type: String, required: false });
    this.argument('name', { description: 'Project name', type: String, required: false });
  }

  start() {
    const template = this.options.template || 'minimal';

    const templates = fs.readdirSync(this.templatePath());

    if (!templates.includes(template)) {
      return this.log(`Template "${template}" does not exist. Only support: "${templates.join('", "')}"`);
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
      this.fs.copyTpl(this.templatePath(`${template}/files/**/*`), destination, params, undefined, copyTplOptions);

      let packages;
      try {
        packages = require(`./templates/${template}/installed-packages`);
      } catch (error) {
        this.log('No config for install packages');
      }

      if (typeof packages !== 'undefined') {
        if (packages.prod && packages.prod.length) this.npmInstall(packages.prod);
        if (packages.dev && packages.dev.length) this.npmInstall(packages.dev, { 'save-dev': true });
      }
    });
  }
};
