import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // base: '/mega/', // este se borra para subir al servidor de Mega principal

  plugins: [react()],
})
