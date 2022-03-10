module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Variable decleration
    'no-var': 'warn',
    'one-var': ['error', { initialized: 'never' }],

    // Variable usage
    'no-unused-vars': ['off'],
    // Use typescript version of "no-unused-vars" rule, because the default rule doesn't recognize certain typescript
    // features like enumerations
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-use-before-define': ['error', { functions: false }],

    // TS specific things
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
  },
};
