<script lang="ts">
	import type { ThemeSize } from '$lib/typings/standard';

	import IconPhotoOff from '$lib/icons/IconPhotoOff.svelte';
	import { Image } from '@kesval/image-svelte';

	export let src: string;
	export let alt: string;

	export let loading: 'eager' | 'lazy' = 'lazy';
	export let figcaption: null | string = null;
	export let rounding: 'full' | ThemeSize = 'md';

	export let objectFit: 'contain' | 'cover' = 'cover';

	let error = false;
</script>

<Image {alt} let:srcSet {src} srcPrefix="/images.vercel/output/static">
	{#if error}
		<div class="invalid-source rounding-{rounding}">
			<div class="icon">
				<IconPhotoOff />
			</div>
		</div>
		{#if figcaption}
			<p class="caption">{figcaption}</p>
		{/if}
	{:else}
		<figure>
			<img
				{alt}
				class="rounding-{rounding} {objectFit}"
				decoding="async"
				{loading}
				on:error={() => {
					error = true;
				}}
				{src}
				srcset={srcSet}
			/>
			{#if figcaption}
				<figcaption>{figcaption}</figcaption>
			{/if}
		</figure>
	{/if}
</Image>

<style lang="scss">
	figure img,
	.invalid-source {
		&.rounding-sm {
			border-radius: 0.25rem;
		}

		&.rounding-md {
			border-radius: 0.5rem;
		}

		&.rounding-lg {
			border-radius: 1rem;
		}

		&.rounding-full {
			border-radius: 9999px;
		}
	}

	figure figcaption,
	.caption {
		text-align: center;
		margin-top: 0.5rem;
		font-size: var(--fs-300);
		font-style: italic;
		color: hsl(var(--base-800));
		letter-spacing: 0.025em;
	}

	figure {
		width: 100%;
		height: 100%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;

			&.cover {
				object-fit: cover;
			}

			&.contain {
				object-fit: contain;
			}
		}
	}

	.invalid-source {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		aspect-ratio: 1;
		width: 100%;
		background-color: hsl(var(--base-100));
		color: hsl(var(--base-800));

		.icon {
			height: 3rem;
			width: 3rem;
		}
	}
</style>
