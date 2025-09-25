// export default defineConfig({
//   server: {
//     port: 5173, // or your frontend port
//     hmr: {
//       protocol: 'ws',
//       host: 'localhost',
//       port: 5173, 
//     },
//     proxy: {
//       '/api': 'http://localhost:10000',
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
