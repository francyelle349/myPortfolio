import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: 'https://francyelle349.github.io/myPortfolio',
  css: {
    postcss: './postcss.config.js',
  },
}


)