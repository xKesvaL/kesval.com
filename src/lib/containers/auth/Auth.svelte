<script lang="ts">
	import AuthLogin from '$lib/components/auth/AuthLogin.svelte';
	import AuthReauth from '$lib/components/auth/AuthReauth.svelte';
	import AuthRegister from '$lib/components/auth/AuthRegister.svelte';
	import Card from '$lib/components/base/CustomCard.svelte';
	import { fade } from 'svelte/transition';

	export let type: 'login' | 'reauth' | 'register' = 'login';
</script>

<Card scale={false}>
	<div class="wrapper" transition:fade={{ delay: 300, duration: 300 }}>
		{#if type === 'login'}
			<AuthLogin />
		{:else if type === 'register'}
			<AuthRegister />
		{:else if type === 'reauth'}
			<AuthReauth />
		{/if}
	</div>
</Card>
