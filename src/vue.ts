import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import vuefig from 'eslint-plugin-vue'
import globals from 'globals'
import vanillaCfg from './vanilla'

export default defineConfigWithVueTs(
  vanillaCfg,
  vuefig.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeCheckedOnly,
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: '@typescript-eslint/parser',
          '<template>': 'espree',
        },
      },
      globals: {
        ...globals['shared-node-browser'],
      },
    },
    settings: {
      'import/parsers': {
        'vue-eslint-parser': ['.vue'],
      },
      'import/resolver': {
        node: {
          paths: ['*'],
          extensions: ['.js', '.ts', '.vue', 'tsx', '.json'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'vue/no-parsing-error': [
        'error',
        {
          'x-invalid-end-tag': false,
        },
      ],

      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
      'vue/padding-line-between-blocks': 'error',
      'vue/static-class-names-order': 'off',
      'vue/array-bracket-spacing': 'error',
      'vue/eqeqeq': 'error',
      'vue/require-direct-export': 'off',
      'vue/v-on-function-call': 'off',
      'vue/no-restricted-syntax': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index', 'main'],
        },
      ],
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: { max: 4 },
          multiline: { max: 1 },
        },
      ],
      'vue/no-v-for-template-key': 'off',
      'vue/no-v-model-argument': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'warn',
    },
  }
)
