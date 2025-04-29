import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  proxy: {
    '/': {
      target: 'http://localhost:5001',
      changeOrigin: true,
    },
  },
  plugins: [react()],
})
