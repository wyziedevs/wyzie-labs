<script lang="ts">
	import { PageContent, ExternalLink } from '$lib/components';
</script>

<svelte:head>
	<title>About / Wyzie Labs</title>
	<meta
		name="description"
		content="Wyzie Labs is a personal workshop for design projects, 3D prints, and builds. Made by hand, documented, and shared openly."
	/>
</svelte:head>

<PageContent title="About">
	<div class="stagger flex flex-col gap-5 text-base leading-7" style="--i: 1">
		<p>
			Wyzie Labs is an open workshop for design projects, 3D prints, builds, and whatever else we
			end up making. Everything is done by hand, documented as we go, and shared openly. From the
			same team behind <ExternalLink href="https://sub.wyzie.io">Wyzie Subs</ExternalLink>
			and
			<ExternalLink href="https://docs.wyzie.io/i6shark/intro">i6.shark</ExternalLink>.
		</p>

		<p>
			If you're looking to work with us, we're available for hire. Reach out through <ExternalLink
				href="https://wyzie.io">wyzie.io</ExternalLink
			> to get in touch with the team.
		</p>
	</div>
</PageContent>
