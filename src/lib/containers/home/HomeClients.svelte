<script lang="ts">
	import { IconPhoto, IconPhotoOff } from '@tabler/icons-svelte';
	import type { ComponentProps } from 'svelte';
	import ReviewCard from '$lib/components/base/ReviewCard.svelte';
	import * as m from '$paraglide/messages';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Review = ComponentProps<typeof ReviewCard>;

	let reviews = $state<Review[]>([]);

	while (reviews.length < 12) {
		reviews.push({
			img: IconPhotoOff,
			name: 'Votre entreprise',
			username: 'Monsieur Dupont',
			description: 'Super service, je recommande !'
		});
	}

	reviews.sort(() => Math.random() - 0.5);
</script>

<section class="section bg-primary pyc-lg lg:pyc-xl relative z-10 items-start justify-start">
	<div class="kcontainer text-primary-foreground flex w-full flex-col gap-12 px-4">
		<div class="flex w-full items-center gap-8">
			<h2 class="h4">
				{m['home.clients.title']()}
			</h2>
			<div class="bg-primary-foreground h-[1px] grow"></div>
		</div>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each { length: 8 } as _, i}
				<div class="flex items-center gap-4 text-xl">
					<IconPhoto class="size-8" />
					client test {i}
				</div>
			{/each}
		</div>
	</div>
</section>
