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

<div class="grid min-[1100px]:grid-cols-[minmax(0,1fr)_14rem]">
	<article class="max-w-170">
		{@render children()}
	</article>

	{#if headings.length > 0}
		<aside
			class="hidden min-[1100px]:block min-[1100px]:sticky min-[1100px]:top-20 min-[1100px]:self-start min-[1100px]:max-h-[calc(100vh-6rem)] min-[1100px]:overflow-y-auto"
			use:reveal={{ delay: 80 }}
		>
			<TableOfContents {headings} />
		</aside>
	{/if}
</div>
