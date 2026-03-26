<script lang="ts">
	import type { PageData } from './$types';
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
	import BackLink from '$lib/components/BackLink.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { enableCheckboxes } from '$lib/actions/checkboxes';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
	const subpage = $derived(data.subpage);
</script>

<svelte:head>
	<title>{subpage.title} / {project.title} / Wyzie Labs</title>
</svelte:head>

<ArticleLayout headings={subpage.headings}>
	<BackLink href="/projects/{project.slug}" label={project.title} />

	<h1 class="stagger page-title mt-6 mb-8" style="--i: 0">{subpage.title}</h1>

	<div class="prose reveal" use:reveal={{ delay: 60, threshold: 0 }} use:enableCheckboxes>
		{@html subpage.html}
	</div>
</ArticleLayout>
