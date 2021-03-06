module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'jsdoc',
  ],
  rules: {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    'new-cap': 'off',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        'requireForBlockBody': true,
      },
    ],
    'require-jsdoc': 'off', // favor eslint-plugin-jsdoc
    'valid-jsdoc': 'off', // favor eslint-plugin-jsdoc
    'no-invalid-this': 'off', // prevent `this` false alarm on arrow functions
    'require-atomic-updates': 'off', // prevent async false alarm
    '@typescript-eslint/no-var-requires': 'off', // commonjs issue
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off' // prevent camelCase false alarm
  }
};
