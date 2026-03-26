<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageTitle from './PageTitle.svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<article class="max-w-170">
	<PageTitle class="stagger mb-6" style="--i: 0">{title}</PageTitle>
	{@render children()}
</article>
