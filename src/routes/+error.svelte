<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { IconExclamationCircle } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
</script>

<svelte:head>
	<title>{page.status} - {page.error?.message}</title>
</svelte:head>

<div class="kcontainer flex min-h-[60svh] flex-col items-center justify-center text-center">
	<div class="flex flex-col items-center justify-center">
		<div class="flex items-center gap-4">
			<IconExclamationCircle class="mr-4 size-20" stroke={2.5} />
			<h1 class="text-7xl font-bold">{page.status}</h1>
		</div>
		<p class="text-muted-foreground text-xl">{page.error?.message}</p>
	</div>
	<p class="text-muted-foreground mt-6 max-w-md">
		{m['error.title']()}
	</p>
	<div class="mt-8">
		<Button href={localizeHref('/')} size="lg">{m['error.back_to_home']()}</Button>
	</div>
</div>
