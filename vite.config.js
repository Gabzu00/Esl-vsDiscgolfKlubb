import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      "/": "https://eslovsdiscgolf.onrender.com/"
=======
      "/": "http://localhost:3000/"
>>>>>>> 6ce557006621c67db86520e5af560b5ac8a8d57e
    }
  }
})
