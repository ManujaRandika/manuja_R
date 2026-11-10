import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'),
        projects: new URL('./projects/index.html', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'),
      },
    },
  },
})
