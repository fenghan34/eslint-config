/**
 * Stylelint configs.
 *
 * @see https://stylelint.io/
 * @see https://github.com/stylelint/stylelint-config-standard
 * @see https://github.com/prettier/stylelint-config-prettier
 * @see https://github.com/kristerkari/stylelint-scss
 * @see https://github.com/hudochenkov/stylelint-order
 * @see https://github.com/constverum/stylelint-config-rational-order
 */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    // order
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],

    // quotes
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',

    // nesting-depth
    'max-nesting-depth': [
      2,
      { ignore: ['blockless-at-rules', 'pseudo-classes'] },
    ],

    // compound-selectors
    'selector-max-compound-selectors': 3,

    // no-schema-relative
    'function-url-no-scheme-relative': true,
  },
}
