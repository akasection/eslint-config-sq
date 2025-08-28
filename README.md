# ESLint Config for akaSECTION (eslint-config-sq)

This is a flat ESLint config that has cherry-picked rules from multiple configs that suits akasection coding style.
It supports both vanilla JS/TS and Vue SFC.

## Installation

```bash
npm install --save-dev eslint @akasection/eslint-config-sq
```

## Usage
The config file is available under `dist` folder. It consists of three files:

- `dist/vanilla.mjs`: for vanilla JS/TS projects
- `dist/vue.mjs`: for Vue 3-based projects. Extends vanilla.
- `dist/nuxt.mjs`: For Nuxt 4 projects. Extends Vue. (for Nuxt 3, enable `app` directory config first from backport release)

Add to your eslint config file (`eslint.config.js` or `eslint.config.mjs`):

```ts
// @ts-check
import sqConfig from '@akasection/eslint-config-sq/dist/vue.mjs'
import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  ...sqConfig,
  // You can override rules here
})
```

For Nuxt, usually can be written like this (require `@nuxt/eslint-config` first):

```ts
// @ts-check
import sqConfig from '@akasection/eslint-config-sq/dist/nuxt.mjs'
import { withNuxt } from './.nuxt/eslint.config.mjs'

export default withNuxt(
  sqConfig,
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '.data/**',
      '.nuxt/**',
      '**/coverage/',
      'content.config.ts',
    ],
  }
)
```

# Contributing

Open your issue/PR here: https://github.com/akasection/eslint-config-sq/issues
