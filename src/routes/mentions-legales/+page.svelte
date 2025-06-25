<script lang="ts">
	import Link from '$lib/components/base/Link.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="section-hero kcontainer gap-8 px-4">
	<div class="space-y-4">
		<h1 class="h1">{m['legal.title']()}</h1>
		<p class="text-muted-foreground">{m['legal.last_updated']()} : 25/06/2025</p>
	</div>
	<Separator class="my-4" />
	<div class="space-y-16">
		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_1_title']()}</h2>
			<p>
				{m['legal.section_1_content_1_part_1']()}
				<Link href="/" class="underline">kesval.com</Link>
				{m['legal.section_1_content_1_part_2']()}
			</p>
			<ul class="list-disc space-y-2 pl-8">
				<li>
					<strong>{m['legal.owner_name']()}</strong> : Jordan ABEDDOU
				</li>
				<li>
					<strong>{m['legal.owner_status']()}</strong> : Entreprise individuelle
				</li>
				<li>
					<strong>{m['legal.owner_siret']()}</strong> : 929 685 188 00013
				</li>
				<li>
					<strong>{m['legal.owner_address']()}</strong> : 18 rue de feldkirch, 68190 Ungersheim
				</li>
				<li>
					<strong>{m['legal.owner_email']()}</strong>
					:
					<a href="mailto:contact@kesval.com" class="underline">contact@kesval.com</a>
				</li>
			</ul>
		</section>

		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_2_title']()}</h2>
			<p>
				{m['legal.section_2_content_1']()}
			</p>
			<ul class="list-disc space-y-2 pl-8">
				<li>
					<strong>{m['legal.publication_director']()}</strong> : Jordan ABEDDOU
				</li>
			</ul>
		</section>

		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_3_title']()}</h2>
			<p>
				{m['legal.section_3_content_1']()}
			</p>
			<ul class="list-disc space-y-2 pl-8">
				<li>
					<strong>{m['legal.host_name']()}</strong> : Hetzner Online GmbH
				</li>
				<li>
					<strong>{m['legal.host_address']()}</strong> : Industriestr. 25, 91710 Gunzenhausen, Allemagne
				</li>
				<li>
					<strong>{m['legal.host_contact']()}</strong> :
					<Link href="https://www.hetzner.com/company/contact" target="_blank" class="underline"
						>Formulaire de contact</Link
					>
				</li>
			</ul>
			<p>
				{m['legal.section_3_content_2']()}
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_4_title']()}</h2>
			<p>
				{m['legal.section_4_content_1']()}
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_5_title']()}</h2>
			<p>
				{m['legal.section_5_content_1']()}
			</p>
			<p>{m['legal.section_5_content_2']()}</p>
			<ul class="list-disc space-y-2 pl-8">
				<li>
					{m['legal.section_5_content_3']()}
				</li>
				<li>
					{m['legal.section_5_content_4']()}
				</li>
			</ul>
			<p>
				{m['legal.section_5_content_5']()}
				<a href="mailto:contact@kesval.com" class="underline">contact@kesval.com</a>.
			</p>
		</section>

		<section class="space-y-2">
			<h2 class="h3">{m['legal.section_6_title']()}</h2>
			<p>
				{m['legal.section_6_content_1']()}
			</p>
			<p>{m['legal.section_6_content_2']()}</p>
			<ul class="list-disc space-y-2 pl-8">
				<li>
					<strong>{m['legal.section_6_content_3_part_1']()}</strong>
					{m['legal.section_6_content_3_part_2']()}
					<Link
						href="https://policies.google.com/privacy"
						target="_blank"
						class="font-medium underline"
					>
						{m['legal.section_6_content_3_part_3']()}
					</Link>
				</li>
			</ul>
			<p>
				{m['legal.section_6_content_4']()}
			</p>
		</section>
	</div>
</section>
