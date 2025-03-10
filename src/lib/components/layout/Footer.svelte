<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { brand, navigationLinks, socialLinks, type LinkType } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import Link from '../base/Link.svelte';
	import Button from '../ui/button/button.svelte';
	import { IconArrowRight, IconMessageCirclePlus } from '@tabler/icons-svelte';

	type Links = {
		title: string;
		links: LinkType[];
	};

	const footerLinks = {
		work: {
			title: m.nav_projects(),
			links: [
				{
					label: 'see_all',
					href: route('/projets')
				}
			]
		},
		brand: {
			title: m.brand_name_short(),
			links: navigationLinks
		},
		connect: {
			title: m.brand_connect(),
			links: socialLinks
		}
	} as const satisfies Record<string, Links>;
</script>

<footer class="kcontainer flex flex-col gap-12 px-4 py-8 md:gap-20 md:pt-20 md:pb-12">
	<!-- CTA -->
	<div class="bg-primary text-primary-foreground rounded-2xl px-4 py-8 md:py-20">
		<div class="mx-auto flex max-w-4xl flex-col items-start gap-4">
			<div class="flex flex-col gap-4 md:gap-8">
				<h2 class="text-2xl font-medium md:text-3xl">
					{m.footer_cta()}
				</h2>
				<div class="flex gap-2">
					<Button variant="secondary" href={localizeHref(route('/contact'))}>
						<IconMessageCirclePlus />
						{m.lets_talk_about_it()}
					</Button>
				</div>
			</div>
			<div class="bg-secondary/50 my-4 h-[1px] w-full md:my-8"></div>
			<div class="flex flex-col gap-4 md:gap-8">
				<h3 class="text-xl font-medium">
					{m.footer_cta_other()}
				</h3>
				<div class="grid gap-16 md:grid-cols-3">
					<div class="flex flex-col">
						<h4 class="font-medium">
							{m.my_email()}
						</h4>
						<Link href={`mailto:${brand.email}`}>
							{brand.email}
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Links -->
	<div class="grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
		{#each Object.entries(footerLinks) as [key, links] (key)}
			{@const { title, links: sublinks } = links}
			<div class="flex flex-col gap-4">
				<h2 class="font-medium">{title}</h2>
				<ul class="flex flex-col gap-2">
					{#each sublinks as link}
						<li>
							<a
								href={localizeHref(link.href)}
								class="text-muted-foreground/90 hover:text-primary flex items-center gap-1 transition"
								target={'external' in link && link.external ? '_blank' : undefined}
							>
								{translate(link.label)}
								{#if link.label === 'see_all'}
									<IconArrowRight class="size-4" />
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<!-- Fourth col: CTA -->
		<div class="col-span-full flex flex-col gap-4 lg:col-span-1">
			<h2 class="font-medium">
				{m.footer_cta_secondary()}
			</h2>
			<div class="flex flex-col gap-4">
				<p class="text-muted-foreground/90">
					{m.footer_cta_secondary_desc({
						brand: m.brand_name_short()
					})}
				</p>
				<Button variant="outline" href={route('/')}>
					{m.contact_me()}
					<IconArrowRight class="animate-bounce-x" />
				</Button>
			</div>
		</div>
	</div>

	<!-- Copyright -->
	<div
		class="flex flex-col justify-between gap-4 border-t pt-8 md:flex-row md:items-center md:pt-12"
	>
		<a href={route('/')} aria-label="home" class="flex items-center gap-4">
			<enhanced:img src="$assets/logo.png" alt="An alt text" class="size-10 rounded-lg" />
			<span class="text-2xl font-medium">{m.brand_name_short()}.</span>
		</a>
		<span class="text-muted-foreground text-sm">
			{m.footer_copyright({
				year: new Date().getFullYear(),
				brand: m.brand_name()
			})}
		</span>
	</div>
</footer>
