import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Plugin para simular o Nginx localmente e servir a pasta vendor da raiz
function serveVendorPlugin() {
  return {
    name: 'serve-vendor',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use('/vendor', (req, res, next) => {
        // Remove query strings da URL (ex: ?v=1.0) para achar o arquivo físico
        const cleanUrl = req.url.split('?')[0];
        const filePath = path.join(__dirname, '../../vendor', cleanUrl);

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
          res.end(fs.readFileSync(filePath));
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), serveVendorPlugin()],
  base: '/', 
  server: {
    port: 5173,
    fs: {
      allow: ['..'] // Permite acessar a pasta vendor acima de apps/portal
    }
  }
});