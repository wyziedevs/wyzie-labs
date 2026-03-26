<script lang="ts">
	interface Props {
		categories: string[];
		active: string;
		onchange: (cat: string) => void;
	}

	let { categories, active, onchange }: Props = $props();
</script>

<nav aria-label="Filter by category" class="flex gap-1.5 flex-wrap">
	{#each categories as cat}
		<button
			aria-pressed={active === cat}
			class="cat-btn py-2 px-3 border border-border text-xs cursor-pointer {active ===
			cat
				? 'bg-fg text-bg'
				: 'bg-bg text-fg hover:bg-fg hover:text-bg'}"
			onclick={() => onchange(cat)}>{cat}</button
		>
	{/each}
</nav>

<style>
	.cat-btn {
		transition:
			background-color 0.25s var(--ease-smooth),
			color 0.25s var(--ease-smooth),
			transform 0.2s var(--ease-smooth),
			box-shadow 0.25s var(--ease-smooth);
	}

	.cat-btn:active {
		transform: scale(0.96);
	}

	.cat-btn[aria-pressed='true'] {
		box-shadow: 0 2px 8px color-mix(in srgb, var(--color-fg) 15%, transparent);
	}
</style>
