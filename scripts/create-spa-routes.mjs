import { mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';

const routes = ['blogs', 'safety', 'careers', 'support', 'volunteer', 'gallery', 'donor', 'admin'];
const indexFile = join(process.cwd(), 'dist', 'index.html');

for (const route of routes) {
  const routeDir = join(process.cwd(), 'dist', route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(indexFile, join(routeDir, 'index.html'));
}

console.log(`Created static SPA entry points: ${routes.map((route) => `/${route}`).join(', ')}`);
