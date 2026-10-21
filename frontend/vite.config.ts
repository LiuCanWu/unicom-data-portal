import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE_PATH ?? (command === 'build' ? '/unicom-data-portal/' : '/'),
  plugins: [vue()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
}))
