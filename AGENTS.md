# AGENTS.md

Guidance for any coding agent collaborating on this repository.

## Development Commands

- `pnpm start` – Run the application with Node.js 22's native TypeScript execution.
- `pnpm test` – Execute the Vitest suite.
- `pnpm prettier:check` – Verify formatting with Prettier.
- `pnpm prettier:format` – Format code using Prettier.

## Architecture Notes

- Runtime targets Node.js ≥22 with native `.ts` execution; no transpile step or custom loader is required.
- The project uses ECMAScript modules (`"type": "module"`) and has its entry point in `src/index.ts`.
- TypeScript configuration is tuned for modern Node.js ESM (`tsconfig.json`), with strictness enabled and no path aliases.
- Tests reside under `src/` and run with Vitest using the standard Node test environment.

## Agent Tips

- Keep imports relative; path aliases are intentionally omitted to simplify runtime resolution.
- Prefer updating `src/index.ts` and colocated modules; the root `index.ts` simply forwards to the source entrypoint.
- When adding runtime dependencies, ensure they are compatible with ESM and Node.js 22 native TypeScript support.
- Maintain formatting and lint expectations via Prettier before finishing significant changes.

## Verification

- Always run `pnpm test` after modifying logic that affects behaviour.
- Consider `pnpm start` for manual smoke checks when touching the entry flow.
