module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js'],
      extends: '@fenghan',
    },
    {
      files: ['*.ts'],
      extends: '@fenghan/eslint-config-ts',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    {
      files: ['*.tsx'],
      extends: '@fenghan/eslint-config-react',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
}
