<script lang="ts">
	import Link from '$lib/components/base/Link.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages';
	import { brand } from '$lib/utils/config';
	import { getLocale } from '$paraglide/runtime';

	const dateFormatter = new Intl.DateTimeFormat(getLocale(), {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});
</script>

<section class="section-hero kcontainer gap-8 px-4">
	<div class="space-y-4">
		<h1 class="h1">{m['legal.title']()}</h1>
		<p class="text-muted-foreground">
			{m['legal.last_updated']()} : {dateFormatter.format(new Date('2025-06-25'))}
		</p>
	</div>
	<Separator class="my-4" />
	<div class="space-y-16">
		<!-- Section 1: Informations légales -->
		<section class="space-y-4">
			<h2 class="h3">{m['legal.section_1.title']()}</h2>
			<ul class="list-none space-y-2">
				<li>
					<strong>{m['legal.section_1.owner_name_title']()} :</strong>
					{m['legal.section_1.owner_name_value']()}
				</li>
				<li>
					<strong>{m['legal.section_1.owner_address_title']()} :</strong>
					{m['legal.section_1.owner_address_value']()}
				</li>
				<li>
					<strong>{m['legal.section_1.owner_email_title']()} :</strong>
					<a href="mailto:contact@kesval.com" class="underline">contact@kesval.com</a>
				</li>
				<li>
					<strong>{m['legal.section_1.owner_phone_title']()} :</strong>
					{m['legal.section_1.owner_phone_value']()}
				</li>
				<li>
					<strong>{m['legal.section_1.owner_siret_title']()} :</strong>
					{m['legal.section_1.owner_siret_value']()}
				</li>
				<li>
					<strong>{m['legal.section_1.publication_director_title']()} :</strong>
					{m['legal.section_1.publication_director_value']()}
				</li>
			</ul>
		</section>

		<!-- Section 2: Hébergement -->
		<section class="space-y-4">
			<h2 class="h3">{m['legal.section_2.title']()}</h2>
			<ul class="list-none space-y-2">
				<li>
					<strong>{m['legal.section_2.host_name_title']()} :</strong>
					{m['legal.section_2.host_name_value']()}
				</li>
				<li>
					<strong>{m['legal.section_2.host_address_title']()} :</strong>
					{m['legal.section_2.host_address_value']()}
				</li>
				<li>
					<strong>{m['legal.section_2.host_phone_title']()} :</strong>
					{m['legal.section_2.host_phone_value']()}
				</li>
				<li>
					<strong>{m['legal.section_2.host_website_title']()} :</strong>
					<Link href="https://www.hetzner.com" target="_blank" class="underline">
						{m['legal.section_2.host_website_value']()}
					</Link>
				</li>
			</ul>
		</section>

		<!-- Section 3: Propriété intellectuelle -->
		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_3.title']()}</h2>
			<p>
				{m['legal.section_3.content']()}
			</p>
		</section>

		<!-- Section 4: Protection des données personnelles (RGPD) -->
		<section class="space-y-4">
			<h2 class="h3">{m['legal.section_4.title']()}</h2>
			<p>
				{m['legal.section_4.intro']()}
			</p>
			<p>{m['legal.section_4.data_controller']()}</p>

			<div class="space-y-2">
				<h4 class="h5">{m['legal.section_4.subsection_1.title']()}</h4>
				<p>
					{m['legal.section_4.subsection_1.content_1']()}
				</p>
				<ul class="list-disc space-y-2 pl-8">
					<li>
						{@html m['legal.section_4.subsection_1.content_2']()}
					</li>
					<li>
						{@html m['legal.section_4.subsection_1.content_3']()}
					</li>
				</ul>
			</div>

			<div class="space-y-2">
				<h4 class="h5">{m['legal.section_4.subsection_2.title']()}</h4>
				<p>{m['legal.section_4.subsection_2.content_1']()}</p>
				<ul class="list-disc space-y-2 pl-8">
					<li>
						{@html m['legal.section_4.subsection_2.content_2']()}
					</li>
					<li>
						{@html m['legal.section_4.subsection_2.content_3']()}
					</li>
				</ul>
			</div>

			<div class="space-y-2">
				<h4 class="h5">{m['legal.section_4.subsection_3.title']()}</h4>
				<p>
					{m['legal.section_4.subsection_3.content']()}
				</p>
			</div>

			<div class="space-y-2">
				<h4 class="h5">{m['legal.section_4.subsection_4.title']()}</h4>
				<p>
					{m['legal.section_4.subsection_4.content_1']()}
				</p>
				<ul class="list-disc space-y-2 pl-8">
					<li>{@html m['legal.section_4.subsection_4.content_2']()}</li>
					<li>{@html m['legal.section_4.subsection_4.content_3']()}</li>
				</ul>
			</div>

			<div class="space-y-2">
				<h4 class="h5">{m['legal.section_4.subsection_5.title']()}</h4>
				<p>
					{m['legal.section_4.subsection_5.content']()}
				</p>
			</div>

			<div class="space-y-2">
				<h4 class="h5">{m['legal.section_4.subsection_6.title']()}</h4>
				<p>
					{m['legal.section_4.subsection_6.content_1']()}
				</p>
				<ul class="list-disc space-y-2 pl-8">
					<li>{m['legal.section_4.subsection_6.content_2']()}</li>
					<li>{m['legal.section_4.subsection_6.content_3']()}</li>
					<li>{m['legal.section_4.subsection_6.content_4']()}</li>
				</ul>
				<p>
					{m['legal.section_4.subsection_6.content_5']()}
					<a href="mailto:contact@kesval.com" class="underline">{brand.email}</a>.
				</p>
				<p>
					{m['legal.section_4.subsection_6.content_7']()}
				</p>
			</div>
		</section>

		<!-- Section 5: Cookies -->
		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_5.title']()}</h2>
			<p>
				{m['legal.section_5.content_1']()}
			</p>
			<p>
				{m['legal.section_5.content_2']()}
			</p>
			<p>
				{m['legal.section_5.content_3']()}
			</p>
			<p>
				{m['legal.section_5.content_4']()}
			</p>
		</section>
	</div>
</section>
