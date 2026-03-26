<script lang="ts">
	import { ArrowLeftIcon } from '@lucide/svelte';

	interface Props {
		href?: string;
		label?: string;
		className?: string;
	}

	let { href = '/', label = 'All projects', className = '' }: Props = $props();
</script>

<div class={className}>
	<a
		{href}
		class="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 ease-smooth hover:text-fg link-underline pb-1.5"
	>
		<ArrowLeftIcon
			size={14}
			class="transition-transform duration-200 ease-smooth group-hover:-translate-x-1"
		/>
		{label}
	</a>
</div>
