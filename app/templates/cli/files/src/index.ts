#!/usr/bin/env ts-node

import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as program from 'commander';

// tslint:disable-next-line
const packageJson = JSON.parse(
  readFileSync(resolve(__dirname, '..', 'package.json')).toString(),
);

program.version(packageJson.version, '-v, --version').parse(process.argv);
