<script lang="ts">
	import type { PageData } from './$types';
	import { CATEGORIES } from '$lib/projects';
	import { SearchBar, CategoryFilter, ProjectGrid } from '$lib/components';

	let { data }: { data: PageData } = $props();

	let query = $state('');
	let activeCategory = $state('All');

	const filtered = $derived(
		data.projects.filter((p) => {
			const matchesQuery =
				query === '' ||
				p.title.toLowerCase().includes(query.toLowerCase()) ||
				p.tagline.toLowerCase().includes(query.toLowerCase()) ||
				p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
			const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
			return matchesQuery && matchesCategory;
		}),
	);
</script>

<svelte:head>
	<title>Wyzie Labs</title>
	<meta
		name="description"
		content="Browse, search, and download open-source design projects, 3D prints, and builds from Wyzie Labs."
	/>
</svelte:head>

<h1 class="sr-only">Projects</h1>

<section class="flex flex-col gap-4 mb-10">
	<div class="stagger" style="--i: 0">
		<SearchBar value={query} count={filtered.length} oninput={(v) => (query = v)} />
	</div>
	<div class="stagger" style="--i: 1">
		<CategoryFilter
			categories={CATEGORIES}
			active={activeCategory}
			onchange={(cat) => (activeCategory = cat)}
		/>
	</div>
</section>

<div class="stagger" style="--i: 2">
	<ProjectGrid projects={filtered} />
</div>
