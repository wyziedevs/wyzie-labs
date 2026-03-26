<script lang="ts">
	import { ArrowRightIcon } from '@lucide/svelte';
	import type { Component } from 'svelte';

	interface Props {
		href: string;
		icon: Component<{ size?: number }>;
		label: string;
		value: string;
		staggerIndex?: number;
		iconClass?: string;
	}

	let { href, icon: Icon, label, value, staggerIndex = 0, iconClass = '' }: Props = $props();
</script>

<a
	{href}
	class="card-fill stagger group relative flex items-center justify-between py-3 px-3 -mx-3 overflow-hidden transition-colors duration-300 ease-smooth hover:text-bg"
	style="--i: {staggerIndex}"
>
	<span class="relative z-1 flex items-center gap-3">
		<span
			class="text-muted transition-[color,transform] duration-300 ease-smooth group-hover:text-bg group-hover:scale-110 {iconClass}"
		>
			<Icon size={16} />
		</span>
		<span class="label text-muted transition-colors duration-300 ease-smooth group-hover:text-bg"
			>{label}</span
		>
	</span>
	<span class="relative z-1 flex items-center gap-1.5">
		<span class="text-sm transition-colors duration-300 ease-smooth group-hover:text-bg"
			>{value}</span
		>
	</span>
</a>
