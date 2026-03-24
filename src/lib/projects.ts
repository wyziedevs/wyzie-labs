import yaml from 'yaml';
import { marked } from 'marked';
import fileSizes from 'virtual:file-sizes';

const DOWNLOADS_BASE = import.meta.env.VITE_DOWNLOADS_BASE || '';

function formatBytes(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export interface Download {
	label: string;
	url: string;
	size?: string;
}

export interface Link {
	label: string;
	url: string;
}

export interface Project {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	html: string;
	category: string;
	tags: string[];
	date: string;
	downloads?: Download[];
	links?: Link[];
}

function parseFrontmatter(raw: string): { meta: Record<string, unknown>; body: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { meta: {}, body: raw.trim() };
	return { meta: yaml.parse(match[1]) ?? {}, body: match[2].trim() };
}

const modules = import.meta.glob('/content/*/index.md', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

export const projects: Project[] = Object.entries(modules)
	.map(([path, raw]) => {
		const { meta, body } = parseFrontmatter(raw);
		const folderSlug = path.split('/').at(-2)!;
		const date = String(meta.date ?? '');
		return {
			slug: (meta.slug as string) || folderSlug,
			title: (meta.title as string) || 'Untitled',
			tagline: (meta.tagline as string) || '',
			description: body,
			html: marked.parse(body, { async: false }) as string,
			category: (meta.category as string) || '',
			tags: (meta.tags as string[]) || [],
			date,
			downloads: ((meta.downloads as Download[]) || []).map((dl) => ({
				...dl,
				url: dl.url.startsWith('/downloads/') ? `${DOWNLOADS_BASE}${dl.url}` : dl.url,
				size: dl.size || (fileSizes[dl.url] ? formatBytes(fileSizes[dl.url]) : undefined),
			})),
			links: (meta.links as Link[]) || [],
		} satisfies Project;
	})
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const CATEGORIES = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const subpageModules = import.meta.glob('/content/*/*.md', {
	eager: true,
	query: '?raw',
	import: 'default',
}) as Record<string, string>;

export interface Subpage {
	slug: string;
	page: string;
	title: string;
	html: string;
}

export function getSubpage(slug: string, page: string): Subpage | undefined {
	const key = `/content/${slug}/${page}.md`;
	const raw = subpageModules[key];
	if (!raw) return undefined;
	const { meta, body } = parseFrontmatter(raw);
	return {
		slug,
		page,
		title: (meta.title as string) || page,
		html: marked.parse(body, { async: false }) as string,
	};
}
