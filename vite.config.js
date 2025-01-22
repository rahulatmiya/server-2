import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import crypto from 'crypto-browserify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:9191
  },
  
  optimizeDeps: {
    include: ['crypto-browserify'],
  },
})
