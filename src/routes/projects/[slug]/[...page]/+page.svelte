<script lang="ts">
	import type { PageData } from './$types';
	import BackLink from '$lib/components/BackLink.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { enableCheckboxes } from '$lib/actions/checkboxes';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
	const subpage = $derived(data.subpage);
</script>

<svelte:head>
	<title>{subpage.title} / {project.title} / Wyzie Labs</title>
</svelte:head>

<div class="article-layout">
	<article class="max-w-170">
		<BackLink href="/projects/{project.slug}" label={project.title} />

		<h1 class="page-title mt-6 mb-8">{subpage.title}</h1>

		<div class="prose reveal" use:reveal={{ delay: 60, threshold: 0 }} use:enableCheckboxes>
			{@html subpage.html}
		</div>
	</article>

	{#if subpage.headings.length > 0}
		<aside class="toc-sidebar" use:reveal={{ delay: 80 }}>
			<TableOfContents headings={subpage.headings} />
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
