<script lang="ts">
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';

	import * as m from '$paraglide/messages';
	import ServicesList from './ServicesList.svelte';
</script>

<section class="section-hero items-center justify-center">
	<div class="kcontainer flex w-full flex-col items-center justify-center gap-16 px-4 text-center">
		<div class="flex flex-col gap-2">
			<AnimatedBadge class=" flex items-center gap-2">
				💻
				<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
				{m['services.hero.suptitle']()}
			</AnimatedBadge>

			<h1
				class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text font-bold text-transparent"
			>
				{m['services.hero.title']()}
			</h1>
			<p class="text-muted-foreground mx-auto max-w-prose text-lg">
				{m['services.hero.description']()}
			</p>
		</div>

		<ServicesList />
	</div>
</section>
