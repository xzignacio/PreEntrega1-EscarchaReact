import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PreEntrega1+EscarchaReact/' // Reemplaza con el nombre de tu repositorio
})

