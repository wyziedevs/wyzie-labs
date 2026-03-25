<script lang="ts">
	import type { Heading } from '$lib/projects';

	let { headings }: { headings: Heading[] } = $props();
</script>

{#if headings.length > 0}
	<nav class="toc" aria-label="Table of contents">
		<p class="label mb-3 mt-4">Contents</p>
		<ul>
			{#each headings as heading}
				<li style="--depth: {heading.level - 2}">
					<a href="#{heading.id}" class="link-underline">{heading.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		padding-left: calc(var(--depth) * 0.6rem);
	}

	a {
		display: inline-block;
		padding: 0.15rem 0;
		font-size: 0.8rem;
		line-height: 1.4;
		color: var(--color-muted);
		transition: color 0.15s var(--ease-smooth);
	}

	@media (hover: hover) {
		a:hover {
			color: var(--color-fg);
		}
	}
</style>
