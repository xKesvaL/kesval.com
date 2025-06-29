<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="section-hero kcontainer gap-8 px-4">
	<div class="space-y-4">
		<h1 class="h1">{m['cgv.title']()}</h1>
		<p class="text-muted-foreground">{m['cgv.last_updated']()} : 29/06/2025</p>
	</div>
	<Separator class="my-4" />
	<div class="space-y-16">
		<p>
			{m['cgv.preamble']()}
		</p>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_1.title']()}</h2>
			<p>
				{m['cgv.section_1.content']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_2.title']()}</h2>
			<p>
				{m['cgv.section_2.content_1']()}
			</p>
			<p>
				{m['cgv.section_2.content_2']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_3.title']()}</h2>
			<p>
				{m['cgv.section_3.content_1']()}
			</p>
			<p>
				{m['cgv.section_3.content_2']()}
			</p>
			<p>
				{m['cgv.section_3.content_3']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_4.title']()}</h2>
			<p>
				{m['cgv.section_4.content_1']()}
			</p>
			<p>
				{m['cgv.section_4.content_2']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_5.title']()}</h2>
			<p>
				{m['cgv.section_5.content_1']()}
			</p>
			<p>
				{m['cgv.section_5.content_2']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_6.title']()}</h2>
			<p>
				{m['cgv.section_6.content_1']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_7.title']()}</h2>
			<p>
				{m['cgv.section_7.content_1']()}
			</p>
			<p>
				{m['cgv.section_7.content_2']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_8.title']()}</h2>
			<p>
				{m['cgv.section_8.content']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_9.title']()}</h2>
			<p>
				{m['cgv.section_9.content']()}
			</p>
		</section>
		<section class="space-y-2">
			<h2 class="h3">{m['cgv.section_10.title']()}</h2>
			<p>
				{m['cgv.section_10.content']()}
			</p>
		</section>
	</div>
</section>
