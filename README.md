# `@combeenation/eslint-config`

> Combeenation ESLint base config for use in TS projects as well as JS projects using prettier.

## Usage

- Install:

  ```bash
  $ npm i --dev @combeenation/eslint-config
  ```

- Create new eslint config or add to `extends` section of existing eslint config.
  Example empty config using the package:

  ```js
  {
    "extends": ["@combeenation/eslint-config"],
    // The config does not set any kind of env...
    "env": {
      "browser": true,
      "es2021": true
    },
    "rules": {
      // Overwrite rules if needed...
    }
  }
  ```
  
## Sub dependencies

The config extends `eslint:recommended` & [@typescript-eslint/eslint-recommended](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) which don't need to be installed explicitly.
