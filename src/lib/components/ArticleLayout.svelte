<script lang="ts">
	import type { Heading } from '$lib/projects';
	import TableOfContents from './TableOfContents.svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Snippet } from 'svelte';

	interface Props {
		headings: Heading[];
		children: Snippet;
	}

	let { headings, children }: Props = $props();
</script>

<div class="article-layout">
	<article class="max-w-170">
		{@render children()}
	</article>

	{#if headings.length > 0}
		<aside class="toc-sidebar" use:reveal={{ delay: 80 }}>
			<TableOfContents {headings} />
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
