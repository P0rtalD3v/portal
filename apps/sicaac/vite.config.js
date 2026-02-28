import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function serveVendorPlugin() {
  return {
    name: 'serve-vendor',
    enforce: 'pre',
    configureServer(server) {
      // Usamos um middleware genérico que verifica se a URL contém "/vendor/"
      server.middlewares.use((req, res, next) => {
        if (req.url.includes('/vendor/')) {
          // Extrai apenas o que vem depois de /vendor/
          const vendorPath = req.url.substring(req.url.indexOf('/vendor/') + 8).split('?')[0];
          const filePath = path.join(__dirname, '../../vendor', vendorPath);

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath);
            const mimeTypes = {
              '.css': 'text/css',
              '.js': 'application/javascript',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.svg': 'image/svg+xml',
              '.woff': 'font/woff',
              '.woff2': 'font/woff2',
              '.ttf': 'font/ttf',
              '.eot': 'application/vnd.ms-fontobject'
            };
            res.setHeader('Content-Type', mimeTypes[ext] || 'text/plain');
            res.setHeader('Access-Control-Allow-Origin', '*');
            return res.end(fs.readFileSync(filePath));
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), serveVendorPlugin()],
  base: '/sicaac/', 
  server: {
    port: 5174,
    fs: {
      allow: ['..'] 
    }
  }
});