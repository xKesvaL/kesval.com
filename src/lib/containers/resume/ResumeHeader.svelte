<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { BRAND } from '$lib/config';
	import { PERSONAL } from '$lib/data/personal';
	import {
		IconBrandGithub,
		IconMapPin,
		IconCake,
		IconBrandLinkedin,
		IconBriefcase,
		IconMail,
		IconLanguage
	} from '$lib/icons';
	import IconWorldWww from '$lib/icons/IconWorldWww.svelte';

	import * as m from '$paraglide/messages';
	import ResumeLink from './ResumeLink.svelte';
</script>

<header class="grid w-full gap-4 md:grid-cols-[7fr,4fr] md:gap-8">
	<div>
		<h3 class="text-4xl">Jordan Abeddou</h3>
		<p class="mb-4 text-2xl text-muted-foreground">
			{m.common_fullstack_developer()}
		</p>
		<div class="grid grid-cols-2 gap-4">
			<ResumeLink>
				<div slot="icon">
					<IconMapPin />
				</div>
				Mulhouse, France
			</ResumeLink>
			<ResumeLink href={route('github')}>
				<div slot="icon">
					<IconBrandGithub />
				</div>
				{m.common_github_profile()}
			</ResumeLink>
			<ResumeLink>
				<div slot="icon">
					<IconCake />
				</div>
				{m.common_years_old({ years: PERSONAL.age })}
			</ResumeLink>
			<ResumeLink href={route('linkedin')}>
				<div slot="icon">
					<IconBrandLinkedin />
				</div>
				{m.common_linkedin_profile()}
			</ResumeLink>
			<ResumeLink>
				<div slot="icon">
					<IconBriefcase />
				</div>
				{m.common_years_of_coding({ years: PERSONAL.yearsOfCoding })}
			</ResumeLink>
			<ResumeLink href={route('email')}>
				<div slot="icon">
					<IconMail />
				</div>
				{PERSONAL.email}
			</ResumeLink>
			<ResumeLink>
				<div slot="icon">
					<IconLanguage />
				</div>
				{m.about_languages()}
			</ResumeLink>
			<ResumeLink href={BRAND.url}>
				<div slot="icon">
					<IconWorldWww />
				</div>
				{BRAND.shortUrl}
			</ResumeLink>
		</div>
	</div>
	<div class="flex h-full flex-col items-center justify-between gap-4">
		<enhanced:img
			src="$assets/logos/logo.png?w=384;256"
			alt={m.common_kesval_logo()}
			sizes="(min-width: 768px) 256px, (max-width: 768px) 384px"
			class="max-w-[12rem]"
		/>
		<p class="text-center text-xl">“It's not a bug; it's an undocumented feature.”</p>
	</div>
</header>
