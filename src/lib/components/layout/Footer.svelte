<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { navigationLinks, socialLinks } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import Button from '../ui/button/button.svelte';
	import { IconArrowRight } from '@tabler/icons-svelte';

	type Links = {
		title: string;
		links: {
			label: string;
			href: string;
		}[];
	};

	const footerLinks = {
		work: {
			title: m.nav_projects(),
			links: []
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

<footer class="kcontainer flex flex-col gap-20 px-4 pb-12">
	<!-- CTA -->
	<div class="bg-primary text-primary-foreground rounded-xl px-4 py-20">
		<div class="mx-auto flex max-w-4xl flex-col">
			<h2 class="text-xl font-medium">
				{m.footer_cta()}
			</h2>
		</div>
	</div>

	<!-- Links -->
	<div class="grid grid-cols-4">
		{#each Object.entries(footerLinks) as [key, links] (key)}
			{@const { title, links: sublinks } = links}
			<div class="flex flex-col gap-4">
				<h2 class="font-medium">{title}</h2>
				<ul class="flex flex-col gap-2">
					{#each sublinks as { label, href }}
						<li>
							<a {href} class="text-muted-foreground/90 hover:text-primary transition">
								{translate(label)}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<!-- Fourth col: CTA -->
		<div class="flex flex-col gap-4">
			<h2 class="font-medium">
				{m.footer_cta_secondary()}
			</h2>
			<p class="text-muted-foreground/90 mb-4">
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

	<!-- Copyright -->
	<div class="flex items-center justify-between border-t pt-12">
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
