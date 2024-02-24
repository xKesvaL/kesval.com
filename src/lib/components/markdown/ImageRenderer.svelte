<script lang="ts">
	export let title: string | undefined;
	export let text: string;
	export let href: string;

	const allImages = import.meta.glob('$assets/blog/**/*.{jpg,jpeg,png,avif,webp,gif}', {
		query: {
			enhanced: true
		}
	});

	let image: Promise<{ default: string }> | undefined;
	Object.keys(allImages).find((key) => {
		let hrefWithoutDollar = href.replace('$', '');
		if (key.includes(hrefWithoutDollar)) {
			image = allImages[key]() as Promise<{ default: string }>;
			return true;
		}
		return false;
	});

	console.log(image);

	$: console.log({ title, text, href });
</script>

{#await image then img}
	{#if img}
		<enhanced:img src={img.default} alt={text} />
	{/if}
{:catch error}
	<p>{error.message}</p>
{/await}
