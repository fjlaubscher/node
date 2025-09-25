# Node TypeScript Template

This repository serves as a starter template for building Node.js applications using TypeScript with Node.js 22's native TypeScript execution. It includes essential configurations and tools to streamline development and testing.

## Available Scripts

- `pnpm lint` - Runs Prettier in check mode alongside the TypeScript compiler for type safety.
- `pnpm format` - Formats code using Prettier.
- `pnpm typecheck` - Executes the TypeScript compiler without emitting output.
- `pnpm test` - Executes tests using Vitest.

## Requirements

- Node.js 22 or later (for native TypeScript execution)
- pnpm package manager

The entry point for the application is `src/index.ts`. All TypeScript source files should reside in the `src` directory.

## Features

This template includes:

- **TypeScript**: For type-safe development with Node.js 22's native execution support.
- **Vitest**: A fast and lightweight testing framework.
- **Dotenv**: For managing environment variables via `.env` files.
- **Prettier**: For consistent code formatting.
- **Native TypeScript Runtime**: Run `.ts` entrypoints directly with Node.js 22, no loader or build step required.

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the example entrypoint:

   ```bash
   node index.ts
   ```

3. Run tests:

   ```bash
   pnpm test
   ```

## Project Structure

| File/Folder        | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `index.ts`         | Entry point that leverages Node.js 22's native TypeScript execution. |
| `LICENSE`          | License file for the project.                                        |
| `package.json`     | Contains project metadata and dependencies.                          |
| `README.md`        | Project documentation.                                               |
| `tsconfig.json`    | TypeScript configuration tuned for modern Node.js ESM projects.      |
| `vitest.config.ts` | Configuration for Vitest testing framework.                          |
| `vitest.setup.ts`  | Setup file for Vitest tests.                                         |
| `src/`             | All TypeScript source code goes here.                                |

## Native TypeScript Execution

Node.js 22 can parse and execute TypeScript files directly. This template leans on that capability so you can point `node` at any `.ts` entrypoint (such as the root `index.ts`) without an extra loader or compilation step.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.
