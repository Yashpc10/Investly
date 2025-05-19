import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Investly/', // 👈 Set this to your repo name
  plugins: [react()],
})
