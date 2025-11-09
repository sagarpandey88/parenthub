# Parenting Journey (parenthub)

A lightweight, content-driven blog built with Astro and Tailwind CSS focused on pregnancy and early parenthood guidance.

## What this project is

This repository is an Astro site (static-first) that serves a parenting blog and resource hub. It uses:

- Astro (v5)
- Tailwind CSS
- @astrojs/rss and @astrojs/sitemap integrations
- Markdown content stored under `src/content/blog/` with schema validation via `src/content/config.ts`

The canonical site URL in `astro.config.mjs` is set to `TBD` and the dev server is configured to run on port `5000`.

## Tech stack

- Node.js (recommended v18+)
- Astro
- Tailwind CSS
- TypeScript (for content schema and utilities)

## Quick start

Prerequisites

- Node.js (v18 or later recommended)
- npm (or pnpm/yarn if you prefer)

Install dependencies

```bash
# from the project root
npm install
```

Run the dev server

```bash
npm run dev
```

This will start Astro in development mode. The project config sets the server host to `0.0.0.0` and port `5000`, so you can visit http://localhost:5000 (or your host as appropriate).

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

Other useful scripts (from `package.json`)

- `dev` — start development server (`astro dev`)
- `build` — build the site (`astro build`)
- `preview` — preview the built site (`astro preview`)

## Content structure

- All blog posts are Markdown files located at `src/content/blog/`.
- Content schema is defined in `src/content/config.ts`. Frontmatter fields include:
  - `title`, `description`, `category` (Pre-Pregnancy, Pregnancy, Post-Pregnancy), `tags`, `author`,
    `publishedDate`, optional `updatedDate`, optional `image` / `imageAlt`, `readingTime`, `featured`, `draft`, and optional `seo` object.

When adding new posts, follow the schema and filename convention used by the existing `.md` files.

## Helpful developer notes

- The site uses several components under `src/components/` (e.g., `HeroSection.astro`, `BlogCard.astro`, `Header.astro`, `Footer.astro`).
- Blog utilities and helpers live in `src/utils/blog.ts` (functions for pagination, search, reading time, excerpts, etc.).
- Global styles are in `src/styles/global.css` and Tailwind is configured via `tailwind.config.mjs`.
- RSS feed and sitemap are enabled (see `@astrojs/rss` and `@astrojs/sitemap`). There is a `pages/rss.xml.js` file for RSS generation.

## Configuration

- Site URL: `astro.config.mjs` -> `site: 'https://parentingjourney.com'`
- Dev server: host `0.0.0.0`, port `5000` (also reflected in Vite server options).

## Deployment

This is a static site (with some server-side content generation during build). Recommended hosting providers:

- Vercel — seamless Astro support and zero-config deployments
- Netlify — supports static builds and redirects
- GitHub Pages / Cloudflare Pages — for static builds

Deploy by running `npm run build` and following your host's instructions to serve the generated `dist/` folder (or connect your repo for automatic builds).

## Contributing

1. Fork the repository and create a feature branch.
2. Add content under `src/content/blog/` or update components/styles.
3. Ensure new posts follow the schema in `src/content/config.ts`.
4. Run the dev server and verify your changes locally.
5. Open a pull request describing your changes.

## License

This project does not include a license file in the repository. Add a `LICENSE` file (for example, MIT) if you plan to publish or allow reuse.

## Where to look next

- `src/pages/` — page routes and page-level logic
- `src/components/` — UI building blocks
- `src/content/` — content collections and markdown files
- `astro.config.mjs` & `tailwind.config.mjs` — site and styling configuration

If you want, I can also:

- add a `LICENSE` file (MIT/Apache/etc.)
- add a small CONTRIBUTING.md with PR/checklist guidance
- add simple GitHub Actions workflow to build/deploy the site

---

Generated on November 9, 2025 — if you'd like edits or a different README tone (shorter/longer), tell me what to emphasize.
