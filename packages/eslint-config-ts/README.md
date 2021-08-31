# <em><b>ESlint Config for TypeScript</b></em>

[![npm version](https://img.shields.io/npm/v/@fenghan/eslint-config-ts?style=flat-square)](https://www.npmjs.com/package/@fenghan/eslint-config-ts)

Eslint configuration for my typescript projects.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@fenghan/eslint-config-ts). It requires [eslint](https://github.com/eslint/eslint).

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps -D @fenghan/eslint-config-ts
```

Or install each package by yourself:

```sh
npm install -D @fenghan/eslint-config-ts eslint
# or
yarn add -D @fenghan/eslint-config-ts eslint
```

## Usage

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@fenghan/eslint-config-ts',
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

| Package                                                                                                | Description                                                              |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [@fenghan/eslint-config](https://github.com/fenghan34/configurations/tree/main/packages/eslint-config) | My ESlint configurations for javaScript                                  |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                            | Monorepo for all the tooling which enables ESLint to support TypeScript. |
