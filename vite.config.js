import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this project at https://<user>.github.io/shoesEcommerce-ui/
// so all built asset URLs must be prefixed with the repo name. Override with
// VITE_BASE=/ at build time (e.g. for a root or custom-domain deploy).
const base = process.env.VITE_BASE ?? '/shoesEcommerce-ui/'

// Emit a 404.html that mirrors index.html. GitHub Pages serves this file for
// any unknown path; once the SPA loads, React Router takes over and renders
// the correct route. Pure file copy — no JS redirect, no window.location use.
function emitSpaFallback() {
  return {
    name: 'emit-spa-404',
    apply: 'build',
    closeBundle() {
      const out = resolve(process.cwd(), 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), emitSpaFallback()],
  build: {
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
})
