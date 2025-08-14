import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    {
      builder: 'mkdist',
      ext: 'mjs',
      format: 'mjs',
      input: './src',
      outDir: './dist',
    },
  ],
  failOnWarn: false,
  externals: [
    '@vue/eslint-config-typescript',
    'globals',
    'espree',
    '@typescript-eslint/parser',
    '@typescript-eslint/utils',
    'vue-eslint-parser',
  ],
})
