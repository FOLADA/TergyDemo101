// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';  // 

export default defineConfig({
  plugins: [
    nodePolyfills(),  // polyfill `events`, `buffer`, etc.
    react(),
  ],
  resolve: {
    alias: {
      // (optional) if you need to alias specific modules
      // events: 'events/'
    }
  }
});
