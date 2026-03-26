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
			class="py-2.5 px-3 min-h-[44px] border border-border text-xs cursor-pointer transition-[background-color,color,transform] duration-150 {active ===
			cat
				? 'bg-fg text-bg'
				: 'bg-bg text-fg hover:bg-fg hover:text-bg'}"
			onclick={() => onchange(cat)}>{cat}</button
		>
	{/each}
</nav>
