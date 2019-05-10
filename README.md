# Minimal Typescript Starter Generator for Yeoman

[![npm version](https://badge.fury.io/js/generator-typescript-starter.svg)](https://badge.fury.io/js/generator-typescript-starter)
[![Build Status](https://travis-ci.org/phunguyen19/generator-typescript-starter.svg?branch=master)](https://travis-ci.org/phunguyen19/generator-typescript-starter)

This is the project for Yeoman generator new minimal starter TypeScript project with common popular configuration. The aim of this project is saving time of setup a new TypeScript project.

## Features

- **Styling** config with TSLint, Prettier, EditorConfig
- **Docker** and Docker Compose ready for development and production
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
yo typescript-starter [...options]
```

| Options     |  Default   | Values                        | Description                                                                               |
| ----------- |  --------- | ----------------------------- | ----------------------------------------------------------------------------------------- |
| `framework` |  `minimal` | `minimal`, `nestjs`           | Generate base on framework style. (`minimal` is not a framework, it just stand for basic) |
| `name`      |            | string                        | Project name. If provided, will skip the question about project name                      |

## License

MIT
