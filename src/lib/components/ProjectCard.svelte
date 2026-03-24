<script lang="ts">
	import type { Project } from '$lib/projects';
	import { formatDate } from '$lib/utils';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<a
	href="/projects/{project.slug}"
	class="card-fill group relative flex flex-col gap-3 p-4 sm:p-6 border border-border -mt-px -ml-px bg-bg min-h-40 sm:min-h-50 transition-colors duration-200 hover:text-bg overflow-hidden"
>
	<div class="relative z-1 flex justify-between items-center gap-2 min-w-0">
		<span class="label truncate">{project.category}</span>
		<span class="text-xs text-muted group-hover:text-bg/70 uppercase whitespace-nowrap"
			>{formatDate(project.date, 'short')}</span
		>
	</div>
	<h2 class="relative z-1 font-display text-xl font-bold tracking-tight leading-tight line-clamp-2">
		{project.title}
	</h2>
	<p class="relative z-1 text-sm text-muted group-hover:text-bg/70 leading-relaxed flex-1">
		{project.tagline}
	</p>
	<div class="relative z-1 flex items-center justify-between gap-2 mt-auto min-w-0">
		<div class="flex gap-1.5 flex-wrap min-w-0">
			{#each project.tags.slice(0, 3) as tag}
				<span class="text-xs text-muted group-hover:text-bg/70 uppercase truncate">#{tag}</span>
			{/each}
		</div>
		{#if project.downloads && project.downloads.length > 0}
			<span class="text-xs text-muted group-hover:text-bg/70 whitespace-nowrap uppercase"
				>{project.downloads.length} file{project.downloads.length !== 1 ? 's' : ''}</span
			>
		{/if}
	</div>
</a>
