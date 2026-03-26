<script lang="ts">
	import { DownloadIcon, ExternalLinkIcon } from '@lucide/svelte';
	import type { Download as DownloadType, Link } from '$lib/projects';

	interface Props {
		downloads?: DownloadType[];
		links?: Link[];
	}

	let { downloads = [], links = [] }: Props = $props();
</script>

{#if downloads.length > 0 || links.length > 0}
	<div class="flex flex-col gap-8 mt-8">
		{#if downloads.length > 0}
			<section>
				<h2 class="label text-muted mb-3">Downloads</h2>
				<ul class="flex flex-col">
					{#each downloads as dl}
						<li>
							<a
								href={dl.url}
								class="group/dl flex items-center gap-3 py-3 min-h-[44px] text-sm link-underline min-w-0"
								download
								aria-label="Download {dl.label}{dl.size ? ` (${dl.size})` : ''}"
							>
								<span class="flex-1 truncate">{dl.label}</span>
								{#if dl.size}
									<span class="text-xs text-muted">{dl.size}</span>
								{/if}
								<DownloadIcon size={14} class="text-muted" />
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if links.length > 0}
			<section>
				<h2 class="label text-muted mb-3">Links</h2>
				<ul class="flex flex-col">
					{#each links as link}
						<li>
							<a
								href={link.url}
								class="group/ext flex items-center gap-3 py-3 min-h-[44px] text-sm link-underline min-w-0"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span class="flex-1 truncate">{link.label}</span>
								<ExternalLinkIcon size={14} class="text-muted" />
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</div>
{/if}
