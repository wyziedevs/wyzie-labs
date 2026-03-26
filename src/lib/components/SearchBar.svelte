<script lang="ts">
	import { browser } from '$app/environment';

	interface Props {
		value: string;
		count: number;
		oninput: (value: string) => void;
	}

	let { value, count, oninput }: Props = $props();
	let inputEl: HTMLInputElement | undefined = $state();

	$effect(() => {
		if (!browser) return;
		function onKeydown(e: KeyboardEvent) {
			const tag = document.activeElement?.tagName;
			const editable =
				document.activeElement instanceof HTMLElement && document.activeElement.isContentEditable;
			if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !editable) {
				e.preventDefault();
				inputEl?.focus();
			}
		}
		window.addEventListener('keydown', onKeydown);
		return () => window.removeEventListener('keydown', onKeydown);
	});
</script>

<search class="flex items-center gap-4">
	<label for="project-search" class="sr-only">Search projects</label>
	<div class="group/search relative flex-1">
		<input
			bind:this={inputEl}
			id="project-search"
			type="search"
			{value}
			oninput={(e) => oninput(e.currentTarget.value)}
			placeholder="Search projects..."
			maxlength={200}
			class="w-full py-2.5 px-3 min-h-11 border border-border bg-bg text-fg text-sm outline-none placeholder:text-muted peer"
		/>
		<span
			class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-fg pointer-events-none transition-[width,left] duration-300 ease-smooth group-focus-within/search:w-full group-focus-within/search:left-0"
		></span>
		{#if !value}
			<kbd
				class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted border border-border px-1.5 py-0.5 font-mono pointer-events-none peer-focus:opacity-0 transition-opacity hidden sm:inline"
				>/</kbd
			>
		{/if}
	</div>
	{#if value}
		<span class="text-xs text-muted animate-scale-in" aria-live="polite"
			>{count} result{count !== 1 ? 's' : ''}</span
		>
	{/if}
</search>
