import preact from '@preact/preset-vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // User site (<user>.github.io) is served from the domain root.
  base: '/',
  plugins: [preact()],
})
