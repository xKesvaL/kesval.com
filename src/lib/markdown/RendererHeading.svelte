<script lang="ts">
	import { page } from '$app/stores';
  import GithubSlugger from 'github-slugger'
  import { copy } from '@svelte-put/copy';
  import * as m from "$paraglide/messages";
	import { IconLink } from '$lib/icons';

  export let text: string;
	export let depth: number;
	export let raw: string;

  const slugger = new GithubSlugger()

  const headingLevel = depth ?? raw.match(/#/g)?.length;
	const element = `h${headingLevel}`;
	const slug = slugger.slug(text);

  const fullUrl = `${$page.url.origin}${$page.url.pathname}#${slug}`;
</script>

<svelte:element this={element} id={slug} class="flex items-center gap-2">
	{text}

	<a
		class="w-6 h-6 hover:text-tertiary transition"
		href={`#${slug}`}
		title={m.copy_link()}
		use:copy={{ text: fullUrl }}
	>
    <IconLink />
	</a>
</svelte:element>