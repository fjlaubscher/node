# Node TypeScript Template

This repository serves as a starter template for building Node.js applications using TypeScript. It includes essential configurations and tools to streamline development and testing.

## Available Scripts

- `yarn build` – Compiles TypeScript files into JavaScript and outputs them to the `dist` folder.
- `yarn dev` – Starts the application in watch mode using `tsx` for live reloading.
- `yarn start` – Runs the compiled JavaScript output from the `dist` folder.
- `yarn test` – Executes tests using Vitest.
- `yarn format` – Formats code files using Prettier.

## Requirements

- Node.js 22 or later
- TypeScript

The entry point for the application is `src/index.ts`. All TypeScript source files should reside in the `src` directory.

## Features

This template includes:

- **TypeScript**: For type-safe development.
- **Vitest**: A fast and lightweight testing framework.
- **Dotenv**: For managing environment variables via `.env` files.
- **Prettier**: For consistent code formatting.

## Getting Started

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Start development:

   ```bash
   yarn dev
   ```

3. Build the project:

   ```bash
   yarn build
   ```

4. Run tests:
   ```bash
   yarn test
   ```

## Project Structure

| File/Folder           | Description                                                               |
| --------------------- | ------------------------------------------------------------------------- |
| `index.mjs`           | Entry point for the Node.js runtime, sets up the TypeScript paths loader. |
| `LICENSE`             | License file for the project.                                             |
| `package.json`        | Contains project metadata and dependencies.                               |
| `README.md`           | Project documentation.                                                    |
| `ts-paths-loader.mjs` | Loader for resolving TypeScript path aliases at runtime.                  |
| `tsconfig.json`       | TypeScript configuration file, including path alias definitions.          |
| `vitest.config.ts`    | Configuration for Vitest testing framework.                               |
| `vitest.setup.ts`     | Setup file for Vitest tests.                                              |
| `src/*`               | All TypeScript source code goes here.                                     |

## Loader Functionality

The `ts-paths-loader.mjs` file is a critical component of this template. It ensures that TypeScript path aliases defined in `tsconfig.json` are resolved correctly at runtime. Without this loader, Node.js would not recognize these aliases, leading to module resolution errors.

### Why is it Necessary?

TypeScript allows developers to define custom path aliases in `tsconfig.json` to simplify imports and improve code organization. However, these aliases are not natively supported by Node.js. The loader bridges this gap by dynamically mapping the aliases to their corresponding file paths during runtime, ensuring seamless compatibility between TypeScript and Node.js.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.
