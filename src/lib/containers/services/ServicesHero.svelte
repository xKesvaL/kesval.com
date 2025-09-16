<script lang="ts">
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import * as m from '$paraglide/messages';
</script>

<section class="section-hero min-h-0 items-center justify-center pb-0">
	<div
		class="kcontainer flex w-full flex-col items-center justify-center gap-12 px-4 text-center lg:gap-24"
	>
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
	</div>
</section>
