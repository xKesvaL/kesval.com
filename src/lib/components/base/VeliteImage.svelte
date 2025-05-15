<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Image } from 'velite';

	type Props = {
		class: string;
		classPicture?: string;
		imagePng: Image;
		imageAvif: Image;
		alt: string;
		convertStaticPathTo: `/${string}`;
	};

	let {
		class: _class,
		classPicture,
		imagePng,
		imageAvif,
		alt,
		convertStaticPathTo
	}: Props = $props();
</script>

<picture class={classPicture}>
	<source srcset={imageAvif.src.replace('/static', convertStaticPathTo)} type="image/avif" />
	<img
		src={imagePng.src.replace('/static', convertStaticPathTo)}
		{alt}
		loading="lazy"
		decoding="async"
		class={cn('object-cover', _class)}
	/>
</picture>
