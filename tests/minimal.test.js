const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

it('generate new minimal project successful', () => {
  // The object returned acts like a promise, so return it to wait until the process is done
  return helpers
    .run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'test-project'
    })
    .then(function() {
      assert.file([
        '.git/',
        '.vscode/launch.json',
        'src/',
        'tests/',
        '.editorconfig',
        '.env',
        '.gitignore',
        '.prettierrc',
        'docker-compose.yml',
        'Dockerfile.prod',
        'Dockerfile',
        'package.json',
        'README.md',
        'tsconfig.json',
        'tslint.json'
      ]);
      assert.fileContent('README.md', /test-project/);
      assert.fileContent('package.json', /"name": "test-project"/);
    });
});