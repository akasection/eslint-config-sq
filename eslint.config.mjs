import cfg from './dist/vanilla.mjs'
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  (cfg.default || cfg),
  globalIgnores([
    '.config/*',
    'dist/*',
    'node_modules/*',
    'eslint.config.mjs',
  ])
]);
