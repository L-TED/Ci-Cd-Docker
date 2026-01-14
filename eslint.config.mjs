import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.node, ...globals.es2021 } },
  },

  // TypeScript (NestJS)
  ...tseslint.config(
    {
      files: ['**/*.ts'],
      languageOptions: {
        globals: { ...globals.node, ...globals.es2021 },
      },
    },
    ...tseslint.configs.recommended,
  ),

  // Jest tests
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
    languageOptions: {
      globals: { ...globals.jest, ...globals.node },
    },
  },
]);
