<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import NavigationButton from './NavigationButton.svelte';
	import { navigation } from '$lib/stores/common.svelte';
	import { innerHeight } from 'svelte/reactivity/window';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import { route } from '$lib/ROUTES';
	import { translate } from '$lib/utils/i18n';
	import { Button } from '../ui/button';
	import * as m from '$paraglide/messages';
	import { cn } from '$lib/utils/ui';
	import { navigationLinks, type LinkType } from '$lib/utils/config';
	import { page } from '$app/state';
	import { deLocalizeHref, localizeHref } from '$paraglide/runtime';
	import NavigationLangSwitcher from './NavigationLangSwitcher.svelte';

	const baseFlyParams = {
		y: (innerHeight.current || 0) * -1,
		opacity: 1,
		easing: cubicOut,
		duration: 500
	} satisfies FlyParams;

	const baseFlyOutParams = {
		...baseFlyParams,
		easing: cubicIn,
		duration: 500
	} satisfies FlyParams;

	const otherLinks = [
		{
			label: 'nav.contact',
			href: route('/contact')
		},
		{
			label: 'nav.legal_notice',
			href: route('/mentions-legales')
		},
		{
			label: 'nav.cgv',
			href: route('/conditions-generales-de-vente')
		}
	] as const satisfies LinkType[];

	const currentRoute = $derived(
		navigationLinks.find((link) => link.href === deLocalizeHref(page.url.pathname)) ??
			navigationLinks[0]
	);

	let latestHoveredLink = $state(currentRoute);
</script>

<nav class={cn('position-nav h-nav kcontainer fixed z-50 transition duration-300 lg:px-4')}>
	<!-- wrapper -->
	<div
		class={cn(
			'flex h-full w-full items-center justify-between transition-all duration-300 lg:rounded-2xl',
			navigation.state === 'open' && 'px-4',
			navigation.state === 'closed' &&
				'bg-popover shadow-foreground/5 px-4 shadow-lg drop-shadow-sm delay-[300ms]'
		)}
	>
		<div class="flex h-full w-full items-center justify-between rounded-[15px]">
			<a href={localizeHref(route('/'))} aria-label={m['nav.home']()}>
				<enhanced:img
					src="$assets/logo.avif"
					alt={m['common.kesval_logo']()}
					class="size-10 rounded-lg"
				/>
			</a>
			<div class="flex items-center gap-2">
				<NavigationLangSwitcher />
				<Button
					class={cn(
						'px-4 ring-1 ring-transparent transition-all duration-300',
						navigation.state === 'open' &&
							'md:bg-background md:text-primary md:hover:bg-background/90 md:ring-primary mr-6 delay-50 md:mr-0',
						navigation.state === 'closed' && 'delay-[400ms]'
					)}
					size="lg"
					href={localizeHref(route('/contact'))}
					onclick={() => (navigation.state = 'closed')}
				>
					{m['common.cta_small']()}
				</Button>
				<NavigationButton />
			</div>
		</div>
	</div>
</nav>

<!-- This is the part that comes down -->
<div>
	{#if navigation.state === 'open'}
		<div
			in:fly={baseFlyParams}
			out:fly={baseFlyOutParams}
			class="fixed inset-0 z-30 bg-white shadow-sm"
		>
			<div
				class="kcontainer flex h-full flex-col items-stretch justify-center gap-4 p-4 lg:px-8 xl:gap-8"
			>
				<ul class="mt-12 flex flex-col">
					{#each navigationLinks as link (link.label)}
						{@const { label, href: absoluteHref } = link}
						{@const href = localizeHref(absoluteHref)}
						<li class="border-b-border border-b-[1px] last:border-b-0">
							<a
								onmouseenter={() => (latestHoveredLink = link)}
								onmouseleave={() => (latestHoveredLink = currentRoute)}
								onclick={() => (navigation.state = 'closed')}
								class={cn(
									'text-muted-foreground/80 hover:text-primary flex translate-x-0 py-6 text-5xl font-bold uppercase transition-all duration-300 xl:text-7xl xl:hover:-translate-x-12',
									currentRoute.href === link.href &&
										latestHoveredLink.href === link.href &&
										'text-primary xl:-translate-x-12'
								)}
								{href}
							>
								{#await translate(label) then translation}
									{translation}
								{/await}
							</a>
						</li>
					{/each}
				</ul>
				<div>
					<ul>
						{#each otherLinks as link (link.label)}
							{@const { label, href: absoluteHref } = link}
							{@const href = localizeHref(absoluteHref)}
							<li>
								<a
									onclick={() => (navigation.state = 'closed')}
									class="text-muted-foreground uppercase"
									{href}
								>
									{#await translate(label) then translation}
										{translation}
									{/await}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div
			in:fly={{
				...baseFlyParams,
				delay: 150
			}}
			out:fly={{
				...baseFlyOutParams,
				delay: 150
			}}
			class="bg-primary fixed top-0 right-0 bottom-0 z-30 flex w-18 items-center justify-center shadow-sm transition-all md:w-1/3"
		>
			{#each navigationLinks as link (link.label)}
				{@const { label, href: absoluteHref, image: src } = link}
				{@const href = localizeHref(absoluteHref)}
				{#await translate(label) then translation}
					<a
						aria-label={translation}
						{href}
						class={cn(
							'absolute inset-0 top-1/2 z-50 flex translate-x-[125%] -translate-y-1/2 items-center transition duration-500',
							latestHoveredLink.href === link.href && '-translate-x-1/6'
						)}
					>
						<enhanced:img
							{src}
							alt={translation}
							class={cn('nav-image-drop hidden md:block', 'imageClass' in link && link.imageClass)}
						/>
					</a>
				{/await}
			{/each}
		</div>
	{/if}
</div>
