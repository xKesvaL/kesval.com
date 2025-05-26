<script lang="ts">
	import {
		IconBrandAirbnb,
		IconBrandGoogle,
		IconBrandFigma,
		IconBrandAppstore,
		IconBrandDribbble,
		IconBrandWebflow,
		IconBrandSlack,
		IconBrandAdobe,
		type Icon
	} from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { Separator } from '$lib/components/ui/separator';

	type Client = {
		icon: Icon;
		name: string;
		link?: string;
	};

	const clients: Client[] = [
		{ link: '#', icon: IconBrandGoogle, name: 'Client 1' },
		{ link: '#', icon: IconBrandAirbnb, name: 'Client 2' },
		{ link: '#', icon: IconBrandFigma, name: 'Client 3' },
		{ link: '#', icon: IconBrandAppstore, name: 'Client 4' },
		{ link: '#', icon: IconBrandSlack, name: 'Client 5' },
		{ link: '#', icon: IconBrandDribbble, name: 'Client 6' },
		{ link: '#', icon: IconBrandWebflow, name: 'Client 7' },
		{ link: '#', icon: IconBrandAdobe, name: 'Client 8' }
	];
</script>

<section
	class="section bg-primary pyc-lg lg:pyc-xl relative z-10 items-start justify-start overflow-hidden"
>
	<div class="kcontainer text-primary-foreground flex w-full flex-col gap-8 px-4 md:gap-12">
		<!-- Header with animated badge -->
		<div class="animate-appear flex w-full items-center gap-8">
			<h2 class="h4 text-primary-foreground w-max">
				{m['home.clients.title']()}
			</h2>
			<Separator class="bg-primary-foreground/50 h-[1px] !w-auto grow" />
		</div>

		<!-- Client grid with hover effects -->
		<div class="animate-appear grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
			{#each clients as client, i}
				<a
					href={client.link}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-primary-foreground/5 hover:bg-primary-foreground/10 border-primary-foreground/10 flex items-center justify-center gap-3 rounded-xl border p-6 transition hover:-translate-y-1"
				>
					<client.icon class="size-6 md:size-7" />
					<span class="text-primary-foreground/90 font-medium">{client.name}</span>
				</a>
			{/each}
		</div>
	</div>

	<!-- Subtle background pattern -->
	<div class="absolute inset-0 -z-10 opacity-15">
		<div class="bgc-dot h-full w-full"></div>
	</div>
</section>
