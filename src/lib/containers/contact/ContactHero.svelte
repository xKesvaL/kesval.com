<script lang="ts">
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { IconArrowRight, IconCalendar, IconMail } from '@tabler/icons-svelte';
	import { brand } from '$lib/utils/config';
</script>

<section class="section-hero relative">
	<h1 class="animate-appear">
		{m['contact.hero.title']()}
	</h1>
	<p class="text-muted-foreground animate-appear max-w-prose text-lg">
		{m['contact.hero.subtitle']()}
	</p>
</section>
