# Monorepo Boilerplate

My TypeScript **monorepo setup** managed with **Turborepo** and **pnpm**, made for multi-package development (i.e. web and server).

---

## Apps and Packages

### Applications

1. `template-web` - React Frontend
2. `template-server` - Node.js Express Backend

### Packages

1. `template-shared` - Shared Library for `template` applications
2. `generic-components` - Generic Component library for all applications
3. `generic-shared` - Generic Library for all applications
4. `config-typescript` - TypeScript configuration for all applications

---

## Getting Started

1. Clone the Repository: `git clone <repository-url> cd monorepo-boilerplate`
2. Install Dependencies: `pnpm install` (Make sure you have **Node.js (≥ 18)** and **pnpm 10.15.1** installed)
3. Clean the Workspace: `pnpm clean`
4. Run Applications in Development
   1. Run the React Application: `pnpm dev:web`
   2. Run the Express Server: `pnpm dev:server`

---

## Deployment

### Applications

#### `template-web`

1. Update the `deploy` script inside `apps/template-web/package.json` to match your deployment target
2. Once your deployment command is updated, run: `pnpm deploy:web`

#### `template-server`

1. **🚧Work-in-progress🚧**
