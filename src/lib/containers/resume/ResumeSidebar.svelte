<script lang="ts">
	import * as m from '$paraglide/messages';
	import ResumeLink from '$lib/containers/resume/ResumeLink.svelte';
	import IconMail from '$lib/icons/IconMail.svelte';
	import IconWorldWww from '$lib/icons/IconWorldWww.svelte';
	import IconMapPin from '$lib/icons/IconMapPin.svelte';
	import IconLanguage from '$lib/icons/IconLanguage.svelte';
	import { PERSONAL } from '$lib/data/personal';
	import { BRAND } from '$lib/config';
	import { route } from '$lib/ROUTES';
</script>
<aside class="relative p-4 md:p-8">
	<div class="flex flex-col md:p-4">
		<enhanced:img class="h-28 w-28" src="$assets/logos/logo.png" alt={m.common_kesval_logo()} />
		<h3 class="mt-2 font-sans text-2xl font-medium">Jordan Abeddou</h3>
		<p class="subtitle bg-clip-text text-lg">
			{m.common_fullstack_developer()}
		</p>
		<hr class="mt-6" />
	</div>
	<div class="flex flex-col gap-4 pt-8 md:p-4">
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
	<div class="flex flex-col gap-4 pt-8 md:p-4">
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
	<div class="flex flex-col gap-6 pt-8 md:p-4">
		<span class="text-xs text-muted-foreground">
			{m.about_languages_title()}
		</span>
		<div class="flex h-8 items-center gap-4">
			<span class="ml-1 font-emoji text-4xl">🇫🇷</span>
			<div class="flex h-full flex-col justify-between">
				<p class="text-sm leading-none">
					{m.language_french()}
				</p>
				<span class="text-xs leading-none text-muted-foreground">
					{m.about_language_french()}
				</span>
			</div>
		</div>
		<div class="flex h-8 items-center gap-4">
			<span class="ml-1 font-emoji text-4xl">🇺🇸</span>
			<div class="flex h-full flex-col justify-between">
				<p class="text-sm leading-none">
					{m.language_english()}
				</p>
				<span class="text-xs leading-none text-muted-foreground">
					{m.about_language_english()}
				</span>
			</div>
		</div>
		<div class="flex h-8 items-center gap-4">
			<span class="ml-1 font-emoji text-4xl">🇩🇪</span>
			<div class="flex h-full flex-col justify-between">
				<p class="text-sm leading-none">
					{m.language_german()}
				</p>
				<span class="text-xs leading-none text-muted-foreground">
					{m.about_language_german()}
				</span>
			</div>
		</div>
	</div>

	<!-- Blobs -->
	<div class="absolute right-0 top-8 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl"></div>
	<div class="absolute left-0 top-0 h-40 w-40 rounded-full bg-accent opacity-10 blur-3xl"></div>
	<div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent opacity-10 blur-3xl"></div>
	<div class="absolute right-16 top-40 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl"></div>
	<div
		class="absolute bottom-64 right-16 h-40 w-40 rounded-full bg-accent opacity-10 blur-3xl"
	></div>
	<div
		class="absolute bottom-32 left-8 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 right-0 h-40 w-40 translate-x-1/2 translate-y-1/2 rounded-full bg-accent opacity-10 blur-3xl"
	></div>
	<div
		class="absolute right-0 top-1/2 h-80 w-40 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl"
	></div>
</aside>

<style lang="scss" ✂prettier:content✂="Cglhc2lkZSB7CiAgICBiYWNrZ3JvdW5kOiBoc2wodmFyKC0tcHJpbWFyeS0xMDApIC8gMC4yNSk7CgoJCS5zdWJ0aXRsZSB7CgkJCWJhY2tncm91bmQtY2xpcDogdGV4dDsKCQkJYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBoc2wodmFyKC0tcHJpbWFyeS00MDApKSwgaHNsKHZhcigtLXByaW1hcnktNzAwKSkgMTAwJSk7CgkJCS13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OwoJCQktd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7CgkJfQoJfQo="></style>
