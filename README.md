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

Deployment is **automatic** — just push to `master`:

```bash
git push origin master   # → CI builds & publishes to GitHub Pages
```

This triggers the [`Deploy to GitHub Pages`](.github/workflows/deploy.yml)
workflow, which runs `nuxt generate` and publishes the static build. Watch it in
the **Actions** tab; once it's green the site is live at
[sbt-solutions-ltd.github.io/elevation-marketing](https://sbt-solutions-ltd.github.io/elevation-marketing/).

No manual build or upload needed. One-time requirement: **Settings → Pages →
Source** must be set to **GitHub Actions**.

## Contact form — providing the `NUXT_PUBLIC_WEB3FORMS_KEY`

The contact form submits to [Web3Forms](https://web3forms.com/). It needs an
**access key** to deliver submissions. Here is how the key flows through the
project and how to provide it in every environment.

### How the key works

```
NUXT_PUBLIC_WEB3FORMS_KEY   ← env var you set
        ↓ (Nuxt auto-maps NUXT_PUBLIC_* → runtimeConfig.public.*)
runtimeConfig.public.web3formsKey   ← defined in nuxt.config.ts (default "")
        ↓
useRuntimeConfig().public.web3formsKey   ← read in components/landing/ContactForm.vue
```

**Most important fact:** the site is deployed with `nuxt generate` (a _static_
build). For static builds, `runtimeConfig.public` values are **baked into the
HTML/JS at build time** — they are _not_ read from the server at runtime. So the
env var must exist **wherever `nuxt generate` runs** (CI or your build machine).
The machine that _serves_ the files never needs it.

A Web3Forms access key is **public by design** — it is sent from the browser, so
anyone can see it in DevTools. "Keeping it secret" here means _keeping it out of
git_, not hiding it from users. Protect it instead by **restricting the key to
your domain(s)** in the Web3Forms dashboard.

### Step 1 — Get the key from Web3Forms

1. Go to https://web3forms.com/.
2. Enter the email where you want submissions delivered → it emails you an
   **access key** (a UUID like `a1b2c3d4-...`).
3. In the dashboard, **restrict the key to your domain(s)** — add both the
   GitHub Pages URL and your future independent domain. This is your real
   protection since the key is public.

### Step 2 — Local development (`.env`)

`.env` is already git-ignored, so this is safe:

```bash
# in the project root
echo 'NUXT_PUBLIC_WEB3FORMS_KEY=your-key-here' > .env
```

Then `npm run dev` — Nuxt auto-loads `.env` and the form submits for real.

### Step 3 — GitHub Pages deploy (repo secret)

`.github/workflows/deploy.yml` already reads
`secrets.NUXT_PUBLIC_WEB3FORMS_KEY`. Create the secret:

1. GitHub repo → **Settings** → **Secrets and variables** → **Actions**.
2. **New repository secret**.
3. Name: `NUXT_PUBLIC_WEB3FORMS_KEY` (exact spelling) — Value: your key → **Add
   secret**.
4. Re-run the deploy (push any commit, or Actions tab → Deploy workflow → **Run
   workflow**).

The CI injects it into the environment during `npm run generate`, baking it into
the static output.

### Step 4 — Hosting on an independent server

The right approach depends on **how you build there**.

**Case A — Still a static site (matches the current setup).**
The server only serves files; the key is baked in at build time.

```bash
export NUXT_PUBLIC_WEB3FORMS_KEY=your-key-here
npm ci && npm run generate
# then upload .output/public/* to the server's docroot (nginx/Apache)
```

Nothing about the key lives on the serving machine. If you use a CI/CD pipeline
(GitLab CI, Jenkins, a new GitHub Action), store the key as that system's
secret and expose it as `NUXT_PUBLIC_WEB3FORMS_KEY` in the build step — same
pattern as Step 3.

> ⚠️ When you move off GitHub Pages, also revisit `nuxt.config.ts`: it forces the
> `/elevation-marketing/` sub-path whenever `NODE_ENV=production`. On your own
> domain (served from root) set `baseURL: "/"`, so the `isGhPages` logic needs
> adjusting then.

**Case B — Node / SSR server (`nuxt build` + `node .output/server`).**
Here `runtimeConfig.public` _is_ read at runtime, so you can rotate the key
without rebuilding. Set the env var in the server's runtime environment:

- **systemd:** `Environment=NUXT_PUBLIC_WEB3FORMS_KEY=your-key-here` in the unit file
- **Docker:** `-e NUXT_PUBLIC_WEB3FORMS_KEY=your-key-here` (or under `environment:` in `docker-compose.yml`)
- **PM2:** add it under `env:` in your ecosystem file

### Quick reference

| Environment            | Where to set the key                          | Read at     |
| ---------------------- | --------------------------------------------- | ----------- |
| Local dev              | `.env` file                                   | build (dev) |
| GitHub Pages           | Repo Actions secret                           | build (CI)  |
| Independent — static   | Build machine / CI env before `nuxt generate` | build       |
| Independent — Node/SSR | Server runtime env (systemd/Docker/PM2)       | runtime     |

---

🙌 Thank you for checking out my project! More is coming 🔜.  
Stay tuned 🚀 and please don't forget to give the project a star! ⭐  
Made with lots of 💗, ☕, and a sprinkle of ✨ by Ralitsa Voronevska!
