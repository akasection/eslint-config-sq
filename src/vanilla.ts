import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

// Force type reference during compile time
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { TSESLint } from '@typescript-eslint/utils'

import importPlugin from 'eslint-plugin-import'
import imhelpPlugin from 'eslint-plugin-import-helpers'
import promisePlugin from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint, { type ConfigArray } from 'typescript-eslint'


export default <ConfigArray>tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  unicorn.configs.recommended,
  promisePlugin.configs['flat/recommended'],
  {
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          paths: ['*'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
        },
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        },
      },
    },
    plugins: {
      '@stylistic': stylistic,
      'import-helpers': imhelpPlugin,
    },
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.ts', '*.mjs', '*.mts', '*.cts', '*.js', '*.jsx', '*.tsx', '*.cjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
    /**********************/
    /*    General Rules   */
    /**********************/
    'prefer-exponentiation-operator': 'error',
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: false }],
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'time', 'timeEnd', 'table'] }],
    'require-await': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'no-useless-rename': 'error',
    'prefer-object-spread': 'warn',
    'no-prototype-builtins': 'warn',
    'no-mixed-operators': 'error',
    'dot-notation': 'warn',
    'block-spacing': 'error',
    'space-in-parens': 'error',
    'comma-style': ['error', 'last'],
    'key-spacing': 'error',
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],

    /////////////////////////////
    // Typescript/Stylistic Rules
    /////////////////////////////

    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@stylistic/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'none', // 'none' or 'semi' or 'comma'
        },
        singleline: {
          delimiter: 'semi', // 'semi' or 'comma' (dont use 'comma', because it conflicts with prettier rule)
          requireLast: false,
        },
      },
    ],
    semi: 'off',
    '@stylistic/semi': ['error', 'never'],
    'comma-dangle': 'off',
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'comma-spacing': 'off',
    '@stylistic/comma-spacing': 'error',

    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'object-curly-spacing': 'off',
    '@stylistic/object-curly-spacing': ['error', 'always'],
    quotes: 'off',
    '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: 'always' }],
    'space-before-function-paren': 'off',
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'func-call-spacing': 'off',
    '@stylistic/function-call-spacing': ['error', 'never'],
    'space-infix-ops': 'off',
    '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
    '@typescript-eslint/consistent-type-imports': 'warn',

    /////////////////////////////
    // Import Rules
    /////////////////////////////

    'import/order': 'off',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'off',

    /////////////////////////////
    // Import Helpers
    /////////////////////////////

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'ignore',
        groups: ['module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],

    /////////////////////////////
    //  Promise Rules
    /////////////////////////////

    'promise/always-return': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'warn',

    /////////////////////////////
    // Unicorn Rules
    /////////////////////////////

    'unicorn/better-regex': 'warn',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/no-null': 'warn',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/filename-case': [
      'error',
      {
        ignore: [String.raw`\.test\.ts$`, String.raw`\.md$`],
        cases: {
          kebabCase: true,
          pascalCase: true,
          camelCase: true,
          snakeCase: false,
        },
      },
    ],
    'unicorn/expiring-todo-comments': 'warn',
    },
  }
)
