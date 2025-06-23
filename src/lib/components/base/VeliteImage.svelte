<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Image } from 'velite';

	type Props = {
		class: string;
		classPicture?: string;
		classWrapper?: string;
		imagePng: Image;
		imageAvif: Image;
		alt: string;
	};

	let { class: _class, classPicture, classWrapper, imagePng, imageAvif, alt }: Props = $props();
</script>

<div
	class={cn('relative overflow-hidden bg-cover bg-center', classWrapper)}
	style="background-image: url('{imagePng.blurDataURL}');"
>
	<picture class={classPicture}>
		<source srcset={imageAvif.src.replace('/static', '/content')} type="image/avif" />
		<img
			src={imagePng.src.replace('/static', '/content')}
			{alt}
			loading="lazy"
			decoding="async"
			class={cn('object-cover', _class)}
			onload={(e) => {
				(e.target as HTMLImageElement).style.opacity = '1';
			}}
		/>
	</picture>
</div>
