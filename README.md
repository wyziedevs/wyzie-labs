# Wyzie Labs

Open-source design projects, 3D prints, and builds. Browse & download at [lab.wyzie.io](https://lab.wyzie.io).

## Tech Stack

- **SvelteKit** + **Tailwind CSS v4**
- Hosted on **Cloudflare Pages**, downloads served from a VPS (`103.60.12.240`)
- Content driven by Markdown files in `content/`

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

- **Website:** Cloudflare Pages - auto-deploys on push to `main`
  - Build command: `pnpm build` / Output: `.svelte-kit/cloudflare`
  - Env var: `VITE_DOWNLOADS_BASE = http://103.60.12.240`
- **Downloads:** Nginx on VPS at `103.60.12.240`, serving `/var/www/files/downloads/`

## Adding a New Project

**1. Upload files to the VPS**

```bash
ssh root@103.60.12.240 "mkdir -p /var/www/files/downloads/my-new-project"
scp my-file.stl root@103.60.12.240:/var/www/files/downloads/my-new-project/
```

**2. Create `content/my-new-project/index.md`**

```markdown
---
title: My New Project
tagline: Short description of the project.
slug: my-new-project
category: 3D Print
tags: [tag1, tag2]
date: 2025-06-15
downloads:
  - label: Main STL File
    url: /downloads/my-new-project/my-file.stl
---

## Overview

Description of the project goes here.
```

Push to `main` and Cloudflare auto-deploys.