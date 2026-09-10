const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, 'build');
const port = Number(process.env.PORT) || 3000;

const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function sendFile(response, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Unable to load the requested page.');
      return;
    }

    response.writeHead(200, {
      'Content-Type': types[path.extname(filePath)] || 'application/octet-stream',
    });
    response.end(content);
  });
}

http.createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const candidate = path.resolve(root, `.${requestPath}`);
  const safePath = candidate.startsWith(`${root}${path.sep}`) ? candidate : root;

  fs.stat(safePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(response, safePath);
      return;
    }

    // Let React Router handle client-side routes.
    sendFile(response, path.join(root, 'index.html'));
  });
}).listen(port, '0.0.0.0', () => {
  console.log(`BuildWebCanada is running on port ${port}`);
});
