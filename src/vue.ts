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
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        },
      },
    },
    rules: {
      /*
       * Disallow parsing errors in <template>
       */
      'vue/no-parsing-error': [
        'error',
        {
          'x-invalid-end-tag': false,
        },
      ],

      /*
       * <hello-component /> <- error. componnet must be written in PascalCase.
       */
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],

      /*
       * <template>
       *   <div></div>
       * </template>
       * <script> <- error. should add new line before <script>.
       * export default {}
       * </script>
       * <style></style> <- error. should add new line before <style>.
       */
      'vue/padding-line-between-blocks': 'error',

      /*
       * <div class="b a"></div> <- allowed. class names order is not important
       */
      'vue/static-class-names-order': 'off',

      /*
       * const arr = [ 'foo', 'bar' ] <- error. should delete the space after opening and before closing bracket
       *
       * const arr = [ 'foo', <- error. add new line
       *   'bar'
       * ];
       */
      'vue/array-bracket-spacing': 'error',

      /*
       * a == b <- error. use === operator.
       * bananas != 1 <- error. use !== operator.
       */
      'vue/eqeqeq': 'error',

      /*
       * const ComponentA = {
       *   name: 'ComponentA',
       * }
       *
       * export default ComponentA <- allowed. we don't have to directly export ComponentA from the start.
       */
      'vue/require-direct-export': 'off',

      /*
       * <button v-on:click="closeModal()"> <- allowed. no need to delete parentheses.
       *   Close
       * </button>
       */
      'vue/v-on-function-call': 'off',

      /*
       * <div> {{ foo() }} </div> <- error. calling expression inside mustache are forbidden.
       * <div> {{ foo.bar() }} </div> <- error. calling expression inside mustache are forbidden.
       */
      'vue/no-restricted-syntax': 'error',

      /*
       * Disallow irregular whitespace.
       */
      'vue/no-irregular-whitespace': 'error',

      /*
       * Define SFC block order.
       */
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],

      /*
       * Force component name to be multiple word except for index and main.
       */
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index', 'main'],
        },
      ],

      /*
       * <div id="myid" class="myclass" style="text-align: center" /> <- warned. should be written as multiline.
       */
      'vue/max-attributes-per-line': [
        'warn',
        {
          singleline: { max: 2 },
          multiline: { max: 1 },
        },
      ],
      /**
       * This rule is obsolete because it's already common practice in Vue 3
       * <template v-for="x in y" :key="x.id"> <- should be fine
       */
      'vue/no-v-for-template-key': 'off',
      /**
       * This was obsolete in Vue 3 as it's strictly designed for Vue 2
       *
       */
      'vue/no-v-model-argument': 'off',
      /**
       * This will allows multiple root under Vue template SFC.
       * Overrides below for disallow such behaviour in pages.
       *
       * <template>
       *   <div> </div>
       *   <div> </div>
       * </template>
       */
      'vue/no-multiple-template-root': 'off',

      /**
       * We want to make engineers avoid v-html as much as possible, but in some cases like yielding data from endpoint
       * can be tricky if not using v-html, so for now we let it.
       */
      'vue/no-v-html': 'warn',
    },
  }
)
