/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@sick-davinci/collage',
      fileName: (format) => `collage.${format}.js`,
    },
  },
  resolve: {
    alias: {
      '@sick-davinci/collage': '/src/index.ts',
    },
  },
});
