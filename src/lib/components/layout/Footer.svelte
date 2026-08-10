<script lang="ts">
import {
	IconArrowRight,
	IconCheck,
	IconMessageCirclePlus,
} from "@tabler/icons-svelte";
import { page } from "$app/state";
import { route } from "$lib/ROUTES";
import {
	brand,
	type LinkType,
	legalLinks,
	navigationLinks,
	socialLinks,
} from "$lib/utils/config";
import { getFooterCta } from "$lib/utils/footer-cta";
import { translate } from "$lib/utils/i18n";
import { getFeaturedProjects } from "$lib/utils/projects";
import * as m from "$paraglide/messages";
import { deLocalizeHref, getLocale, localizeHref } from "$paraglide/runtime";
import Link from "../base/Link.svelte";
import Button from "../ui/button/button.svelte";

const showedProjects = $derived(getFeaturedProjects(getLocale()));
const footerCta = $derived(getFooterCta(deLocalizeHref(page.url.pathname)));

type Links = {
	title: string;
	links: LinkType[];
};

const footerLinks = $derived({
	work: {
		title: m["nav.projects"](),
		links: [
			...showedProjects.map((project) => ({
				label: project.title,
				labelIsI18n: false,
				href: route("/projets/[slug]", { slug: project.slug as string }),
			})),
			{
				label: "see_all",
				href: route("/projets"),
			},
		],
	},
	brand: {
		title: m["brand.the_studio"](),
		links: navigationLinks,
	},
	connect: {
		title: m["brand.connect"](),
		links: socialLinks,
	},
	legal: {
		title: m["footer.others"](),
		links: legalLinks,
	},
} as const satisfies Record<string, Links>);
</script>

<footer class="via-background to-background bg-gradient-to-b from-transparent via-10%">
	<div class="kcontainer section gapc-lg lg:gapc-xl flex flex-col px-4">
		<!-- CTA -->
		<div class="bg-primary text-primary-foreground section rounded-2xl px-8 max-md:py-16">
			<div class="mx-auto flex max-w-4xl flex-col items-start">
				<h2 class="h3 max-w-[24ch] text-primary-foreground">
					{footerCta.title}
				</h2>
				<p class="mt-4 max-w-2xl text-lg text-primary-foreground/85">
					{footerCta.description}
				</p>
				<Button variant="secondary" size="lg" class="mt-7" href={localizeHref(footerCta.href)}>
					<IconMessageCirclePlus />
					{footerCta.action}
				</Button>
				<p class="mt-4 flex items-center gap-2 text-sm text-primary-foreground/85">
					<IconCheck class="size-4 shrink-0" />
					{footerCta.reassurance}
				</p>
			</div>
		</div>

		<!-- Links -->
		<div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each Object.entries(footerLinks) as [key, links] (key)}
				{@const { title, links: sublinks } = links}
				<div class="flex flex-col gap-4">
					<h3 class="h4">{title}</h3>
					<ul class="flex flex-col gap-2">
						{#each sublinks as link (link.label)}
							<li>
								{#if 'href' in link}
									<a
										href={localizeHref(link.href)}
										class="text-muted-foreground/90 hover:text-primary flex items-center gap-1 transition"
										target={'external' in link && link.external ? '_blank' : undefined}
										rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
									>
										{#if 'labelIsI18n' in link && !link.labelIsI18n}
											{link.label}
										{:else}
											{#await translate(link.label as keyof typeof m) then translation}
												{translation}
											{/await}
										{/if}
										{#if link.label === 'see_all'}
											<IconArrowRight class="size-4" />
										{/if}
									</a>
								{:else if 'onclick' in link}
									<button
										onclick={link.onclick}
										class="text-muted-foreground/90 hover:text-primary flex items-center gap-1 transition"
									>
										{#if 'labelIsI18n' in link && !link.labelIsI18n}
											{link.label}
										{:else}
											{#await translate(link.label as keyof typeof m) then translation}
												{translation}
											{/await}
										{/if}
									</button>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}

			<!-- Fourth col: CTA -->
			<!-- <div class="col-span-full flex flex-col gap-4 lg:col-span-1">
				<h3 class="h4">
					{m['footer.cta.secondary.title']()}
				</h3>
				<div class="flex flex-col gap-4">
					<p class="text-muted-foreground/90">
						{m['footer.cta.secondary.description']()}
					</p>
					<Button variant="outline" href={route('/')}>
						{m.contact_us()}
						<IconArrowRight class="animate-bounce-x" />
					</Button>
				</div>
			</div> -->
		</div>

		<hr />

		<!-- Copyright -->
		<div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
			<a href={route('/')} aria-label={m['nav.home']()} class="flex items-center gap-4">
				<enhanced:img
					src="$assets/logo.avif"
					alt={m['common.kesval_logo']()}
					class="size-10 rounded-lg"
				/>
				<span class="text-2xl font-medium">{brand.name}.</span>
			</a>
			<span class="text-muted-foreground text-sm">
				{m['footer.copyright']({
					year: new Date().getFullYear(),
					brand: brand.name
				})}
			</span>
		</div>
	</div>
</footer>
