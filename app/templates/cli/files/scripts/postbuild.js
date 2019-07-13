const fs = require('fs');
const path = require('path');
const package = require('../package.json');

const binPath = path.resolve(__dirname, '..', package.bin.<%- name %>);

fs.writeFileSync(
  binPath,
  fs
    .readFileSync(binPath)
    .toString()
    .replace('#!/usr/bin/env ts-node', '#!/usr/bin/env node'),
);
