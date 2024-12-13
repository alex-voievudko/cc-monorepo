# CC Monorepo

Welcome to the **CC Monorepo**! This repository is designed to centralize the development of multiple applications and shared packages, making it easier to maintain, scale, and collaborate across projects. Built with modern tools and best practices, it leverages the power of **Turborepo** for efficient monorepo management.

---

## Table of Contents

1. [Monorepo Structure](#monorepo-structure)
2. [Tools and Setup](#tools-and-setup)
3. [Installation](#installation)
4. [Building and Running Apps with Docker](#building-and-running-apps-with-docker)
5. [Additional Notes](#additional-notes)

---

## Monorepo Structure

The repository is organized as follows:

### **Apps**

- **`web`**: The main web application.
- **`docs`**: Documentation site (served via Docker).
- **`admin`**: Admin dashboard for managing resources.
- **`storybook`**: Storybook setup for UI component development.

### **Packages**

- **`typescript-config`**: Shared TypeScript configurations.
- **`ui`**: Reusable UI components shared across apps.

---

## Tools and Setup

This monorepo uses the following tools to ensure a robust development workflow:

### **Core Tools**

- **[Turborepo](https://turbo.build/)**: High-performance build system for managing monorepos.
- **[pnpm](https://pnpm.io/)**: Fast and efficient package manager.

### **Developer Productivity**

- **[Biome](https://biomejs.dev/)**: All-in-one code formatter and linter.
- **[Husky](https://typicode.github.io/husky/)**: Git hooks for enforcing standards.
- **[Lint-staged](https://github.com/okonet/lint-staged)**: Runs linters on staged files before commits.
- **[Commitlint](https://commitlint.js.org/)**: Ensures commit messages follow a consistent format.
- **[Changesets](https://github.com/changesets/changesets)**: Manages versioning and changelogs for packages.

### **Application-Specific Tools**

- **[Docker](https://www.docker.com/)**: Containerized development and deployment.
  - Each app (`docs`, `web`, `admin`) has its own `Dockerfile`.

### **Testing**

- **[Jest](https://jestjs.io/)**: Testing framework.
- **[Testing Library](https://testing-library.com/)**: Testing utilities for React.

---

## Installation

Follow these steps to set up the monorepo:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/alex-voievudko/cc-monorepo.git
   cd cc-monorepo
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the apps**:

   ```bash
   pnpm run dev:admin
   pnpm run dev:docs
   pnpm run dev:web
   pnpm run dev:storybook
   ```

4. **Lint and format code**:

   Linting and formatting is enforced with [Biome](https://biomejs.dev/). You can run the following commands to check for linting errors, fix them and format the code all with a single command:

   ```bash
   pnpm run lint
   pnpm run lint:fix
   ```

5. **Run the tests**:
   ```bash
   pnpm run test
   ```

## Building and Running Apps with Docker

All apps can be run with Docker. The following commands will build and run the apps:

```bash
docker build -t admin-app -f apps/admin/Dockerfile .
docker run -p 3001:3001 admin-app
```

```bash
docker build -t docs-app -f apps/docs/Dockerfile .
docker run -p 3002:3002 docs-app
```

```bash
docker build -t web-app -f apps/web/Dockerfile .
docker run -p 3000:3000 web-app
```

## Additional Notes

This monorepo is just foundational setup that will require a some extra improvements. It's just a demo of how to setup a monorepo with Turborepo, pnpm, Biome, Husky, Commitlint, Lint-staged and Changesets.
