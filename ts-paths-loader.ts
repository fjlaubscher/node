import { readFileSync, existsSync, statSync } from 'fs';
import { pathToFileURL, fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf8'));
const paths = tsconfig.compilerOptions?.paths || {};
const aliasMap: { aliasPrefix: string; targetPrefix: string }[] = [];
for (const [aliasPattern, targets] of Object.entries(paths)) {
  if (aliasPattern.endsWith('/*') && Array.isArray(targets) && targets[0]?.endsWith('/*')) {
    const aliasPrefix = aliasPattern.slice(0, -2);
    const targetPrefix = targets[0].slice(0, -2);
    aliasMap.push({ aliasPrefix, targetPrefix });
  }
}

export async function resolve(specifier: string, context: any, nextResolve: any) {
  for (const { aliasPrefix, targetPrefix } of aliasMap) {
    if (specifier.startsWith(aliasPrefix + '/')) {
      const subPath = specifier.slice(aliasPrefix.length).replace(/^\/+/, '');
      let resolvedFile = path.resolve(__dirname, targetPrefix, subPath);
      if (existsSync(resolvedFile) && statSync(resolvedFile).isDirectory()) {
        resolvedFile = path.join(resolvedFile, 'index.ts');
      } else if (!path.extname(resolvedFile)) {
        resolvedFile += '.ts';
      }
      return nextResolve(pathToFileURL(resolvedFile).href, context);
    }
  }
  return nextResolve(specifier, context);
}
