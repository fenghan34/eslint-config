module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js'],
      extends: '@fenghan',
    },
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      extends: ['@fenghan/eslint-config-react', '@fenghan/eslint-config-vue'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
}
