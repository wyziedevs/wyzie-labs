import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { statSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
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

export default defineConfig({
	plugins: [fileSizes(), tailwindcss(), sveltekit()],
});
