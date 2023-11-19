module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'react-refresh'
    '@typescript-eslint',
    'simple-import-sort',
  ],
  rules: {
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        'callbacksLast': true,
        'shorthandFirst': true,
        'ignoreCase': true,
        'reservedFirst': true,
        'noSortAlphabetically': true
      }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.eslint.json',
    'ecmaVersion': 2021,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'settings': {
    'react': {
      'version': 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'project': './tsconfig.eslint.json',
        'alwaysTryTypes': true
      }
    }
  },
  'overrides': [
    {
      'files': ['./src/**/*.spec.ts?(x)'],
      'extends': [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react'
      ],
      'plugins': ['jest', 'jest-dom', 'testing-library'],
      'rules': {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'jest-dom/prefer-checked': 'error',
        'jest-dom/prefer-enabled-disabled': 'error',
        'jest-dom/prefer-required': 'error',
        'jest-dom/prefer-to-have-attribute': 'error',
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-dom-import': 'off'
      },
      'env': {
        'jest/globals': true // enable Jest global variables.
      }
    },
    {
      'files': ['./cypress/**/*.cy.ts'],
      'extends': ['plugin:cypress/recommended'],
      'plugins': ['cypress'],
      'rules': {
        'cypress/no-force': 'warn',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/require-data-selectors': 'warn',
        'cypress/no-pause': 'error'
      },
      'env': {
        'cypress/globals': true // enable Cypress global variables.
      }
    }
  ]
}
