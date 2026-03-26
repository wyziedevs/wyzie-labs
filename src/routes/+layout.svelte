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
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
	<meta property="og:site_name" content="Wyzie Labs" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<div class="flex flex-col min-h-screen max-w-360 mx-auto px-(--safe-px)">
	<div class="sticky top-0 z-50 bg-bg -mx-(--safe-px) px-(--safe-px) stagger" style="--i: 0">
		<Header />
	</div>

	<main id="main" class="flex-1 py-8 md:py-12 relative z-0">
		{@render children()}
	</main>

	<footer class="py-6 pb-(--safe-pb) text-xs text-muted animate-fade">
		<span>&copy; {new Date().getFullYear()}
			<a href="https://wyzie.io" class="text-muted link-underline hover:text-fg">Wyzie.io</a>
		</span>
	</footer>
</div>
