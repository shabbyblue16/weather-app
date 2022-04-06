module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  ignorePatters: ['bundle.js'],
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 'latest',
  //   sourceType: 'module',
  // },
  // plugins: [
  //   'react',
  // ],
  rules: {
    'no-undef': 0,
    'no-console': 0,
    'react/forbid-prop-types': 0,
  },
  setting: {
    react: {
      version: 'detect',
    },
  },
};
