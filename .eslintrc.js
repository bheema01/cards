module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb',
      'prettier',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'import', 'jsx-a11y'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
      'import/imports-first': ['error', 'absolute-first'],
    },
  };