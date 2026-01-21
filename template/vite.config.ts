import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  root: './',
  
  server: {
    port: 5000,
    open: true,
    strictPort: true,
    cors: true,
    proxy: {
      '/api':{
        target: 'localhost:8000',
        changeOrigin: true,
      },
    },
  },
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  
  base: './',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'assets': path.resolve(__dirname, './src/assets'),
      'interfaces': path.resolve(__dirname, './src/interfaces'),
      'network': path.resolve(__dirname, './src/network'),
      'constants': path.resolve(__dirname, './src/constants'),
      'configs': path.resolve(__dirname, './src/configs'),
    },
  },
  
  logLevel: 'error',

  plugins: [react()],
})
