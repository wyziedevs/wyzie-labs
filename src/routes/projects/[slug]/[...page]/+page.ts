import { projects, getSubpage } from '$lib/projects';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) throw error(404, 'Project not found');

	const subpage = await getSubpage(params.slug, params.page);
	if (!subpage) throw error(404, 'Page not found');

	return { project, subpage };
}
