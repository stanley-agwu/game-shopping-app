/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      common: '/src/common',
      mocks: '/src/mocks',
      modules: '/src/modules',
      tests: '/src/tests',
      types: '/src/types',
      styles: '/src/styles',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    // For this config, check https://github.com/vitest-dev/vitest/issues/740
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    css: true,
    coverage: {
      all: true,
      exclude: [
        '**/public/**',
        '**/.eslintrc.cjs',
        '**/.prettierrc.cjs',
        '**/postcss.config.js',
        '**/tailwind.config.js',
        '**/main.tsx',
        '**/setupTests.ts',
        '**/browser.dev.ts',
        '**/browser.ts',
      ]
    }
  },
});
