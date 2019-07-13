const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const test = require('ava');

test('minimal is default template', async t => {
  await helpers
    .run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'test-project',
    });
    
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

    t.pass();
});
