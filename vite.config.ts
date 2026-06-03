import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { join } from 'path';

// Pure 301-redirect routes (handled server-side by the CloudFront function).
// We skip pre-rendering them so we don't emit empty <Navigate> shells.
// Stored without a leading slash to match vite-react-ssg's path format.
const EXCLUDED_FROM_SSG = new Set([
  'impact-stories-details',
  'local-seo',
  'khushi-ngo-detail',
  'khushi-cause-details',
  'animal-emergency',
  'causes',
  'donate-for-education-india',
  'ngos/ngo-in-noida',
  'ngos/ngo-in-gurugram',
  // City NGO adjective variants → 301 to /ngos/best-ngo-in-{city} (CloudFront).
  'ngos/top-ngo-in-delhi',
  'ngos/verified-ngo-in-delhi',
  'ngos/trusted-ngo-in-delhi',
  'ngos/leading-ngo-in-delhi',
  'ngos/top-ngo-in-gurugram',
  'ngos/verified-ngo-in-gurugram',
  'ngos/trusted-ngo-in-gurugram',
  'ngos/leading-ngo-in-gurugram',
  'ngos/top-ngo-in-noida',
  'ngos/verified-ngo-in-noida',
  'ngos/trusted-ngo-in-noida',
  'ngos/leading-ngo-in-noida',
  'ngos/top-ngo-in-faridabad',
  'ngos/verified-ngo-in-faridabad',
  'ngos/trusted-ngo-in-faridabad',
  'ngos/leading-ngo-in-faridabad',
]);

// https://vitejs.dev/config/
export default defineConfig({
  ssgOptions: {
    dirStyle: 'nested',
    formatting: 'minify',
    includedRoutes(paths: string[]) {
      // Blog detail paths are supplied by getStaticPaths(); everything else is
      // a static route. Drop dynamic templates and pure redirect routes.
      return paths.filter((p) => {
        if (p.includes(':') || p.includes('*')) return false;
        const rel = p.replace(/^\//, '');
        return !EXCLUDED_FROM_SSG.has(rel);
      });
    },
  },
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },
    rollupOptions: {
      output: {
        // Function form so it safely no-ops during the SSR build (where
        // react/react-dom are externalized and absent from the module graph).
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('framer-motion')) return 'framer-motion';
          if (id.includes('/lenis/')) return 'lenis';
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/react-router') ||
            id.includes('/scheduler/')
          ) {
            return 'vendor';
          }
          return undefined;
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});