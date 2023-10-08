import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Task5",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["redux-persist"],
    },
  },
  
})
