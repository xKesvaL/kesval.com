<script lang="ts">
	import { type Icon, IconUser } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { Separator } from '$lib/components/ui/separator';
	import type { Picture } from 'vite-imagetools';
	import OLWE from '$assets/clients/olwe.svg';
	import MVP from '$assets/clients/mvp.png';

	type Client = {
		icon: Icon | Picture | string;
		name: string;
		nameShort?: string; // In case the name is too long
		link?: string;
		type?: 'image' | 'icon';
		color?: string;
	};

	const clients: Client[] = [
		{
			link: 'https://olwe.fr',
			icon: OLWE,
			name: 'OLWE Groupe',
			nameShort: 'OLWE',
			type: 'image',
			color: '#FFB028'
		},
		{
			link: 'https://mavoitureparfaite.fr',
			icon: MVP,
			name: 'Ma Voiture Parfaite',
			nameShort: 'MVP',
			type: 'image',
			color: '#245685'
		},
		{
			link: '#',
			icon: IconUser,
			name: m['common.your_name_here'](),
			nameShort: m['common.your_name_here_short']()
		},
		{
			link: '#',
			icon: IconUser,
			name: m['common.your_name_here'](),
			nameShort: m['common.your_name_here_short']()
		},
		{
			link: '#',
			icon: IconUser,
			name: m['common.your_name_here'](),
			nameShort: m['common.your_name_here_short']()
		},
		{
			link: '#',
			icon: IconUser,
			name: m['common.your_name_here'](),
			nameShort: m['common.your_name_here_short']()
		},
		{
			link: '#',
			icon: IconUser,
			name: m['common.your_name_here'](),
			nameShort: m['common.your_name_here_short']()
		},
		{
			link: '#',
			icon: IconUser,
			name: m['common.your_name_here'](),
			nameShort: m['common.your_name_here_short']()
		}
	];
</script>

<section
	class="section bg-primary pyc-lg lg:pyc-xl relative z-10 items-start justify-start overflow-hidden"
>
	<div class="kcontainer text-primary-foreground flex w-full flex-col gap-8 px-4 md:gap-12">
		<!-- Header with animated badge -->
		<div class=" flex w-full items-center gap-4 md:gap-8">
			<h2 class="h4 text-primary-foreground w-3/4 md:w-max">
				{m['home.clients.title']()}
			</h2>
			<Separator class="bg-primary-foreground/50 h-[1px] !w-auto grow" />
		</div>

		<!-- Client grid with hover effects -->
		<div class=" grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
			{#each clients as client, i (`${client.name}-${i}`)}
				<a
					href={client.link}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-primary-foreground/10 hover:bg-primary-foreground/15 border-primary-foreground/20 flex items-center justify-center gap-3 rounded-xl border px-2 py-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-[var(--client-color)]"
					style={`--client-color: ${client.color || 'var(--color-primary-foreground)'}`}
				>
					{#if client.type === 'icon' || client.type === undefined}
						{@const IconComponent = client.icon as Icon}
						<IconComponent class="size-6 md:size-7" />
					{:else if client.type === 'image'}
						{#if typeof client.icon === 'string'}
							<img src={client.icon} alt={client.name} class="size-6 object-contain md:size-7" />
						{:else}
							{@const ImageSrc = client.icon as Picture}
							<enhanced:img src={ImageSrc} alt={client.name} class="size-6 md:size-7" />
						{/if}
					{/if}
					<span class="text-primary-foreground/90 md:font-medium">
						<span class="hidden md:block">{client.name}</span>
						<span class="block md:hidden">{client.nameShort || client.name}</span>
					</span>
				</a>
			{/each}
		</div>
	</div>

	<!-- Subtle background pattern -->
	<div class="absolute inset-0 -z-10 opacity-15">
		<div class="bgc-dot h-full w-full"></div>
	</div>
</section>
