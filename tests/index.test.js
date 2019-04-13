const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

it('generate a project sucessfull', () => {
  // The object returned acts like a promise, so return it to wait until the process is done
  return helpers
    .run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'test-project',
      description: 'test description',
      author: 'Test Author <author@email.com>'
    })
    .then(function() {
      assert.file([
        '.git/',
        '.vscode/',
        'src/',
        'tests/',
        '.editorconfig',
        '.env',
        '.gitignore',
        '.npmrc',
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
      assert.fileContent('README.md', /test description/);
      assert.fileContent('package.json', /"name": "test-project"/);
      assert.fileContent('package.json', /"description": "test description"/);
      assert.fileContent('package.json', /"author": "Test Author <author@email.com>"/);
    });
});
