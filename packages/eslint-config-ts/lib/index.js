/**
 * ESlint configs for TypeScript.
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 * @see https://github.com/import-js/eslint-plugin-import#typescript
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@fenghan',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    // https://github.com/import-js/eslint-plugin-import#settings
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L14
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.0/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.30.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': [
      'error',
      {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md#how-to-use
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

    //
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['camelCase', 'UPPER_CASE'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/no-cycle': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/karma.conf.js', // karma config
        ],
        optionalDependencies: false,
      },
    ],
  },
}
