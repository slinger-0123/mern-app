import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://sharma-estate.vercel.app/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',  // Vite will output the build files into the 'dist' folder
  },
  plugins: [react()],
});
