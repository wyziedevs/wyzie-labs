<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
		class?: string;
	}

	let { href, children, class: className = 'underline' }: Props = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className}>
	{@render children()}<span class="sr-only"> (opens in new tab)</span>
</a>
