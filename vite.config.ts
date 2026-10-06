import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://basaltostudio.com',
      dynamicRoutes: ['/privacidad'],
      // public/robots.txt is hand-written; don't let the plugin overwrite it
      generateRobotsTxt: false,
    }),
  ],
})
