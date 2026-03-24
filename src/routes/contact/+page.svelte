<script lang="ts">
	import { onDestroy } from 'svelte';
	import {
		ArrowUpRightIcon,
		MailIcon,
		MessageCircleIcon,
		CheckIcon,
		CopyIcon,
	} from '@lucide/svelte';

	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout>;

	async function copyEmail(e: MouseEvent) {
		e.preventDefault();
		try {
			await navigator.clipboard.writeText('hello@wyzie.io');
			copied = true;
			clearTimeout(copyTimeout);
			copyTimeout = setTimeout(() => (copied = false), 2000);
		} catch {
			// Clipboard API unavailable - fall back to prompt
			window.prompt('Copy this email address:', 'hello@wyzie.io');
		}
	}

	onDestroy(() => clearTimeout(copyTimeout));
</script>

<svelte:head>
	<title>Contact / Wyzie Labs</title>
	<meta
		name="description"
		content="Get in touch with Wyzie Labs via email or Discord. Questions, collaboration, and feedback welcome."
	/>
</svelte:head>

<article class="max-w-170">
	<h1 class="stagger page-title mb-6" style="--i: 0">Contact</h1>

	<p class="stagger text-base leading-7" style="--i: 1">
		Have a question, idea, or want to collaborate? Reach out through any of the channels below.
	</p>

	<hr
		class="stagger animate-wipe my-6 border-t border-(--color-border) opacity-15"
		style="--i: 2; animation-delay: calc(var(--i) * 60ms)"
	/>

	<div class="flex flex-col">
		<div class="contact-row card-fill stagger group" style="--i: 3">
			<a href="mailto:hello@wyzie.io" class="row-link">
				<span class="relative z-1 flex items-center gap-3">
					<MailIcon size={16} class="row-icon mail-icon" />
					<span class="row-label">Email</span>
				</span>
				<span class="relative z-1 flex items-center gap-1.5">
					<span class="text-sm">hello@wyzie.io</span>
					<ArrowUpRightIcon size={14} class="arrow-icon" />
				</span>
			</a>
			<button
				class="copy-btn relative z-1"
				onclick={copyEmail}
				aria-label={copied ? 'Copied to clipboard' : 'Copy email address'}
			>
				{#if copied}
					<CheckIcon size={14} class="copy-check" />
				{:else}
					<CopyIcon size={14} />
				{/if}
			</button>
		</div>

		<a href="/discord" class="contact-row card-fill stagger group" style="--i: 4">
			<span class="relative z-1 flex items-center gap-3">
				<MessageCircleIcon size={16} class="row-icon msg-icon" />
				<span class="row-label">Discord</span>
			</span>
			<span class="relative z-1 flex items-center gap-1.5">
				<span class="text-sm">Join community</span>
				<ArrowUpRightIcon size={14} class="arrow-icon" />
			</span>
		</a>
	</div>
</article>

<style>
	.contact-row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0.75rem 0.75rem;
		margin-left: -0.75rem;
		margin-right: -0.75rem;
		overflow: hidden;
		transition: color 0.35s var(--ease-smooth);
	}

	.contact-row:hover {
		color: var(--color-bg);
	}

	/* Full-width link inside compound row */
	.row-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
		min-width: 0;
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

	.contact-row:hover .row-label {
		color: var(--color-bg);
	}

	/* Icon base styling */
	.contact-row :global(.row-icon) {
		color: var(--color-muted);
		transition:
			color 0.35s var(--ease-smooth),
			transform 0.35s var(--ease-smooth);
	}

	.contact-row:hover :global(.row-icon) {
		color: var(--color-bg);
	}

	/* Mail icon tilts on hover */
	.contact-row:hover :global(.mail-icon) {
		transform: rotate(-12deg);
	}

	/* Message icon scales on hover */
	.contact-row:hover :global(.msg-icon) {
		transform: scale(1.15);
	}

	/* Arrow slides in from bottom-left */
	.contact-row :global(.arrow-icon) {
		opacity: 0;
		transform: translate(-4px, 4px);
		transition:
			opacity 0.25s var(--ease-smooth),
			transform 0.25s var(--ease-smooth);
	}

	.contact-row:hover :global(.arrow-icon) {
		opacity: 1;
		transform: translate(0, 0);
	}

	/* Copy button */
	.copy-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.375rem;
		margin-left: 0.5rem;
		flex-shrink: 0;
		color: var(--color-muted);
		opacity: 0;
		transform: translateX(-4px);
		cursor: pointer;
		background: none;
		border: none;
		transition:
			opacity 0.25s var(--ease-smooth),
			transform 0.25s var(--ease-smooth),
			color 0.25s var(--ease-smooth);
	}

	.contact-row:hover .copy-btn {
		opacity: 0.7;
		transform: translateX(0);
	}

	.copy-btn:hover {
		opacity: 1 !important;
		color: var(--color-bg);
	}

	/* Checkmark confirmation */
	.copy-btn :global(.copy-check) {
		animation: check-in 0.3s var(--ease-smooth) both;
	}

	@keyframes check-in {
		from {
			opacity: 0;
			transform: scale(0.5);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
