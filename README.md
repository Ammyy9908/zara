# Zara-Inspired E-Commerce Homepage

A React + Vite rebuild of the Zara-inspired homepage: sticky header, product cards, collection gallery, and newsletter signup.

## Scripts

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build
npm run preview  # preview the production build
```

## Environment variables

Vite exposes variables prefixed with `VITE_` to the client via `import.meta.env`.

1. Copy `.env.example` to `.env`
2. Set a value:

```bash
VITE_AUTHOR_NAME=Your Name
```

3. Restart the dev server after changing `.env`

The author name is rendered in the footer credit. Do not put secrets in `VITE_*` variables — they are bundled into the client.

## Project structure

```
src/
  App.jsx
  data.js
  components/   Header, Hero, About, NewArrivals, Collections, Footer
  hooks/        useRevealOnScroll
  index.css
```
