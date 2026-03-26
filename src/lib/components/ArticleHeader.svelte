<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		category: string;
		date: string;
		title: string;
		tags: string[];
	}

	let { category, date, title, tags }: Props = $props();
</script>

<header class="flex flex-col gap-3 mb-8">
	<div class="stagger flex items-center gap-4" style="--i: 0">
		<span class="label">{category}</span>
		<span class="text-xs text-muted">{formatDate(date)}</span>
	</div>
	<h1
		class="stagger font-display text-[clamp(1.5rem,3.5vw,1.875rem)] font-bold tracking-tight leading-tight wrap-break-word"
		style="--i: 1"
	>
		{title}
	</h1>
	<div class="stagger flex gap-2 flex-wrap" style="--i: 2">
		{#each tags as tag}
			<span class="label text-muted">#{tag}</span>
		{/each}
	</div>
</header>
