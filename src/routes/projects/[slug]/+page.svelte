<script lang="ts">
	import type { PageData } from './$types';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import BackLink from '$lib/components/BackLink.svelte';
	import ResourceList from '$lib/components/ResourceList.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { enableCheckboxes } from '$lib/actions/checkboxes';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} / Wyzie Labs</title>
	<meta name="description" content={project.tagline} />
</svelte:head>

<div class="article-layout">
	<article class="max-w-170">
		<BackLink href="/projects" className="mb-8" />
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
	</article>

	{#if project.headings.length > 0}
		<aside class="toc-sidebar" use:reveal={{ delay: 80 }}>
			<TableOfContents headings={project.headings} />
		</aside>
	{/if}
</div>

<style>
	.article-layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}

	.toc-sidebar {
		display: none;
	}

	@media (min-width: 1100px) {
		.article-layout {
			grid-template-columns: minmax(0, 1fr) 14rem;
		}

		.toc-sidebar {
			display: block;
			position: sticky;
			top: 5rem;
			align-self: start;
			max-height: calc(100vh - 6rem);
			overflow-y: auto;
		}
	}
</style>
