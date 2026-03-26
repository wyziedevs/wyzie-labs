<script lang="ts">
	import type { Project } from '$lib/projects';
	import ProjectCard from './ProjectCard.svelte';

	interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();
</script>

{#if projects.length === 0}
	<p class="py-16 text-muted text-sm animate-fade">
		No projects match your search. Try a broader term or clear the filter.
	</p>
{:else}
	<div class="animate-fade grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project, i (project.slug)}
			<div class="stagger-fast" style="--i: {Math.min(i, 8)}">
				<ProjectCard {project} />
			</div>
		{/each}
	</div>
{/if}
