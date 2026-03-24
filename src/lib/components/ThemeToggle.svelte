<script lang="ts">
	import { browser } from '$app/environment';
	import { SunIcon, MoonIcon } from '@lucide/svelte';

	let dark = $state(false);

	$effect(() => {
		if (browser) {
			dark = document.documentElement.classList.contains('dark');
		}
	});

	function toggle() {
		dark = !dark;
		if (browser) {
			document.documentElement.classList.toggle('dark', dark);
			try {
				localStorage.setItem('theme', dark ? 'dark' : 'light');
			} catch {
				// localStorage unavailable (private browsing, storage full, etc.)
			}
		}
	}
</script>

<button
	onclick={toggle}
	aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	class="group icon-button"
>
	<span
		class="block"
		style="transform: rotate({dark
			? '180deg'
			: '0deg'}); transition: transform 0.4s var(--ease-smooth);"
	>
		{#if dark}
			<SunIcon size={16} />
		{:else}
			<MoonIcon size={16} />
		{/if}
	</span>
</button>
