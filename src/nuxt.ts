import {
  defineConfigWithVueTs,
} from '@vue/eslint-config-typescript'
import vue3Cfg from './vue'

export default defineConfigWithVueTs(
  vue3Cfg,
  {
    files: ['app/layouts/**', 'app/pages/**', 'app/components/**', 'app.vue', 'error.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  {
    files: ['app/components/*.vue'],
    rules: { 'vue/multi-word-component-names': 'error' },
  },
  {
    files: ['app/pages/**'],
    rules: { 'unicorn/filename-case': 'off' },
  },
  {
    files: ['app/composables/*.ts'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
          },
        },
      ],
    },
  },
)
