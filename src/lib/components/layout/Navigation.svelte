<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import NavigationButton from './NavigationButton.svelte';
	import { navigation } from '$lib/stores/common.svelte';
	import { innerHeight } from 'svelte/reactivity/window';
	import { circOut, cubicIn } from 'svelte/easing';
	import { route } from '$lib/ROUTES';

	const baseFlyParams = {
		y: (innerHeight.current || 0) * -1,
		opacity: 1,
		easing: circOut,
		duration: 300
	} satisfies FlyParams;

	const baseFlyOutParams = {
		...baseFlyParams,
		easing: cubicIn,
		duration: 300
	} satisfies FlyParams;

	const navLinks = [
		{
			label: 'home',
			href: route('/')
		},
		{
			label: 'about',
			href: route('/')
		},
		{
			label: 'projects',
			href: route('/')
		},
		{
			label: 'blog',
			href: route('/')
		}
	];

	const otherLinks = [
		{
			label: 'contact',
			href: route('/')
		},
		{
			label: 'legal_notice',
			href: route('/')
		},
		{
			label: 'privacy_policy',
			href: route('/')
		}
	];

	let latestHoveredLink = $state(navLinks[0]);

	$inspect(latestHoveredLink);
</script>

<nav class="position-nav h-nav kcontainer fixed z-50">
	<div class="flex h-full w-full items-center justify-between rounded-[15px]">
		<a href={route('/')} aria-label="home">
			<enhanced:img src="$assets/logo.png" alt="An alt text" class="size-12 rounded-lg" />
		</a>
		<NavigationButton />
	</div>
</nav>

<!-- This is the part that comes down -->
<div>
	{#if navigation.state === 'open'}
		<div in:fly={baseFlyParams} out:fly={baseFlyOutParams} class="bg-muted fixed inset-0 p-4">
			<div class="kcontainer flex h-full flex-col items-stretch justify-center gap-8">
				<ul class="flex flex-col">
					{#each navLinks as link}
						{@const { label, href } = link}
						<li class="border-b-border border-b-[1px] last:border-b-0">
							<a
								onmouseenter={() => (latestHoveredLink = link)}
								onclick={() => (navigation.state = 'closed')}
								class=" text-muted-foreground hover:text-primary flex translate-x-0 py-6 text-7xl font-semibold uppercase transition-all duration-200 hover:-translate-x-12"
								{href}
							>
								{label}
							</a>
						</li>
					{/each}
				</ul>
				<div>
					<ul>
						{#each otherLinks as link}
							{@const { label, href } = link}
							<li>
								<a
									onclick={() => (navigation.state = 'closed')}
									class="text-muted-foreground uppercase"
									{href}
								>
									{label}
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
			class="bg-primary fixed top-0 right-0 bottom-0 w-1/3"
		></div>
	{/if}
</div>
