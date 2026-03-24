<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects / Wyzie Labs</title>
	<meta
		name="description"
		content="Browse all design projects, 3D prints, and builds from Wyzie Labs."
	/>
</svelte:head>

<h1 class="stagger page-title mb-8" style="--i: 0">Projects</h1>

<div class="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
	<table class="w-full text-sm text-left border-collapse">
		<thead>
			<tr class="border-b border-border">
				<th scope="col" class="pb-3 pr-4 label text-muted">Name</th>
				<th scope="col" class="pb-3 pr-4 label text-muted hidden sm:table-cell">Category</th>
				<th scope="col" class="pb-3 pr-4 label text-muted hidden md:table-cell">Date</th>
				<th scope="col" class="pb-3 pr-4 label text-muted hidden lg:table-cell">Tags</th>
			</tr>
		</thead>
		<tbody>
			{#each data.projects as project, i (project.slug)}
				<tr
					class="stagger-fast group transition-colors duration-150"
					style="--i: {Math.min(i + 1, 12)}"
				>
					<td class="py-3 pr-4 max-w-xs">
						<a
							href="/projects/{project.slug}"
							class="font-display font-bold link-underline"
							aria-label="View {project.title}">{project.title}</a
						>
						<p class="text-xs text-muted line-clamp-1">
							{project.tagline}
						</p>
						<div class="flex gap-3 mt-1 sm:hidden">
							<span class="text-xs text-muted">{project.category}</span>
							<span class="text-xs text-muted">{formatDate(project.date, 'short')}</span>
						</div>
					</td>
					<td class="py-3 pr-4 text-muted hidden sm:table-cell">{project.category}</td>
					<td class="py-3 pr-4 text-muted whitespace-nowrap hidden md:table-cell"
						>{formatDate(project.date, 'short')}</td
					>
					<td class="py-3 text-muted hidden lg:table-cell">
						<div class="flex gap-1.5 flex-wrap">
							{#each project.tags.slice(0, 3) as tag}
								<span class="text-xs uppercase">#{tag}</span>
							{/each}
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
