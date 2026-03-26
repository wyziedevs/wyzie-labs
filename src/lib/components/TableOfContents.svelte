<script lang="ts">
	import type { Heading } from '$lib/projects';

	let { headings }: { headings: Heading[] } = $props();
</script>

{#if headings.length > 0}
	<nav aria-label="Table of contents">
		<p class="label mb-3 mt-4">Contents</p>
		<ul class="list-none p-0 m-0">
			{#each headings as heading}
				<li style="padding-left: {(heading.level - 2) * 0.6}rem">
					<a
						href="#{heading.id}"
						class="inline-block py-1.5 text-[0.8rem] leading-snug text-muted transition-colors duration-150 ease-smooth hover:text-fg link-underline"
						>{heading.text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
