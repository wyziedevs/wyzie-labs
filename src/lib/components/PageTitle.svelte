<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
		style?: string;
	}

	let { children, class: className = '', style }: Props = $props();
</script>

<h1
	class="font-display text-[clamp(1.875rem,4vw,2.5rem)] font-bold tracking-tight uppercase {className}"
	{style}
>
	{@render children()}
</h1>
