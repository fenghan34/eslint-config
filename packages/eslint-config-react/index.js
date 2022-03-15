module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    '@fh/eslint-config-ts',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
