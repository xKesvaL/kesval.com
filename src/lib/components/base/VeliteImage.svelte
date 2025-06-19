<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Image } from 'velite';

	type Props = {
		class: string;
		classPicture?: string;
		imagePng: Image;
		imageAvif: Image;
		alt: string;
	};

	let { class: _class, classPicture, imagePng, imageAvif, alt }: Props = $props();
</script>

<picture class={classPicture}>
	<source srcset={imageAvif.src.replace('/static', '/content')} type="image/avif" />
	<img
		src={imagePng.src.replace('/static', '/content')}
		{alt}
		loading="lazy"
		decoding="async"
		class={cn('object-cover', _class)}
	/>
</picture>
