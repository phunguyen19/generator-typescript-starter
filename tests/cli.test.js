const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const test = require('ava');

test('generate new cli project successful', async t => {
  // The object returned acts like a promise, so return it to wait until the process is done
  await helpers
    .run(path.join(__dirname, '../app'))
    .withPrompts({
      name: 'test-project',
      framework: 'cli',
    });

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
    
    t.pass();
});
