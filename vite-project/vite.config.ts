import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
 resolve: {
  alias: {
    '@heroicons/react': 'heroicons/react/dist/types',
  },
},

  plugins: [react()],
})

