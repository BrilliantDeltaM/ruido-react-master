import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detecta si el entorno es GitHub Pages o Vercel
const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS;
const base = isGitHubPages ? '/ruido-react-master/' : '/'; // Cambia "ruido-react-master" por tu repo

export default defineConfig({
  plugins: [react()],
  base,
});
