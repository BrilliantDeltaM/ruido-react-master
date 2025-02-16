import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ruido-react-master/', // Cambia esto al subdirectorio donde se aloja tu app
  plugins: [react()],
});
