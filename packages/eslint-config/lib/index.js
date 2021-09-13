const dependencies = require('./get-dependencies')()

const hasPrettier = dependencies.includes('prettier')

/**
 * ESlint configs for JavaScript.
 *
 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
 * @see https://github.com/xjamundx/eslint-plugin-promise
 */
module.exports = {
  extends: ['airbnb-base', hasPrettier && 'prettier'].filter(Boolean),
  plugins: ['promise'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'max-classes-per-file': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    /**
     * Enforce best practices for JavaScript promises.
     */
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
  },
}
