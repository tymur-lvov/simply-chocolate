import react from '@vitejs/plugin-react';
import ignore from 'rollup-plugin-ignore';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [ignore(['./src/utils/generateBarrelFile/**'])],
    },
  },
  plugins: [react(), tsconfigPaths()],
});
