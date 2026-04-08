import http from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const port = Number(process.env.PORT || 4173);

const contentTypes = {
    '.html': 'text/html; charset=UTF-8',
    '.js': 'text/javascript; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

function sendFile(filePath, response) {
    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
        'Content-Type': contentTypes[ext] || 'application/octet-stream',
    });
    createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
    const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
    const safePath = requestPath === '/' ? '/index.html' : requestPath;
    const filePath = path.normalize(path.join(distDir, safePath));

    if (!filePath.startsWith(distDir)) {
        response.writeHead(403);
        response.end('Forbidden');
        return;
    }

    try {
        const fileStat = await stat(filePath);

        if (fileStat.isFile()) {
            sendFile(filePath, response);
            return;
        }
    } catch {
        // fall through to SPA-ish fallback below
    }

    const fallbackPath = path.join(distDir, 'index.html');

    if (existsSync(fallbackPath)) {
        sendFile(fallbackPath, response);
        return;
    }

    response.writeHead(404);
    response.end('Not found');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
