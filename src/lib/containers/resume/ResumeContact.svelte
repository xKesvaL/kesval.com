<script lang="ts">
	import PERSONAL from '$lib/data/personal';
	import IconCake from '$lib/icons/IconCake.svelte';
	import IconBrandLinkedin from '$lib/icons/IconBrandLinkedin.svelte';
	import IconBriefcase from '$lib/icons/IconBriefcase.svelte';
	import IconMapPin from '$lib/icons/IconMapPin.svelte';
	import IconLanguage from '$lib/icons/IconLanguage.svelte';
	import IconWorldWww from '$lib/icons/IconWorldWww.svelte';
	import IconBrandGithub from '$lib/icons/IconBrandGithub.svelte';
	import IconMail from '$lib/icons/IconMail.svelte';

	import { route } from '$lib/ROUTES';
	import { BRAND } from '$lib/config';

	import * as m from '$paraglide/messages';
</script>

<ul class="resume-contact w-full gap-y-4 gap-x-2 grid-cols-2 grid list-none text-lg">
	<li class="flex items-center gap-2 birthday">
		<div class="w-8 h-8">
			<IconCake />
		</div>
		{PERSONAL.age}
		{m.common_years_old()}
	</li>
	<li class="flex items-center gap-2 experience">
		<div class="w-8 h-8">
			<IconBriefcase />
		</div>
		{PERSONAL.yearsOfExperience}
		{m.common_years_old()}
	</li>
	<li class="flex items-center gap-2 location">
		<div class="w-8 h-8">
			<IconMapPin />
		</div>
		{PERSONAL.location}
	</li>
	<li class="flex items-center gap-2 languages">
		<div class="w-8 h-8">
			<IconLanguage />
		</div>
		{m.about_languages()}
	</li>
	<li class="flex items-center gap-2 linkedin">
		<div class="w-8 h-8">
			<IconBrandLinkedin />
		</div>
		<a
			class="border-b-2 border-dashed border-primary hover:border-solid"
			href={route('linkedin')}
			target="_blank"
		>
			{m.common_brand_profile({ brand: 'LinkedIn' })}
		</a>
	</li>
	<li class="flex items-center gap-2 website">
		<div class="w-8 h-8">
			<IconWorldWww />
		</div>
		<a
			class="border-b-2 border-dashed border-primary hover:border-solid"
			href={BRAND.url}
			target="_blank"
		>
			{BRAND.shortUrl}
		</a>
	</li>
	<li class="flex items-center gap-2 github">
		<div class="w-8 h-8">
			<IconBrandGithub />
		</div>
		<a
			class="border-b-2 border-dashed border-primary hover:border-solid"
			href={route('github')}
			target="_blank"
		>
			{m.common_brand_profile({ brand: 'Github' })}
		</a>
	</li>
	<li class="flex items-center gap-2 email">
		<div class="w-8 h-8">
			<IconMail />
		</div>
		<a
			class="border-b-2 border-dashed border-primary hover:border-solid"
			href={route('email')}
			target="_blank"
		>
			{PERSONAL.email}
		</a>
	</li>
</ul>

<style lang="scss">
	.resume-contact {
		grid-template-areas:
			'location github'
			'experience linkedin'
			'languages email'
			'birthday website';

		li {
			&.birthday {
				grid-area: birthday;
			}

			&.location {
				grid-area: location;
			}

			&.experience {
				grid-area: experience;
			}

			&.email {
				grid-area: email;
			}

			&.linkedin {
				grid-area: linkedin;
			}

			&.website {
				grid-area: website;
			}

			&.github {
				grid-area: github;
			}

			&.languages {
				grid-area: languages;
			}
		}
	}
</style>
