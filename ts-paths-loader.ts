import { readFileSync, existsSync, statSync } from 'fs';
import { pathToFileURL, fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'));
const paths = tsconfig.compilerOptions?.paths || {};
const aliasMap: { aliasPrefix: string; targetPrefix: string }[] = [];

for (const [aliasPattern, targets] of Object.entries(paths)) {
  const targetArr = targets as string[];
  if (aliasPattern.endsWith('/*') && targetArr[0].endsWith('/*')) {
    const aliasPrefix = aliasPattern.slice(0, -2);
    const targetPrefix = targetArr[0].slice(0, -2);
    aliasMap.push({ aliasPrefix, targetPrefix });
  }
}

export async function resolve(specifier, context, nextResolve) {
  // Handle aliased paths
  for (const { aliasPrefix, targetPrefix } of aliasMap) {
    if (specifier.startsWith(aliasPrefix + '/')) {
      const subPath = specifier.slice(aliasPrefix.length).replace(/^\/+/, '');
      let resolvedFile = path.resolve(__dirname, targetPrefix, subPath);

      // Check if the file exists as-is
      if (existsSync(resolvedFile)) {
        if (statSync(resolvedFile).isDirectory()) {
          resolvedFile = path.join(resolvedFile, 'index.ts');
        }
        // Verify the final resolved file exists before returning
        if (existsSync(resolvedFile)) {
          return nextResolve(pathToFileURL(resolvedFile).href, context);
        }
      } else if (!path.extname(resolvedFile)) {
        // Try adding .ts extension if no extension is present
        const tsFile = resolvedFile + '.ts';
        if (existsSync(tsFile)) {
          return nextResolve(pathToFileURL(tsFile).href, context);
        }
      }
    }
  }

  // Handle relative imports that need .ts extension
  if (specifier.startsWith('./') || specifier.startsWith('../')) {
    const parentUrl = context.parentURL;
    if (parentUrl && parentUrl.startsWith('file://')) {
      const parentPath = fileURLToPath(parentUrl);
      const parentDir = path.dirname(parentPath);
      let resolvedFile = path.resolve(parentDir, specifier);

      // If no extension and file doesn't exist, try .ts
      if (!path.extname(resolvedFile) && !existsSync(resolvedFile)) {
        const tsFile = resolvedFile + '.ts';
        if (existsSync(tsFile)) {
          return nextResolve(pathToFileURL(tsFile).href, context);
        }
      }
    }
  }

  return nextResolve(specifier, context);
}
