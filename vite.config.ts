import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
      {
        name: 'copy-htaccess',
        closeBundle() {
          // Ensure .htaccess is copied to dist
          try {
            copyFileSync(
              join(__dirname, 'public', '.htaccess'),
              join(__dirname, 'dist', '.htaccess')
            );
            console.log('✓ .htaccess copied to dist');
          } catch (error) {
            console.warn('⚠ Could not copy .htaccess:', error);
          }
          // Ensure _redirects is copied to dist for AWS Amplify
          try {
            copyFileSync(
              join(__dirname, 'public', '_redirects'),
              join(__dirname, 'dist', '_redirects')
            );
            console.log('✓ _redirects copied to dist');
          } catch (error) {
            console.warn('⚠ Could not copy _redirects:', error);
          }
        },
      },
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});