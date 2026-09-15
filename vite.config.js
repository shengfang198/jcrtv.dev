import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute base so OnRender/static hosts serve hashed JS with correct paths/MIME
  base: '/',
})
