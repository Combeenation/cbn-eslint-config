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

    // Overwrite rules which don't work for us

    // We sometimes use `let` instead of `const` even when ESLint "thinks" that `const` would be possible.
    // E.g. when initializing a variable with an array and mutating the array contents later on, this is technically
    // still a const but we tend to use `let` in such situations as that is IMHO more "semantically correct".
    'prefer-const': 'off',
  },
};
