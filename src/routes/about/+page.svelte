<script lang="ts">
	import PageContent from '$lib/components/PageContent.svelte';
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
			Wyzie Labs is an open workshop for design projects, 3D prints, builds, and whatever else we end up making.
			Everything is done by hand, documented as we go, and shared openly. From the same team behind <a
				href="https://sub.wyzie.io"
				class="underline"
				target="_blank"
				rel="noopener noreferrer">Wyzie Subs</a
			>
			and
			<a
				href="https://docs.wyzie.io/i6shark/intro"
				class="underline"
				target="_blank"
				rel="noopener noreferrer">i6.shark</a
			>.
		</p>

		<p>
			If you're looking to work with us, we're available for hire. Reach out through <a
				href="https://wyzie.io"
				class="underline"
				target="_blank"
				rel="noopener noreferrer">wyzie.io</a
			> to get in touch with the team.
		</p>
	</div>
</PageContent>
