const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

it('generate new cli project successful', () => {
  // The object returned acts like a promise, so return it to wait until the process is done
  return helpers
    .run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'test-project',
      framework: 'cli',
    })
    .then(function() {
      assert.file([
        '.git/',
        '.vscode/launch.json',
        '.vscode/settings.json',
        'src/',
        '.editorconfig',
        '.env.example',
        '.gitignore',
        '.prettierrc',
        'package.json',
        'README.md',
        'tsconfig.json',
        'tslint.json'
      ]);
    });
});
