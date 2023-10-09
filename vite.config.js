import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/task5Educat",
  plugins: [react()],
  build: {
    
    rollupOptions: {
      external: ["redux-persist/integration/react"],
    },
  
  },
  
})
