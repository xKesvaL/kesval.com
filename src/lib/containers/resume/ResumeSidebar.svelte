<script lang="ts">
	import * as m from '$paraglide/messages';
	import ResumeLink from '$lib/containers/resume/ResumeLink.svelte';
	import IconMail from '$lib/icons/IconMail.svelte';
	import IconWorldWww from '$lib/icons/IconWorldWww.svelte';
	import IconMapPin from '$lib/icons/IconMapPin.svelte';
	import IconLanguage from '$lib/icons/IconLanguage.svelte';
	import PERSONAL from '$lib/data/personal';
	import { BRAND } from '$lib/config';
	import { route } from '$lib/ROUTES';
	import { theme } from '$lib/stores/theme';
</script>

<aside class="p-4 lg:p-8 h-full">
	<div class="lg:p-4 flex flex-col">
		<enhanced:img class="h-28 w-28" src="$assets/logos/logo.png" alt={m.common_kesval_logo()} />
		<h3 class="font-sans font-bold text-2xl mt-2">Jordan Abeddou</h3>
		<p class="subtitle bg-clip-text text-lg">
			{m.common_fullstack_developer()}
		</p>
		<hr class="mt-6" />
	</div>
	<div class="pt-8 lg:p-4 flex flex-col gap-4">
		<ResumeLink href={route('email')}>
			<span slot="icon">
				<IconMail />
			</span>
			<p slot="label">
				{m.common_email()}
			</p>
			<p slot="value">
				{PERSONAL.email}
			</p>
		</ResumeLink>
		<ResumeLink href={BRAND.url}>
			<span slot="icon">
				<IconWorldWww />
			</span>
			<p slot="label">
				{m.common_website()}
			</p>
			<p slot="value">
				{BRAND.shortUrl}
			</p>
		</ResumeLink>
		<ResumeLink>
			<span slot="icon">
				<IconMapPin />
			</span>
			<p slot="label">
				{m.common_location()}
			</p>
			<p slot="value">
				{PERSONAL.location}
			</p>
		</ResumeLink>
		<ResumeLink>
			<span slot="icon">
				<IconLanguage />
			</span>
			<p slot="label">
				{m.common_languages()}
			</p>
			<p slot="value">
				{m.about_languages()}
			</p>
		</ResumeLink>
		<hr class="mt-4" />
	</div>
	<div class="pt-8 lg:p-4 flex flex-col gap-4">
		<span class="text-xs text-muted-foreground">
			{m.about_socials_title()}
		</span>
		<ResumeLink href={route('instagram')} classes="p-1.5">
			<div slot="icon">
				<enhanced:img src="$assets/brands/instagram.webp" alt="Instagram" class="rounded-full" />
			</div>
			<p slot="label">Instagram</p>
			<p slot="value">@xKesvaL</p>
		</ResumeLink>
		<ResumeLink href={route('github')} classes="p-1.5">
			<div slot="icon">
				<enhanced:img src="$assets/brands/github.png" alt="Github" class="rounded-full" />
			</div>
			<p slot="label">Github</p>
			<p slot="value">@xKesvaL</p>
		</ResumeLink>
		<ResumeLink href={route('linkedin')} classes="p-1.5">
			<div slot="icon">
				<enhanced:img src="$assets/brands/linkedin.png" alt="LinkedIn" class="rounded-full" />
			</div>
			<p slot="label">LinkedIn</p>
			<p slot="value">jordan-abeddou</p>
		</ResumeLink>
		<hr class="mt-4" />
	</div>
	<div class="pt-8 lg:p-4 flex flex-col gap-6">
		<span class="text-xs text-muted-foreground">
			{m.about_languages_title()}
		</span>
		<div class="flex gap-4 items-center h-8">
			<span class="font-emoji text-4xl ml-1">🇫🇷</span>
			<div class="flex justify-between flex-col h-full">
				<p class="text-sm leading-none">
					{m.language_french()}
				</p>
				<span class="text-muted-foreground text-xs leading-none">
					{m.about_language_french()}
				</span>
			</div>
		</div>
		<div class="flex gap-4 items-center h-8">
			<span class="font-emoji text-4xl ml-1">🇺🇸</span>
			<div class="flex justify-between flex-col h-full">
				<p class="text-sm leading-none">
					{m.language_english()}
				</p>
				<span class="text-muted-foreground text-xs leading-none">
					{m.about_language_english()}
				</span>
			</div>
		</div>
		<div class="flex gap-4 items-center h-8">
			<span class="font-emoji text-4xl ml-1">🇩🇪</span>
			<div class="flex justify-between flex-col h-full">
				<p class="text-sm leading-none">
					{m.language_german()}
				</p>
				<span class="text-muted-foreground text-xs leading-none">
					{m.about_language_german()}
				</span>
			</div>
		</div>
	</div>
</aside>

<style lang="scss">
	aside {
		background: hsl(var(--primary-50) / 0.25);

		.subtitle {
			background-clip: text;
			background: linear-gradient(45deg, hsl(var(--primary-400)), hsl(var(--primary-700)) 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-background-clip: text;
			-moz-text-fill-color: transparent;
		}
	}
</style>
