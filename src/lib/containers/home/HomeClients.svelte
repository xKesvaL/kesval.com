<script lang="ts">
	import Marquee from '$lib/components/base/Marquee.svelte';
	import ReviewCard from '$lib/components/base/ReviewCard.svelte';
	import { IconPhotoOff } from '@tabler/icons-svelte';
	import type { ComponentProps } from 'svelte';

	type Review = ComponentProps<typeof ReviewCard>;

	let reviews = $state<Review[]>([]);

	// fill reviews array until 20 with random data, without replacing any existing data
	while (reviews.length < 20) {
		reviews.push({
			img: IconPhotoOff,
			name: 'Votre entreprise',
			username: 'Monsieur Dupont',
			description: 'Super service, je recommande !'
		});
	}

	// shuffle reviews array
	reviews.sort(() => Math.random() - 0.5);

	// split reviews array into half
	let firstPart = reviews.slice(0, Math.ceil(reviews.length / 2));
	let secondPart = reviews.slice(Math.ceil(reviews.length / 2));
</script>

<section class="flex flex-col gap-4 px-4 pb-8 md:pb-24">
	<Marquee fade pauseOnHover>
		{#each firstPart as review (review)}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<Marquee fade pauseOnHover reverse>
		{#each secondPart as review (review)}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
</section>
