<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = {} & HTMLImgAttributes;

	let { ...imageProps }: Props = $props();
</script>

<img {...imageProps} class="h-full w-full object-cover" alt={imageProps.alt ?? ''} />
