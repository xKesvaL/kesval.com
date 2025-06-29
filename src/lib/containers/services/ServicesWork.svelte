<script lang="ts">
	import { translate } from '$lib/utils/i18n';
	import * as m from '$paraglide/messages';
	import { IconBolt, IconCheck, IconCode, IconHeartHandshake } from '@tabler/icons-svelte';

	const why = {
		accompagnement: IconCheck,
		reactivity: IconBolt,
		expertise: IconCode,
		relation: IconHeartHandshake
	};
</script>

<section class="section kcontainer px-4">
	<div class="flex flex-col items-center gap-4 text-center">
		<h2>
			{m['services.work.why_kesval_studio']()}
		</h2>
		<p class="text-muted-foreground max-w-prose">
			{m['services.work.why_kesval_studio_description']()}
		</p>
	</div>
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each Object.entries(why) as [key, Icon]}
			<div class="flex flex-col items-center gap-2 text-center">
				<div
					class="bg-primary/10 text-primary mb-2 flex size-12 items-center justify-center rounded-xl"
				>
					<Icon class="size-6" />
				</div>
				<h3 class="h5">
					{#await translate(`services.work.why.${key}`) then translation}
						{translation}
					{/await}
				</h3>
				<p class="text-muted-foreground max-w-prose">
					{#await translate(`services.work.why.${key}_description`) then translation}
						{translation}
					{/await}
				</p>
			</div>
		{/each}
	</div>
</section>
