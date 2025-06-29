<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { IconBulb } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
</script>

<svelte:head>
	<title>{page.status} - {page.error?.message}</title>
</svelte:head>

<div class="kcontainer flex min-h-[60svh] flex-col items-center justify-center text-center">
	<div class="flex items-center justify-center">
		<IconBulb class="text-muted-foreground mr-4 size-12" />
		<div>
			<h1 class="text-7xl font-bold">{page.status}</h1>
			<p class="text-muted-foreground text-xl">{page.error?.message}</p>
		</div>
	</div>
	<p class="text-muted-foreground mt-6 max-w-md">
		{m['error.title']}
	</p>
	<div class="mt-8">
		<Button href={localizeHref('/')} size="lg">{m['error.back_to_home']}</Button>
	</div>
</div>
