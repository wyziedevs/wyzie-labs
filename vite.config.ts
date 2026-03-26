import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { statSync, readdirSync, readFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative, extname, dirname } from 'node:path';
import type { Plugin } from 'vite';

function fileSizes(): Plugin {
	const virtualId = 'virtual:file-sizes';
	const resolvedId = '\0' + virtualId;

	function scan(dir: string, root: string, out: Record<string, number>) {
		let entries;
		try {
			entries = readdirSync(dir, { withFileTypes: true });
		} catch {
			return;
		}
		for (const entry of entries) {
			const full = join(dir, entry.name);
			if (entry.isDirectory()) {
				scan(full, root, out);
			} else {
				const key = '/' + relative(root, full).replace(/\\/g, '/');
				out[key] = statSync(full).size;
			}
		}
	}

	return {
		name: 'vite-plugin-file-sizes',
		resolveId(id) {
			if (id === virtualId) return resolvedId;
		},
		load(id) {
			if (id !== resolvedId) return;
			const staticDir = join(process.cwd(), 'static');
			const sizes: Record<string, number> = {};
			scan(staticDir, staticDir, sizes);
			return `export default ${JSON.stringify(sizes)};`;
		},
	};
}

function contentAssets(): Plugin {
	const contentDir = join(process.cwd(), 'content');
	const staticContentDir = join(process.cwd(), 'static', 'content');
	const assetExts = new Set([
		'.png',
		'.jpg',
		'.jpeg',
		'.gif',
		'.webp',
		'.avif',
		'.svg',
		'.mp4',
		'.webm',
		'.pdf',
	]);

	function copyAssets(src: string, destRoot: string, srcRoot: string) {
		let entries;
		try {
			entries = readdirSync(src, { withFileTypes: true });
		} catch {
			return;
		}
		for (const entry of entries) {
			const full = join(src, entry.name);
			if (entry.isDirectory()) {
				copyAssets(full, destRoot, srcRoot);
			} else if (assetExts.has(extname(entry.name).toLowerCase())) {
				const rel = relative(srcRoot, full);
				const dest = join(destRoot, rel);
				mkdirSync(dirname(dest), { recursive: true });
				copyFileSync(full, dest);
			}
		}
	}

	return {
		name: 'vite-plugin-content-assets',
		configureServer(server) {
			server.middlewares.use('/content', (req, res, next) => {
				const filePath = join(contentDir, decodeURIComponent(req.url || ''));
				const ext = extname(filePath).toLowerCase();
				if (!assetExts.has(ext) || !existsSync(filePath)) return next();
				const mime: Record<string, string> = {
					'.png': 'image/png',
					'.jpg': 'image/jpeg',
					'.jpeg': 'image/jpeg',
					'.gif': 'image/gif',
					'.webp': 'image/webp',
					'.avif': 'image/avif',
					'.svg': 'image/svg+xml',
					'.mp4': 'video/mp4',
					'.webm': 'video/webm',
					'.pdf': 'application/pdf',
				};
				res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
				res.end(readFileSync(filePath));
			});
		},
		buildStart() {
			copyAssets(contentDir, staticContentDir, contentDir);
		},
	};
}

export default defineConfig({
	plugins: [contentAssets(), fileSizes(), tailwindcss(), sveltekit()],
});
