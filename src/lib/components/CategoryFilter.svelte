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
			class="min-h-11 py-2 px-3 border border-border text-xs cursor-pointer transition-[background-color,color,transform,box-shadow] duration-200 ease-smooth active:scale-[0.96] aria-pressed:shadow-pressed {active ===
			cat
				? 'bg-fg text-bg'
				: 'bg-bg text-fg hover:bg-fg hover:text-bg'}"
			onclick={() => onchange(cat)}>{cat}</button
		>
	{/each}
</nav>
