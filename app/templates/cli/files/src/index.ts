#!/usr/bin/env ts-node

import * as program from 'commander';

// tslint:disable-next-line
const packageJson: any = require('../package.json');

program.version(packageJson.version, '-v, --version').parse(process.argv);
