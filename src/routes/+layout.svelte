<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();

	if (browser) {
		console.log('%cWyzie Labs', 'font-size:20px;font-weight:bold;font-family:monospace');
		console.log(
			'%cPeeking under the hood? Good instinct. \u2192 hello@wyzie.io',
			'font-size:12px;color:gray;font-family:monospace',
		);
	}

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<title>Wyzie Labs</title>
	<meta name="description" content="Design projects, 3D prints, and builds by Wyzie Labs." />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<div class="scroll-progress" aria-hidden="true"></div>

<div class="flex flex-col min-h-screen max-w-360 mx-auto px-4 md:px-8">
	<div class="stagger" style="--i: 0">
		<Header />
	</div>

	<main id="main" class="flex-1 py-8 md:py-12">
		{@render children()}
	</main>
</div>
