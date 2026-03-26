<script lang="ts">
	import {
		MailIcon,
		MessageCircleIcon,
	} from '@lucide/svelte';
	import PageContent from '$lib/components/PageContent.svelte';
</script>

<svelte:head>
	<title>Contact / Wyzie Labs</title>
	<meta
		name="description"
		content="Get in touch with Wyzie Labs via email or Discord. Questions, collaboration, and feedback welcome."
	/>
</svelte:head>

<PageContent title="Contact">
	<p class="stagger text-base leading-7" style="--i: 1">
		Have a question, idea, or want to collaborate? Reach out through any of the channels below.
	</p>

	<hr
		class="animate-wipe my-6 border-t border-(--color-border) opacity-15"
		style="animation-delay: 120ms"
	/>

	<div class="flex flex-col">
		<a href="mailto:hello@wyzie.io" class="contact-row card-fill stagger group" style="--i: 3">
			<span class="relative z-1 flex items-center gap-3">
				<MailIcon size={16} class="row-icon mail-icon" />
				<span class="row-label">Email</span>
			</span>
			<span class="relative z-1 flex items-center gap-1.5">
				<span class="text-sm">hello@wyzie.io</span>
			</span>
		</a>

		<a href="/discord" class="contact-row card-fill stagger group" style="--i: 4">
			<span class="relative z-1 flex items-center gap-3">
				<MessageCircleIcon size={16} class="row-icon msg-icon" />
				<span class="row-label">Discord</span>
			</span>
			<span class="relative z-1 flex items-center gap-1.5">
				<span class="text-sm">Join community</span>
			</span>
		</a>
	</div>
</PageContent>

<style>
	.contact-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		padding: 0.75rem 0.75rem;
		margin-left: -0.75rem;
		margin-right: -0.75rem;
		overflow: hidden;
		transition: color 0.35s var(--ease-smooth);
	}

	@media (hover: hover) {
		.contact-row:hover {
			color: var(--color-bg);
		}
	}

	.row-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--color-muted);
		flex-shrink: 0;
		transition: color 0.35s var(--ease-smooth);
	}

	@media (hover: hover) {
		.contact-row:hover .row-label {
			color: var(--color-bg);
		}
	}

	/* Icon base styling */
	.contact-row :global(.row-icon) {
		color: var(--color-muted);
		transition:
			color 0.35s var(--ease-smooth),
			transform 0.35s var(--ease-smooth);
	}

	@media (hover: hover) {
		.contact-row:hover :global(.row-icon) {
			color: var(--color-bg);
			transform: rotate(-12deg);
		}
	}


</style>
