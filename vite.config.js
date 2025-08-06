import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/',  // ✅ This is correct for your repo name
  plugins: [react()],
})
