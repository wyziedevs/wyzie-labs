<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import { MenuIcon, XIcon } from '@lucide/svelte';
	import { page } from '$app/state';

	const NAV_LINKS = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/discord', label: 'Discord' },
		{ href: '/contact', label: 'Contact' },
	];

	let open = $state(false);

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === '/') return path === '/';
		return path === href || path.startsWith(href + '/');
	}

	$effect(() => {
		page.url;
		open = false;
	});
</script>

<header class="flex items-center justify-between pt-8">
	<a
		href="/"
		class="font-display text-2xl font-bold tracking-tight uppercase transition-[letter-spacing] duration-200 hover:tracking-wide"
		>Wyzie Labs</a
	>

	<nav aria-label="Main" class="hidden md:flex items-center gap-6">
		{#each NAV_LINKS as link}
			<a
				href={link.href}
				class="text-sm hover:text-fg link-underline {isActive(link.href)
					? 'text-fg'
					: 'text-muted'}"
				aria-current={isActive(link.href) ? 'page' : undefined}>{link.label}</a
			>
		{/each}
		<ThemeToggle />
	</nav>

	<div class="flex items-center gap-2 md:hidden">
		<ThemeToggle />
		<button
			onclick={() => (open = !open)}
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			aria-controls="mobile-menu"
			class="relative icon-button"
		>
			<span
				class="absolute inset-0 flex items-center justify-center transition-[transform,opacity] duration-200"
				style="opacity: {open ? 0 : 1}; transform: rotate({open ? '45deg' : '0deg'});"
			>
				<MenuIcon size={18} />
			</span>
			<span
				class="absolute inset-0 flex items-center justify-center transition-[transform,opacity] duration-200"
				style="opacity: {open ? 1 : 0}; transform: rotate({open ? '0deg' : '-45deg'});"
			>
				<XIcon size={18} />
			</span>
		</button>
	</div>
</header>

<div
	id="mobile-menu"
	class="grid md:hidden bg-bg"
	style="grid-template-rows: {open
		? '1fr'
		: '0fr'}; transition: grid-template-rows 0.3s var(--ease-smooth);"
>
	<nav
		aria-label="Mobile"
		class="flex flex-col overflow-hidden"
		class:border-b={open}
		class:border-border={open}
		class:pb-6={open}
		class:pt-1={open}
	>
		{#each NAV_LINKS as link, i}
			<a
				href={link.href}
				class="py-3 min-h-11 flex items-center text-sm hover:text-fg {isActive(
					link.href,
				)
					? 'text-fg'
					: 'text-muted'}"
				aria-current={isActive(link.href) ? 'page' : undefined}
				style="opacity: {open ? 1 : 0}; transform: translateY({open
					? '0'
					: '4px'}); transition: opacity 0.25s var(--ease-smooth) {open
					? i * 40
					: 0}ms, transform 0.25s var(--ease-smooth) {open ? i * 40 : 0}ms;">{link.label}</a
			>
		{/each}
	</nav>
</div>
