import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sotrue/', // 👈 VERY IMPORTANT
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["jwt-decode"],
  },
})
