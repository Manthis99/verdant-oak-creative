import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        headshotPrep: fileURLToPath(new URL('./headshot-prep.html', import.meta.url)),
        springProperty: fileURLToPath(new URL('./419-n-spring-st.html', import.meta.url))
      }
    }
  }
});
