import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Customer Survey',
      },
      icons: [
        {
          src: './icons/logo48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: './icons/logo144.png',
          sizes: '144x144',
          type: 'image/png',
        },
      ],
    }),
  ],
})
