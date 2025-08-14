import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    {
      builder: 'mkdist',
      ext: 'js',
      format: 'cjs',
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
