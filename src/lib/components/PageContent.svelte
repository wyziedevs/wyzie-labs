<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<article class="max-w-170">
	<h1 class="stagger page-title mb-6" style="--i: 0">{title}</h1>
	{@render children()}
</article>
