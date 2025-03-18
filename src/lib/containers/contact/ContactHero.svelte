<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { brand } from '$lib/utils/config';
	import { cn } from '$lib/utils/ui';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-svelte';
	import { MessageSquare } from 'lucide-svelte';

	const contactInfo = [
		{
			icon: IconMail,
			label: 'Email',
			value: brand.email,
			href: `mailto:${brand.email}`
		},
		{
			icon: IconBrandGithub,
			label: 'GitHub',
			value: '@kesval',
			href: brand.github
		},
		{
			icon: IconBrandLinkedin,
			label: 'LinkedIn',
			value: 'Jordan Abeddou',
			href: brand.linkedin
		},
		{
			icon: IconMapPin,
			label: 'Location',
			value: 'Mulhouse, France',
			href: null
		}
	];
</script>

<section class="kcontainer min-h-screen-wo-nav section flex flex-col gap-8 px-4">
	<div class="flex flex-col gap-4">
		<h1 class="text-5xl font-bold">
			{m.contact_hero_title()}
		</h1>
		<p class="text-muted-foreground text-lg">
			{m.contact_hero_subtitle()}
		</p>
	</div>
	<div class="grid gap-8 md:grid-cols-2">
		<form class="shadow-cool flex flex-col gap-4 rounded-lg border p-8">
			<div class="flex items-center gap-4">
				<MessageSquare class="text-primary size-6" />
				<h2 class="text-2xl font-medium">
					{m.contact_hero_contact_me()}
				</h2>
			</div>
		</form>
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-4">
				<h2 class="text-xl font-medium">
					{m.contact_hero_get_in_touch()}
				</h2>
				<p class="text-muted-foreground max-w-prose">
					{m.contact_hero_get_in_touch_description()}
				</p>
			</div>
			<div class="flex flex-col gap-4">
				{#each contactInfo as item}
					<svelte:element
						this={item.href ? 'a' : 'div'}
						href={item.href}
						class="group flex items-start gap-4"
						rel="noreferrer"
						target={item.href?.startsWith('mailto:') ? '_self' : '_blank'}
					>
						<div
							class="bg-primary/5 border-primary text-primary flex size-10 shrink-0 items-center justify-center rounded-full border"
						>
							<item.icon class="size-5" />
						</div>

						<div class="flex size-10 w-full flex-col justify-between">
							<h3 class="leading-none font-medium">{item.label}</h3>

							<p
								class={cn(
									'text-muted-foreground leading-none',
									item.href && 'group-hover:text-primary'
								)}
							>
								{item.value}
							</p>
						</div>
					</svelte:element>
				{/each}
			</div>
			<hr />
			<div class="flex flex-col gap-4">
				<h2 class="text-xl font-medium">
					{m.contact_hero_availability()}
				</h2>
				<p class="text-muted-foreground max-w-prose">
					{m.contact_hero_availability_description()}
				</p>
				<div class="bg-muted shadow-cool flex flex-col items-start gap-4 rounded-lg p-6">
					<h3 class="text-xl font-medium">
						{m.contact_hero_looking_for_work()}
					</h3>
					<p class="text-muted-foreground max-w-prose">
						{m.contact_hero_looking_for_work_description()}
					</p>
					<Button
						class="bg-card text-foreground hover:bg-card/90 hover:text-foreground border"
						href={`${localizeHref(route('/a-propos'))}#resume`}
					>
						{m.contact_hero_looking_for_work_cta()}
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
