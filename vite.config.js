import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://malikoshhh.github.io/foodpoint/', // Замените на название вашего репо
})