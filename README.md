# SCeNT Stack

The SCeNT Stack is a modern open-source web stack for building fast, scalable applications at the edge with **S**velteKit, **C**loudflare, **N**itro, and **T**ypeScript.

## Why SCeNT?

I got tired of overthinking stack choices every time I started a new project. Next.js is cool and all but it's bloated for what most people actually need. Vercel's pricing makes me mass cringe. So I put together something that just works, runs at the edge, and doesn't cost you a kidney to host.

SCeNT is the stack I wish existed when I started building web apps. It's fast, it's simple, and it's entirely open-source. No vendor lock-in, no "please upgrade to Pro", none of that.

## The Stack

| Technology                                    | Role                                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| [SvelteKit](https://kit.svelte.dev/)          | Frontend framework. Fast, reactive, compiles away the framework overhead.       |
| [Cloudflare](https://www.cloudflare.com/)     | Hosting, CDN, Workers, D1, KV. Basically your entire backend infra.             |
| [Nitro](https://nitro.unjs.io/)               | Server engine. Universal deployments, auto-imports, file-based routing for API. |
| [TypeScript](https://www.typescriptlang.org/) | Type safety across the entire stack. No excuses.                                |

## How It Works

SvelteKit handles your frontend and SSR. Nitro powers your API layer and server routes with zero-config deployments. Cloudflare runs everything at the edge across 300+ data centers. TypeScript ties it all together so you don't ship `undefined is not a function` to production.

The beauty of this setup is that Nitro can deploy to basically anything, Cloudflare Workers, AWS, Vercel, Deno, Bun, you name it. But we optimize for Cloudflare because their free tier is genuinely insane and their DX keeps getting better.

## Getting Started

You'll need [Node.js](https://nodejs.org/) (v18+), [pnpm](https://pnpm.io/) and a [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works fine).

> **Note:** This project uses **pnpm** as its package manager. Please use `pnpm` instead of `npm` or `yarn`.

```bash
# clone the template
git clone https://github.com/itzCozi/SCeNT.git my-app
cd my-app

# install dependencies
pnpm install

# start both SvelteKit + Nitro dev servers
pnpm run dev
```

That's it. SvelteKit runs on `localhost:5173` and the Nitro API on `localhost:3001`. When you're ready to deploy:

```bash
# deploy frontend to Cloudflare Pages
pnpm run build:web
wrangler pages deploy .svelte-kit/cloudflare

# deploy API to Cloudflare Workers
pnpm run build:api
wrangler deploy
```

Your app is now live on Cloudflare's edge network. Seriously, it's that simple.

## Project Structure

```
├── src/
│   ├── routes/
│   │   ├── +layout.svelte    # Root layout
│   │   ├── +page.svelte      # Landing page
│   │   └── +page.ts          # Page data loader
│   ├── lib/
│   │   └── index.ts          # Shared exports
│   ├── app.html              # HTML shell
│   └── app.d.ts              # Global types + Cloudflare bindings
├── server/
│   ├── api/
│   │   ├── health.get.ts     # Health check endpoint
│   │   └── hello.get.ts      # Example API route
│   └── tsconfig.json         # Server-side TS config
├── static/                   # Static assets
├── nitro.config.ts           # Nitro config
├── svelte.config.js          # SvelteKit config
├── vite.config.ts            # Vite config
├── wrangler.toml             # Cloudflare Workers config
└── tsconfig.json             # Root TS config
```

## Why Not [Insert Framework]?

Look, I'm not here to mass trash other frameworks. Use whatever works for you. But here's why I chose these four specifically:

- **SvelteKit over Next.js/Nuxt**: Less boilerplate, smaller bundles, no virtual DOM overhead. Svelte compiles your components to vanilla JS. It's just faster.
- **Cloudflare over Vercel/Netlify**: Free tier that actually lets you build real things. Workers, KV, D1, R2 all free or dirt cheap. And your code runs in 300+ locations, not 3.
- **Nitro over Express/Fastify**: Universal output, file-based API routing, auto-imports. Built by the UnJS team (same people behind Nuxt's server engine). It just works everywhere.
- **TypeScript over "just JavaScript"**: If you're building anything beyond a todo app, you want types. End of discussion.

## Cloudflare Services

SCeNT is designed to play nicely with the entire Cloudflare ecosystem:

- **Workers** - Run your server-side code at the edge
- **D1** - SQLite database that lives on the edge (yes, really)
- **KV** - Key-value storage for config, sessions, caching
- **R2** - S3-compatible object storage with zero egress fees
- **Pages** - Deploy your frontend with git-push simplicity

You don't have to use all of these. Start with Workers and add what you need as you go.

## License

Open-source under the [MIT License](LICENSE). Do whatever you want with it.
