<script lang="ts">
	import {
		IconBrandAirbnb,
		IconBrandGoogle,
		IconBrandFigma,
		IconBrandAppstore,
		IconBrandDribbble,
		IconBrandWebflow,
		IconBrandSlack,
		IconBrandAdobe
	} from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { fly } from 'svelte/transition';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';

	// Define client logos with consistent structure
	const clients = [
		{ icon: IconBrandGoogle, name: 'Google' },
		{ icon: IconBrandAirbnb, name: 'Airbnb' },
		{ icon: IconBrandFigma, name: 'Figma' },
		{ icon: IconBrandAppstore, name: 'AppStore' },
		{ icon: IconBrandSlack, name: 'Slack' },
		{ icon: IconBrandDribbble, name: 'Dribbble' },
		{ icon: IconBrandWebflow, name: 'Webflow' },
		{ icon: IconBrandAdobe, name: 'Adobe' }
	];
</script>

<section
	class="section bg-primary pyc-lg lg:pyc-xl relative z-10 items-start justify-start overflow-hidden"
>
	<div class="kcontainer text-primary-foreground flex w-full flex-col gap-8 px-4 md:gap-12">
		<!-- Header with animated badge -->
		<div class="flex w-full items-center gap-8" in:fly={{ y: 20, duration: 600, delay: 200 }}>
			<h2 class="h4 text-primary-foreground w-max">
				{m['home.clients.title']()}
			</h2>
			<Separator class="bg-primary-foreground/20 h-[1px] w-auto grow" />
		</div>

		<!-- Client grid with hover effects -->
		<div
			class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
			in:fly={{ y: 20, duration: 600, delay: 400 }}
		>
			{#each clients as client, i}
				<div
					class="bg-primary-foreground/5 hover:bg-primary-foreground/10 border-primary-foreground/10 shadow-cool flex items-center justify-center gap-3 rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
					in:fly={{ y: 20, duration: 400, delay: 200 + i * 50 }}
				>
					<client.icon class="size-6 md:size-7" />
					<span class="text-primary-foreground/90 font-medium">{client.name}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Subtle background pattern -->
	<div class="absolute inset-0 -z-10 opacity-10">
		<div class="bgc-dot h-full w-full"></div>
	</div>
</section>
