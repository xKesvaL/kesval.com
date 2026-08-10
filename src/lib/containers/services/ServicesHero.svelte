<script lang="ts">
import {
	IconArrowDown,
	IconArrowRight,
	IconArrowUpRight,
	IconCheck,
	IconRepeat,
	IconRoute,
	IconSparkles,
	IconWorld,
} from "@tabler/icons-svelte";
import AnimatedBadge from "$lib/components/animated/AnimatedBadge.svelte";
import { Button } from "$lib/components/ui/button";
import { route } from "$lib/ROUTES";
import * as m from "$paraglide/messages";
import { localizeHref } from "$paraglide/runtime";
</script>

<section class="section-hero relative isolate overflow-hidden min-h-0">
	<div class="pointer-events-none absolute top-16 right-[-11rem] -z-10 size-[28rem] rounded-full border border-primary/10"></div>
	<div class="pointer-events-none absolute top-28 right-[-6rem] -z-10 size-[18rem] rounded-full border border-primary/10"></div>

	<div class="kcontainer grid items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
		<div class="max-w-3xl">
			<AnimatedBadge class="flex items-center gap-2 mr-auto ml-0">
				<IconSparkles class="size-4" />
				{m['services.page.hero.eyebrow']()}
			</AnimatedBadge>
			<h1 class="mt-5 max-w-[14ch] text-5xl leading-[1.05] font-semibold md:text-6xl lg:text-7xl">
				{m['services.page.hero.title']()}
			</h1>
			<p class="text-muted-foreground mt-6 max-w-[60ch] text-lg md:text-xl">
				{m['services.page.hero.description']()}
			</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<Button href={localizeHref(route('/audit-gratuit'))} size="lg">
					{m['services.page.hero.primary_cta']()}
					<IconArrowRight />
				</Button>
				<Button href="#solutions" variant="outline" size="lg">
					{m['services.page.hero.secondary_cta']()}
					<IconArrowDown />
				</Button>
			</div>
			<p class="text-muted-foreground mt-5 flex items-center gap-2 text-sm">
				<IconCheck class="text-primary size-4 shrink-0" />
				{m['services.page.hero.reassurance']()}
			</p>
		</div>

		<aside class="border-border bg-card relative overflow-hidden rounded-lg border shadow-sm">
			<div class="border-border flex items-center justify-between border-b px-5 py-4">
				<p class="text-sm font-medium">{m['services.page.hero.navigator_title']()}</p>
				<span class="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium">01</span>
			</div>
			<div class="grid gap-1 p-2">
				<a class="group flex gap-4 rounded-md p-4 transition hover:bg-muted" href="#web_on_premise">
					<span class="border-primary/50 border text-primary flex size-9 shrink-0 items-center justify-center rounded-md transition group-hover:bg-primary group-hover:text-primary-foreground">
						<IconWorld class="size-4" />
					</span>
					<span>
						<span class="block text-sm font-semibold">{m['services.page.hero.need_website_title']()}</span>
						<span class="text-muted-foreground mt-1 block text-sm">{m['services.page.hero.need_website_description']()}</span>
					</span>
					<IconArrowUpRight className="stroke-muted-foreground group-hover:animate-bounce-y" />
				</a>
				<a class="group flex gap-4 rounded-md p-4 transition hover:bg-muted" href="#web_apps">
					<span class="border-primary/50 border text-primary flex size-9 shrink-0 items-center justify-center rounded-md transition group-hover:bg-primary group-hover:text-primary-foreground">
						<IconRepeat class="size-4" />
					</span>
					<span>
						<span class="block text-sm font-semibold">{m['services.page.hero.need_tool_title']()}</span>
						<span class="text-muted-foreground mt-1 block text-sm">{m['services.page.hero.need_tool_description']()}</span>
					</span>
					<IconArrowUpRight className="stroke-muted-foreground group-hover:animate-bounce-y" />
				</a>
				<a class="group flex gap-4 rounded-md p-4 transition hover:bg-muted" href="#design">
					<span class="border-primary/50 border text-primary flex size-9 shrink-0 items-center justify-center rounded-md transition group-hover:bg-primary group-hover:text-primary-foreground">
						<IconRoute class="size-4" />
					</span>
					<span>
						<span class="block text-sm font-semibold">{m['services.page.hero.need_clarity_title']()}</span>
						<span class="text-muted-foreground mt-1 block text-sm">{m['services.page.hero.need_clarity_description']()}</span>
					</span>
					<IconArrowUpRight className="stroke-muted-foreground group-hover:animate-bounce-y" />
				</a>
			</div>
		</aside>
	</div>
</section>
