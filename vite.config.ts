import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import removeConsole from 'vite-plugin-remove-console';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    removeConsole(),
    svgr(),
    vanillaExtractPlugin(),
    react(),
    visualizer({
      open: true,
    }),
  ],
});
