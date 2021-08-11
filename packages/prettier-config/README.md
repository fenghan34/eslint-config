# <em><b>Prettier Config</b></em>

[![npm version](https://img.shields.io/npm/v/@fenghan/prettier-config?style=flat-square)](https://www.npmjs.com/package/@fenghan/prettier-config)

Prettier configuration for my projects.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@fenghan/prettier-config). It requires [prettier](https://github.com/prettier/prettier).

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps -D @fenghan/prettier-config
```

Or install each package by yourself:

```sh
npm install -D @fenghan/prettier-config prettier
# or
yarn add -D @fenghan/prettier-config prettier
```

## Usage

You can just reference it in your `package.json` file:

```json
{
  "prettier": "@fenghan/prettier-config"
}
```

If you need to overwrite some properties from this configuration, import this in your `.prettierrc.js` file and export the modifications:

```js
module.exports = {
  ...require('@fenghan/prettier-config'),
  // ...
}
```

Then you can setup the [Prettier CLI](https://prettier.io/docs/en/cli.html) in your `package.json` file:

```json
{
  "format": "prettier --write ."
}
```
