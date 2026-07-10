import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const DEFAULT_SITE_URL = 'https://www.frameandlight.studio'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Fall back to a safe default so index.html's %VITE_SITE_URL% placeholder
  // never ships literally when no .env.local is present (e.g. a fresh clone
  // or a CI build that hasn't set the var yet).
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  process.env.VITE_SITE_URL = env.VITE_SITE_URL || DEFAULT_SITE_URL

  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
              return 'react-vendor'
            }
          },
        },
      },
    },
  }
})
