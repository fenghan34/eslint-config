# <em><b>ESlint Config for JavaScript</b></em>

[![npm version](https://img.shields.io/npm/v/@fenghan/stylelint-config?style=flat-square)](https://www.npmjs.com/package/@fenghan/stylelint-config)

[Stylelint](https://stylelint.io/) configuration for styles.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@fenghan/stylelint-config). It requires [stylelint](https://github.com/stylelint/stylelint).

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps -D @fenghan/stylelint-config
```

Or install each package by yourself:

```sh
npm install -D @fenghan/stylelint-config stylelint
# or
yarn add -D @fenghan/stylelint-config stylelint
```

## Usage

Add the extends to your `.stylelintrc.js`:

```js
module.exports = {
  extends: '@fenghan/stylelint-config',
  rules: {
    // your overrides
  },
}
```

## What's Inside?

This configuration contains the following cool packages.

| Package                                                                                          | Description                                                                                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)              | The standard shareable config for stylelint.                                                          |
| [stylelint-scss](https://github.com/kristerkari/stylelint-scss)                                  | A collection of SCSS specific linting rules for stylelint.                                            |
| [stylelint-order](https://github.com/hudochenkov/stylelint-order)                                | A plugin pack of order-related linting rules for stylelint.                                           |
| [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order) | Stylelint config that sorts related property declarations by grouping together in the rational order. |
