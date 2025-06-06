import { readFileSync, existsSync, statSync } from 'fs';
import { pathToFileURL } from 'url';
import path from 'path';

const tsconfigPath = path.resolve('./tsconfig.json');
const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'));
const paths = tsconfig.compilerOptions?.paths || {};
const outDir = tsconfig.compilerOptions?.outDir || 'dist';
const rootDir = tsconfig.compilerOptions?.rootDir || 'src';

const aliasMap = [];
for (const [aliasPattern, targets] of Object.entries(paths)) {
  if (aliasPattern.endsWith('/*') && targets[0].endsWith('/*')) {
    const aliasPrefix = aliasPattern.slice(0, -2);
    const targetPrefix = targets[0].slice(0, -2);
    aliasMap.push({ aliasPrefix, targetPrefix });
  }
}

export async function resolve(specifier, context, nextResolve) {
  for (const { aliasPrefix, targetPrefix } of aliasMap) {
    if (specifier.startsWith(aliasPrefix)) {
      const subPath = specifier.slice(aliasPrefix.length).replace(/^\/+/, '');
      const distTarget = targetPrefix.replace(rootDir, outDir);
      let resolvedFile = path.resolve(distTarget, subPath);
      if (existsSync(resolvedFile) && statSync(resolvedFile).isDirectory()) {
        resolvedFile = path.join(resolvedFile, 'index.js');
      } else if (!path.extname(resolvedFile)) {
        resolvedFile += '.js';
      }
      return nextResolve(pathToFileURL(resolvedFile).href, context);
    }
  }
  return nextResolve(specifier, context);
}
