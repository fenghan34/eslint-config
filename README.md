# <em><b>ESLint Config</b></em>

[![GitHub license](https://img.shields.io/github/license/fenghan34/eslint-config)](https://github.com/fenghan34/eslint-config/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@fenghan/eslint-config)](https://www.npmjs.com/package/@fenghan/eslint-config)

Monorepo for my sharable ESLint config.

## Usage

Install package.

```bash
$ npm install -D @fenghan/eslint-config eslint
```

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@fenghan',
}
```

## What's Inside

This configuration contains flowing packages.

| Package | Description | Auto Enabled |
| --------------------------------- | ---- | ------------ |
| [eslint-config-standard](https://github.com/standard/eslint-config-standard) | ESLint Config for JavaScript Standard Style |  |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) | Various awesome ESLint rules |  |
| [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)  | An ESLint plugin to extract and lint scripts from HTML files  |  |
| [eslint-plugin-jsonc](https://ota-meshi.github.io/eslint-plugin-jsonc/) | ESLint plugin for JSON, JSONC and JSON5 files |  |
| [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)  | Lint JavaScript code blocks in Markdown documents |  |
| [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml) | This ESLint plugin provides linting rules for YAML |  |
| [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) | ESLint plugin for TypeScript codebase |  |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) | React specific linting rules for ESLint |  |
| [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) | This ESLint plugin enforces the rules of hooks.  |  |
| [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) | Official ESLint plugin for Vue.js |  |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)  | ESLint plugin for Jest |  |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) | ESLint plugin for Testing Library |  |
| [eslint-config-prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) | ESLint plugin for Prettier formatting | ??? |

## License

[MIT](./LICENSE)
