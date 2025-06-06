import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Convert both arguments to file URLs
register(
  pathToFileURL(resolve(__dirname, './ts-paths-loader.mjs')),
  pathToFileURL(__dirname),
);

// Start the app
import('./dist/index.js');
