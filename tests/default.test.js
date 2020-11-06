const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const test = require('ava');

test('minimal is default template', async (t) => {
  await helpers.run(path.join(__dirname, '../app')).withPrompts({
    name: 'test-project',
  });

  assert.file([
    '.editorconfig',
    '.eslintignore',
    '.eslintrc',
    '.git/',
    '.gitignore',
    '.prettierrc',
    '.vscode/launch.json',
    'docker-compose.yml',
    'Dockerfile.prod',
    'Dockerfile',
    'package.json',
    'README.md',
    'src/',
    'tsconfig.json',
  ]);

  assert.noFile(['tslint.json']);

  assert.fileContent('README.md', /test-project/);
  assert.fileContent('package.json', /"name": "test-project"/);

  t.pass();
});
