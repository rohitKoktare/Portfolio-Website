import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [],
  build: {
    chunkSizeWarningLimit: 3000,  // Adjust the limit to your needs
  }
})
