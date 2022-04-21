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
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_', args: 'none' }],
    'no-use-before-define': ['warn'],

    // Prettier takes care of max length in code and eslint warns about prettier warnings due to the rule
    // 'prettier/prettier'. Setting max-len to 120 for code here would add some linter warnings in code where prettier
    // does not obey to the 120 char line length, so we're "supressing" it with 1000...
    'max-len': ['warn', { code: 1000, comments: 120 }],

    // Misc
    'no-empty': ['warn', { allowEmptyCatch: true }],

    // TS specific things
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
};
