# <em><b>ESlint Config for Vue</b></em>

[![npm version](https://img.shields.io/npm/v/@fenghan/eslint-config-vue?style=flat-square)](https://www.npmjs.com/package/@fenghan/eslint-config-vue)

ESlint configuration for my vue projects.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@fenghan/eslint-config-vue). It requires [eslint](https://github.com/eslint/eslint).

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps -D @fenghan/eslint-config-vue
```

Or install each package by yourself:

```sh
npm install -D @fenghan/eslint-config-vue eslint
# or
yarn add -D @fenghan/eslint-config-vue eslint
```

## Usage

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@fenghan/eslint-config-vue',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    // your overrides
  },
}
```

## What's Inside?

This configuration contains the following cool packages.

| Package                                                                                                      | Description                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [@fenghan/eslint-config-ts](https://github.com/fenghan34/configurations/tree/main/packages/eslint-config-ts) | My ESlint configs for [TypeScript](https://github.com/microsoft/TypeScript). |
| [eslint-plugin-vue](https://eslint.vuejs.org/)                                                               | Official ESLint plugin for Vue.js.                                           |
