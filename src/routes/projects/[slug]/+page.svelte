<script lang="ts">
	import type { PageData } from './$types';
	import { ArticleHeader, ArticleLayout, BackLink, ResourceList } from '$lib/components';
	import { reveal } from '$lib/actions/reveal';
	import { enableCheckboxes } from '$lib/actions/checkboxes';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} / Wyzie Labs</title>
	<meta name="description" content={project.tagline} />
	<meta property="og:title" content="{project.title} / Wyzie Labs" />
	<meta property="og:description" content={project.tagline} />
</svelte:head>

<ArticleLayout headings={project.headings}>
	<BackLink class="mb-8" />
	<ArticleHeader
		category={project.category}
		date={project.date}
		title={project.title}
		tags={project.tags}
	/>

	<div class="prose reveal" use:reveal={{ delay: 60 }} use:enableCheckboxes>
		{@html project.html}
	</div>

	{#if (project.downloads && project.downloads.length > 0) || (project.links && project.links.length > 0)}
		<div class="reveal" use:reveal={{ delay: 100 }}>
			<ResourceList downloads={project.downloads} links={project.links} />
		</div>
	{/if}
</ArticleLayout>
