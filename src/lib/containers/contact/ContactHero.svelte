<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import { brand } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import { cn } from '$lib/utils/ui';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import {
		IconBrandGithub,
		IconMessageCircle,
		IconBrandLinkedin,
		IconMail,
		IconMapPin
	} from '@tabler/icons-svelte';

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

<section class="kcontainer min-h-screen-wo-nav section flex flex-col gap-8 px-4 md:gap-16">
	<div class="flex max-w-4xl flex-col gap-6">
		<h1>
			{m['contact.hero.title']()}
		</h1>
		<p class="text-muted-foreground text-xl">
			{m['contact.hero.subtitle']()}
		</p>
	</div>

	<div class="grid gap-12 md:grid-cols-2 lg:gap-16">
		<!-- Contact Form - Now with more padding and space -->
		<form class="shadow-cool flex flex-col gap-6 rounded-2xl border p-10">
			<div class="mb-2 flex items-center gap-4">
				<IconMessageCircle class="text-primary size-7" />
				<h2 class="h3">
					{m['contact.hero.contact_me']()}
				</h2>
			</div>
			<!-- Form content will go here -->
		</form>

		<!-- Contact Information - Now with better spacing -->
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-4">
				<h2 class="h3">
					{m['contact.hero.get_in_touch.title']()}
				</h2>
				<p class="text-muted-foreground max-w-prose text-lg">
					{m['contact.hero.get_in_touch.description']()}
				</p>
			</div>

			<!-- Contact items with better spacing -->
			<div class="flex flex-col gap-6">
				{#each contactInfo as item}
					<svelte:element
						this={item.href ? 'a' : 'div'}
						href={item.href}
						class="group flex items-start gap-5"
						rel="noreferrer"
						target={item.href?.startsWith('mailto:') ? '_self' : '_blank'}
					>
						<div
							class="bg-primary/5 border-primary text-primary flex size-12 shrink-0 items-center justify-center rounded-full border"
						>
							<item.icon class="size-6" />
						</div>

						<div class="flex w-full flex-col justify-between gap-1">
							<h3 class="text-lg font-medium">{item.label}</h3>
							<p class={cn('text-muted-foreground', item.href && 'group-hover:text-primary')}>
								{item.value}
							</p>
						</div>
					</svelte:element>
				{/each}
			</div>
		</div>
	</div>

	<!-- Moved availability section to a separate row for more space -->
	<div class="bg-muted mt-8x rounded-2xl p-8">
		<div class="flex flex-col gap-6">
			<h2>
				{m['contact.hero.availability.title']()}
			</h2>
			<p class="text-muted-foreground max-w-prose text-lg">
				{m['contact.hero.availability.description']()}
			</p>
			<Button
				class="bg-card text-foreground hover:bg-card/90 hover:text-foreground w-fit border"
				href={`${localizeHref(route('/a-propos'))}#resume`}
			>
				{m['contact.hero.looking_for_work.cta']()}
			</Button>
		</div>
	</div>
</section>
