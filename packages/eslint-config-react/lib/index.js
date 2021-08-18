const dependencies = require('./get-dependencies')()

const hasJest = dependencies.includes('jest')
const hasJestDom = dependencies.includes('@testing-library/jest-dom')
const hasTestingLibrary =
  dependencies.includes('@testing-library/react') ||
  dependencies.includes('@testing-library/react-hooks')

/**
 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [
    hasJest && 'jest',
    hasJestDom && 'jest-dom',
    hasTestingLibrary && 'testing-library',
  ].filter(Boolean),
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@fenghan/eslint-config-ts',
    hasJest && 'plugin:jest/recommended',
    hasJest && 'plugin:jest/style',
    hasJestDom && 'plugin:jest-dom/recommended',
    hasTestingLibrary && 'plugin:testing-library/react',
  ].filter(Boolean),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
