# ↗️ Elevation Marketing Website

This is the newly created website for the brand Elevation Marketing.
It uses the [Nuxtship - Nuxt SAAS Starter Website Template](https://github.com/Gr33nW33n/nuxtship-template) as a base.
It's build with:

- Nuxt 4.4.8
- Tailwind 4.3.1
- @tailwindcss/typography 0.5.20
- @nuxt/image 2.0
- @nuxt/icon 2.2.4
- @nuxtjs/seo 5.3.1
- nuxt-og-image 6.7.0

## Nuxtship - Nuxt SAAS Starter Website Template

Nuxtship is a free starter nuxt website template for saas, startups, marketing websites & landing pages. Built with Nuxt & TailwindCSS.

This Free Template is sponsored by [jakob-aichmayr.pages.dev](https://jakob-aichmayr.pages.dev/)

## Live Demo

🔗 [Live GitHub Preview](https://sbt-solutions-ltd.github.io/elevation-marketing/)

## Built with Nuxt 3 Minimal Starter

The Nuxtship - Nuxt SAAS Starter Website Template is build on top of the Nuxt 3 Minimal Starter.
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 🚀 Deployment

The site has **two deploy targets**. `nuxt.config.ts` adapts to each one
automatically — base path, canonical/SEO origin, `robots.txt` and the Web3Forms
key are all chosen from the resolved base URL (`isGhPagesDeploy`):

| Target                   | URL                                            | Base path               | How to deploy                |
| ------------------------ | ---------------------------------------------- | ----------------------- | ---------------------------- |
| **Production**           | https://elevation-marketing.net/               | `/`                     | build locally, upload by FTP |
| **GitHub Pages preview** | https://sbt-solutions-ltd.github.io/elevation-marketing/ | `/elevation-marketing/` | push to `master` (CI)        |

### GitHub Pages preview — automatic

Just push to `master`:

```bash
git push origin master   # → CI builds & publishes to GitHub Pages
```

This triggers the [`Deploy to GitHub Pages`](.github/workflows/deploy.yml)
workflow (`nuxt generate` with `NODE_ENV=production` → the `/elevation-marketing/`
sub-path). Watch the **Actions** tab; once it's green it's live. One-time setup:
**Settings → Pages → Source** must be **GitHub Actions**.

### Production (elevation-marketing.net) — build + FTP

The production host only serves static files, so build locally with the root
base path and upload the output:

```bash
# PowerShell
$env:NUXT_APP_BASE_URL="/"; npm run generate
# bash:  NUXT_APP_BASE_URL=/ npm run generate

# → upload the *contents* of .output/public/ into the FTP docroot (e.g. public_html)
```

`NUXT_APP_BASE_URL="/"` overrides the default sub-path so assets resolve from the
domain root; the root base also selects the production SEO origin and Web3Forms
key automatically. Don't upload `.env` — the key is already baked into the build.

## Contact form — the Web3Forms key

The contact form submits to [Web3Forms](https://web3forms.com/), which needs an
**access key** to deliver submissions. The project has **two keys** — one per
deploy target — and `nuxt.config.ts` selects the right one automatically. There
is nothing to set up.

### How the key is chosen

`nuxt.config.ts` picks the key from the resolved base path — the same
`isGhPagesDeploy` signal that drives the base URL, SEO origin and `robots.txt`:

```ts
const isGhPagesDeploy = baseURL.startsWith("/elevation-marketing");
const web3formsKey = isGhPagesDeploy
  ? "…"  // GitHub Pages preview key
  : "…"; // production key (elevation-marketing.net)
```

- **Production build** (root base, `NUXT_APP_BASE_URL="/"`) → production key.
- **GitHub Pages build** (`/elevation-marketing/` sub-path) → preview key.

The chosen value is baked into the static HTML/JS at build time (`nuxt
generate`), so the serving machine never needs it.

### Why the keys live in source

A Web3Forms access key is **public by design** — it is sent from the browser, so
anyone can read it in DevTools. There is nothing to hide, so the keys sit
directly in `nuxt.config.ts`. Each is instead protected by **domain restriction**
in the Web3Forms dashboard:

- preview key → allowed only on the `sbt-solutions-ltd.github.io` URL
- production key → allowed only on `elevation-marketing.net`

That domain lock is the real protection — and the reason each target needs its
own key (one key restricted to a single domain can't serve both).

### Overriding locally

In local dev the production key is selected, and because it's domain-locked to
`elevation-marketing.net` the form won't deliver from `localhost`. To test the
form locally, drop an **unrestricted** dev key into `.env` (git-ignored):

```bash
echo 'NUXT_PUBLIC_WEB3FORMS_KEY=your-dev-key' > .env
```

`NUXT_PUBLIC_WEB3FORMS_KEY` overrides the config selection in any environment
(this is the only thing the env var is still used for).

### Rotating a key

Edit the relevant key in `nuxt.config.ts` and rebuild/redeploy — there is no repo
secret or server env var to keep in sync.

---

🙌 Thank you for checking out my project! More is coming 🔜.  
Stay tuned 🚀 and please don't forget to give the project a star! ⭐  
Made with lots of 💗, ☕, and a sprinkle of ✨ by Ralitsa Voronevska!
