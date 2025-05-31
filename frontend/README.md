# SPAR Frontend

This is the frontend for the SPAR GenAI Evaluation Platform, built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Install dependencies

```sh
npm install
```

### 2. Start the development server

```sh
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).
- Hot Module Reloading (HMR) is enabled for fast feedback.

### 3. Lint the code

```sh
npm run lint
```

- Uses ESLint with recommended rules for TypeScript and React.

### 4. Run tests
```sh
npx vitest
```

- Uses [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/).

## Building for Production

To create an optimized production build:

```sh
npm run build
```

- This runs TypeScript type checking and builds the app with Vite.
- Output will be in the `dist/` folder.

To preview the production build locally:

```sh
npm run preview
```

- Serves the built app at [http://localhost:4173](http://localhost:4173) by default.

## Project Structure

- `src/` – Application source code
  - `components/` – Reusable UI components
  - `pages/` – Page-level components and route modules
  - `styles/` – Global styles (Tailwind CSS)
- `test/` – Unit and integration tests
- `public/` – Static assets (if needed)
- `index.html` – Main HTML entry point

## Configuration

- **Vite**: See [`vite.config.ts`](vite.config.ts)
- **TypeScript**: See [`tsconfig.app.json`](tsconfig.app.json)
- **ESLint**: See [`eslint.config.js`](eslint.config.js)
- **Tailwind CSS**: See [`src/styles/index.css`](src/styles/index.css)

## Notes

- This project uses [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc) for fast refresh and SWC-based compilation.
- Tailwind CSS is integrated via [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite).
- For expanding ESLint rules, see the [README section](README.md#expanding-the-eslint-configuration).

---

For any issues or questions, please refer to the documentation or open an issue in the repository.