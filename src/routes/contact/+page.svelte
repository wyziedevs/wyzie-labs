<script lang="ts">
	import { MailIcon, MessageCircleIcon } from '@lucide/svelte';
	import { PageContent, ContactRow } from '$lib/components';
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
		<ContactRow
			href="mailto:hello@wyzie.io"
			icon={MailIcon}
			label="Email"
			value="hello@wyzie.io"
			staggerIndex={3}
			iconClass="animate-float"
		/>
		<ContactRow
			href="/discord"
			icon={MessageCircleIcon}
			label="Discord"
			value="Join community"
			staggerIndex={4}
			iconClass="animate-float"
		/>
	</div>
</PageContent>
