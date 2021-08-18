# <em><b>ESlint Config for React</b></em>

[![npm version](https://img.shields.io/npm/v/@fenghan/eslint-config-react?style=flat-square)](https://www.npmjs.com/package/@fenghan/eslint-config-react)

ESlint configuration for my react projects.

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/@fenghan/eslint-config-react). It requires [eslint](https://github.com/eslint/eslint).

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps -D @fenghan/eslint-config-react
```

Or install each package by yourself:

```sh
npm install -D @fenghan/eslint-config-react eslint
# or
yarn add -D @fenghan/eslint-config-react eslint
```

## Usage

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@fenghan/eslint-config-react',
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

| Package                                                                                                       | Description                                                                                        | Auto Enabled |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------ |
| [@fenghan/eslint-config-ts](https://github.com/fenghan34/configurations/tree/main/packages/eslint-config-ts)  | My ESlint configs for [TypeScript](https://github.com/microsoft/TypeScript).                       |              |
| [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)        | This package provides Airbnb's .eslintrc as an extensible shared config.                           |              |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                                       | React specific linting rules for ESLint.                                                           |              |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) | This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).       |              |
| [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)                                   | Static AST checker for a11y rules on JSX elements.                                                 |              |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)                                    | ESLint plugin for [Jest](https://jestjs.io).                                                       |              |
| [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)                           | ESLint rules for use with [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom).         | ✅           |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)             | ESLint plugin for [Testing Library](https://testing-library.com/docs/react-testing-library/intro). | ✅           |
