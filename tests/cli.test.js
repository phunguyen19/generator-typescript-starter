const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const test = require('ava');

test('generate new cli project successful', async t => {
  // The object returned acts like a promise, so return it to wait until the process is done
  await helpers
    .run(path.join(__dirname, '../app'))
    .withOptions({
      template: 'cli',
    })
    .withPrompts({
      name: 'test-project',
    });

    assert.file([
      '.git/',
      '.vscode/launch.json',
      '.vscode/settings.json',
      'src/',
      '.editorconfig',
      '.gitignore',
      '.prettierrc',
      'package.json',
      'README.md',
      'tsconfig.json',
      'tslint.json'
    ]);

    assert.JSONFileContent('package.json', {
      name: 'test-project',
      bin: {
        'test-project': './dist/index.js',
        'test-project-dev': './src/index.ts',
      },
    });
    // assert.fileContent('package.json', /bin/)
    
    t.pass();
});
