<script lang="ts">
	import type { Project } from '$lib/projects';
	import { formatDate } from '$lib/utils';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	let tapped = $state(false);
	let touchStartX = 0;
	let touchStartY = 0;
	let scrolled = false;

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
		scrolled = false;
	}

	function handleTouchMove(e: TouchEvent) {
		const dx = Math.abs(e.touches[0].clientX - touchStartX);
		const dy = Math.abs(e.touches[0].clientY - touchStartY);
		if (dx > 8 || dy > 8) scrolled = true;
	}

	function handleTouchEnd() {
		if (!scrolled) {
			tapped = true;
			setTimeout(() => {
				tapped = false;
			}, 700);
		}
	}
</script>

<a
	href="/projects/{project.slug}"
	class="card-fill group relative flex flex-col gap-3 p-4 sm:p-6 border border-border -mt-px -ml-px bg-bg min-h-40 sm:min-h-50 [@media(hover:hover)]:hover:text-bg overflow-hidden"
	class:tapped
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleTouchEnd}
>
	<div class="relative z-1 flex justify-between items-center gap-2 min-w-0">
		<span class="label truncate">{project.category}</span>
		<span
			class="text-xs text-muted [@media(hover:hover)]:group-hover:text-bg/70 uppercase whitespace-nowrap transition-colors duration-300"
			>{formatDate(project.date, 'short')}</span
		>
	</div>
	<h2
		class="relative z-1 font-display text-xl font-bold tracking-tight leading-tight line-clamp-2 transition-transform duration-300 ease-smooth"
	>
		{project.title}
	</h2>
	<p
		class="relative z-1 text-sm text-muted [@media(hover:hover)]:group-hover:text-bg/70 leading-relaxed flex-1 transition-colors duration-300"
	>
		{project.tagline}
	</p>
	<div class="relative z-1 flex items-center justify-between gap-2 mt-auto min-w-0">
		<div class="flex gap-1.5 flex-wrap min-w-0">
			{#each project.tags.slice(0, 3) as tag, ti}
				<span
					class="text-xs text-muted [@media(hover:hover)]:group-hover:text-bg/70 uppercase truncate transition-[color,transform] duration-300"
					style="transition-delay: {ti * 30}ms;">#{tag}</span
				>
			{/each}
		</div>
		{#if project.downloads && project.downloads.length > 0}
			<span
				class="text-xs text-muted [@media(hover:hover)]:group-hover:text-bg/70 whitespace-nowrap uppercase transition-colors duration-300"
				>{project.downloads.length} file{project.downloads.length !== 1 ? 's' : ''}</span
			>
		{/if}
	</div>
</a>
