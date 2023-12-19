module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'no-unused-vars': 2,
    'sort-imports': 0,
    'import/order': 2,
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          // react and react scoped imports first, and then other packages
          ['^react', '^[a-zA-Z]'],
          // Packages starting with '@'
          ['^@'],
          // Packages starting with '~'
          ['^~'],
          // Side effects imports
          ['^\\u0000'],
          // Other local absolute imports
          ['^common', '^mocks', '^modules', '^tests'],
          // Relative imports
          ['^\\.'],
          // Parent relative imports '../'
          ['^\\.{2}/(?!.*\\.(css|s[ac]ss)$).+$'],
          // Siblings relative imports './'
          ['^\\./(?!.*\\.(css|s[ac]ss)$).+$'],
          // Styles imports
          ['\\.(css|s[ac]ss)$'],
        ],
      },
    ],
  },
  ignorePatterns: ['build/*', 'coverage/*', 'public/*'],
};
