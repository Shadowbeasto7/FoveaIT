import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      // Redirect all lottie-web imports to the lightweight SVG-only build
      // lottie_light is ~48% smaller than the full lottie.js bundle
      'lottie-web': path.resolve('./node_modules/lottie-web/build/player/lottie_light.js'),
    },
  },
})
