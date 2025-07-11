import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    base: "https://raaronpgomez.github.io/generador-de-excusas",
    // Specify the output directory for the build. This path is relative to your project root.
    outDir: '../dist',
  },
  server: {
    port: 3000,
  },
});