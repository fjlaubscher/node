# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm start` - Run the application directly using Node.js 22's native TypeScript execution
- `pnpm test` - Run tests using Vitest
- `pnpm prettier:check` - Check for formatting errors using Prettier
- `pnpm prettier:format` - Format code using Prettier

## Architecture

Node.js TypeScript template using ES modules with Node.js 22's native TypeScript execution support. No build step required. Uses custom TypeScript path loader (`ts-paths-loader.ts`) to support `@/*` aliases at runtime. Main code in `src/` directory with entry point at `src/index.ts`.