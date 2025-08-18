# Node TypeScript Template

This repository serves as a starter template for building Node.js applications using TypeScript with Node.js 22's native TypeScript execution. It includes essential configurations and tools to streamline development and testing.

## Available Scripts

- `pnpm start` – Runs the application directly using Node.js 22's native TypeScript support.
- `pnpm test` – Executes tests using Vitest.
- `pnpm format` – Formats code files using Prettier.

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
- **Path Aliases**: Custom TypeScript path aliases (`@/*`) supported at runtime.

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the application:

   ```bash
   pnpm start
   ```

3. Run tests:
   ```bash
   pnpm test
   ```

## Project Structure

| File/Folder         | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| `index.ts`          | Entry point that leverages Node.js 22's native TypeScript execution.  |
| `index.mjs`         | Module loader setup for TypeScript path resolution.                   |
| `LICENSE`           | License file for the project.                                         |
| `package.json`      | Contains project metadata and dependencies.                           |
| `README.md`         | Project documentation.                                                |
| `ts-paths-loader.ts`| TypeScript loader for resolving path aliases at runtime.             |
| `tsconfig.json`     | TypeScript configuration file, including path alias definitions.      |
| `vitest.config.ts`  | Configuration for Vitest testing framework.                           |
| `vitest.setup.ts`   | Setup file for Vitest tests.                                          |
| `src/`              | All TypeScript source code goes here.                                 |

## TypeScript Path Resolution

This template uses a custom TypeScript path loader (`ts-paths-loader.ts`) to support TypeScript path aliases at runtime. The loader ensures that aliases defined in `tsconfig.json` (like `@/*`) are resolved correctly when running TypeScript directly with Node.js 22.

### How it Works

Node.js 22's native TypeScript execution combined with the custom loader allows for seamless use of TypeScript path aliases without requiring a separate build step. This provides a more streamlined development experience while maintaining the benefits of organized imports.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.
