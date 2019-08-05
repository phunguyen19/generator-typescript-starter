# Typescript Starter generator

[![npm version](https://badge.fury.io/js/generator-typescript-starter.svg)](https://badge.fury.io/js/generator-typescript-starter)
[![Build Status](https://travis-ci.org/phunguyen19/generator-typescript-starter.svg?branch=master)](https://travis-ci.org/phunguyen19/generator-typescript-starter)
![David](https://img.shields.io/david/phunguyen19/generator-typescript-starter)
[![Known Vulnerabilities](https://snyk.io//test/github/phunguyen19/generator-typescript-starter/badge.svg?targetFile=package.json)](https://snyk.io//test/github/phunguyen19/generator-typescript-starter?targetFile=package.json)
![GitHub last commit](https://img.shields.io/github/last-commit/phunguyen19/generator-typescript-starter)
![node](https://img.shields.io/node/v/generator-typescript-starter)

Saving time to start a new TypeScript projects.

## Features

- **Simple First**: This is built with minimal prompts and options as much as possible but includes popular needed scripts and packages that most cases need to kick start your new project as quick as possible.
- **Styling** config ready with TSLint, Prettier, EditorConfig
- **Docker** and Docker Compose ready for development and production
- **Test** setup ready to go with Ava
- **VSCode Debug** config ready.
- **Git** ready including `.gitignore` and `pre-commit` script check code lint and build.

## Installation

Install Yeoman if you don't have

```
npm install --global yo
```

Install this generator

```
npm install --global generator-typescript-starter
```

## Usage

```
yo typescript-starter [--template template-name] [--name project-name]
```

## Options

### --name

The name of the folder will be generated. If provided, will skip the question about project name.

### --template

**`minimal`** (default): The simple template with native `http` server and test ready with Ava

**`cli`**: Ready setup for new Node.js CLI applications.

## License

MIT
