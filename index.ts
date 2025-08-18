#!/usr/bin/env node

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

// Register the TypeScript path loader
register(pathToFileURL(resolve(import.meta.dirname, 'ts-paths-loader.ts')));

// Import and run the main server
await import('./src/index.ts');
