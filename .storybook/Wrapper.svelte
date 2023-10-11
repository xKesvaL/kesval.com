<script>
	import { addMessages, init, isLoading } from 'svelte-i18n';

	import en from '../src/lib/lang/en.json';

	addMessages('en', en);

	init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
</script>

{#if $isLoading}
	Loading...
{:else}
	<slot />
{/if}
