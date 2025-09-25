# AGENTS.md

Guidance for any coding agent collaborating on this repository.

## Development Commands

- `pnpm lint` - Verify formatting and type safety in one pass.
- `pnpm format` - Format source files with Prettier.
- `pnpm typecheck` - Run the TypeScript compiler in no-emit mode.
- `pnpm test` - Execute the Vitest suite.

## Architecture Notes

- Runtime targets Node.js >=22 with native `.ts` execution; no transpile step or custom loader is required.
- The project uses ECMAScript modules (`"type": "module"`) and has its entry point in `src/index.ts`.
- TypeScript configuration is tuned for modern Node.js ESM (`tsconfig.json`), with strictness enabled and no path aliases.
- Tests reside under `src/` and run with Vitest using the standard Node test environment.

## Agent Tips

- Keep imports relative; path aliases are intentionally omitted to simplify runtime resolution.
- Prefer updating `src/index.ts` and colocated modules; the root `index.ts` simply forwards to the source entrypoint.
- When adding runtime dependencies, ensure they are compatible with ESM and Node.js 22 native TypeScript support.
- Maintain linting and formatting expectations before finishing significant changes.

## Verification

- Run `pnpm lint` after modifying code to confirm formatting and type safety.
- Always run `pnpm test` after changing behaviour that affects the test suite.
- Consider running `node index.ts` for manual smoke checks when touching the entry flow.
