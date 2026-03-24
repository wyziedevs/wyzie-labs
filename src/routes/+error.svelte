<script lang="ts">
	import { page } from '$app/state';
	import BackLink from '$lib/components/BackLink.svelte';
</script>

<svelte:head>
	<title>{page.status} / Wyzie Labs</title>
</svelte:head>

<article class="max-w-170 py-16">
	<h1 class="page-title mb-4">{page.status}</h1>
	<p class="text-base text-muted leading-7 mb-8">
		{#if page.status === 404}
			This page doesn't exist or has been moved. Check the URL, or head back to browse all projects.
		{:else if page.status === 403}
			You don't have access to this page. If you think this is a mistake, <a
				href="/contact"
				class="underline">get in touch</a
			>.
		{:else}
			Something broke on our end. Try refreshing, or <a href="/contact" class="underline"
				>let us know</a
			> if it keeps happening.
		{/if}
	</p>
	<BackLink href="/" label="Back to home" />
</article>
