'use strict'

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    '@strv/react-native',
    '@strv/react-native/optional',
    '@strv/react-native/style',
    '@strv/eslint-config-typescript',
    '@strv/eslint-config-typescript/optional',
    '@strv/eslint-config-typescript/style',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'id-length': 'off',
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/namespace': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-extra-parens': 'off',
    'no-shadow': 'off',
    'operator-linebreak': 'off',
    'padding-line-between-statements': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react-native/no-raw-text': 'off',
  },
}
