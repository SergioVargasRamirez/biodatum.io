import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/* global process */
// Set BASE_PATH=/repo-name/ when deploying to username.github.io/repo-name (not needed with a custom domain)
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
