# <em><b>ESlint Config for JavaScript</b></em>

[![npm version](https://img.shields.io/npm/v/@fenghan/eslint-config?style=flat-square)](https://www.npmjs.com/package/@fenghan/eslint-config)

Eslint configuration for my javascript projects.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@fenghan/eslint-config). It requires [eslint](https://github.com/eslint/eslint).

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps -D @fenghan/eslint-config
```

Or install each package by yourself:

```sh
npm install -D @fenghan/eslint-config eslint
# or
yarn add -D @fenghan/eslint-config eslint
```

## Usage

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@fenghan',
  rules: {
    // your overrides
  },
}
```

## Eliminate Prettier Conflicts

[Prettier](https://prettier.io) is a great code formatter, This package built-ins the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for you, all you need to do is setup the [Prettier CLI](https://prettier.io/docs/en/cli.html) to use it.

```json
// package.json

"format": "prettier --write ."
```

## What's Inside?

This configuration contains the following cool packages.

| Package                                                                      | Description                                                                                              | Auto Enabled |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------ |
| [eslint-config-airbnb-base](https://github.com/airbnb/javascript)            | This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config. |              |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)   | Enforce best practices for JavaScript promises.                                                          |              |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) | Turns off all rules that are unnecessary or might conflict with Prettier.                                | ✅           |
