<script lang="ts">
	import { Card } from '$lib/components/ui/card';

	import * as m from '$paraglide/messages';
	import AboutResumeLink from './AboutResumeLink.svelte';
	import { brand } from '$lib/utils/config';
	import {
		IconBrandGithub,
		IconBrandLinkedin,
		IconBriefcase,
		IconCake,
		IconLanguage,
		IconMail,
		IconMapPin,
		IconWorldWww
	} from '@tabler/icons-svelte';
	import AboutResumeLeftSide from './AboutResumeLeftSide.svelte';
	import AboutResumeRightSide from './AboutResumeRightSide.svelte';
	import { translate } from '$lib/utils/i18n';
</script>

<section class="kcontainer section flex flex-col items-center px-4" id="resume">
	<h2>{translate('about.resume.title')}</h2>
	<Card
		class="shadow-cool relative flex w-full max-w-[22cm] flex-col gap-4 rounded-2xl p-4 md:gap-8 md:p-8 lg:aspect-[1/1.414]"
	>
		<header class="grid w-full gap-4 md:grid-cols-[8fr_5fr] md:gap-8">
			<div class="">
				<h3 class="">Jordan Abeddou</h3>
				<p class="text-muted-foreground h4 mb-4 font-light">
					{translate('about.resume.header.subtitle')}
				</p>
				<div class="grid grid-cols-2 gap-2 md:gap-4">
					<AboutResumeLink icon={IconMapPin}>Mulhouse, France</AboutResumeLink>
					<AboutResumeLink icon={IconBrandGithub} href={brand.github}>
						{m.github_profile()}
					</AboutResumeLink>
					<AboutResumeLink icon={IconCake}>
						{m.years_old({ years: brand.age })}
					</AboutResumeLink>
					<AboutResumeLink icon={IconBrandLinkedin} href={brand.linkedin}>
						{m.linkedin_profile()}
					</AboutResumeLink>
					<AboutResumeLink icon={IconBriefcase}>
						{m.years_of_experience({ years: brand.yearsOfExperience })}
					</AboutResumeLink>
					<AboutResumeLink icon={IconMail} href={`mailto:${brand.email}`}>
						{brand.email}
					</AboutResumeLink>
					<AboutResumeLink icon={IconLanguage}>
						{translate('about.resume.header.languages')}
					</AboutResumeLink>
					<AboutResumeLink icon={IconWorldWww} href={brand.website}>
						{brand.websiteShort}
					</AboutResumeLink>
				</div>
			</div>
			<div class="flex h-full flex-col items-center justify-between gap-4">
				<enhanced:img
					src="$assets/logo.avif?w=384;256"
					alt={m.kesval_logo()}
					sizes="(min-width: 768px) 256px, (max-width: 768px) 384px"
					class="max-w-[12rem] overflow-hidden rounded-full"
				/>
				<p class="text-center text-xl">“It's not a bug; it's an undocumented feature.”</p>
			</div>
		</header>
		<div class="grid h-full w-full gap-4 md:grid-cols-[8fr_5fr] md:gap-8">
			<AboutResumeLeftSide />
			<AboutResumeRightSide />
		</div>
	</Card>
</section>
