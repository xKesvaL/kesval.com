<script>
	import { page } from '$app/stores';
	import { navigationOpen } from '$lib/stores/common';
	import LangSwitcher from '../../components/layout/LangSwitcher.svelte';
	import NavigationMenuButton from '../../components/layout/NavigationMenuButton.svelte';
	import Settings from '../../components/layout/settings/Settings.svelte';
	import { bot } from '$lib/stores/bot';
	import { route } from '$lib/ROUTES';

	import * as m from '$paraglide/messages';

	let pathWithoutlang = $page.url.pathname.replace(`/${$page.params.lang}`, '') || '/';
	$: pathWithoutlang = $page.url.pathname.replace(`/${$page.params.lang}`, '') || '/';
</script>

<header
	class="container sticky top-0 z-10 flex min-h-[4rem] items-center justify-between px-2 py-2 backdrop-blur-lg backdrop-saturate-200 lg:top-4 lg:rounded-full"
	id="navigation"
	style="view-transition-name: header; --ct-max-width: 760px;"
>
	<a href={route('/')} class="relative h-12 w-12">
		<enhanced:img src="$assets/logos/logo.png" alt="KesvaL Logo" />
	</a>
	<div
		class={`nav fixed left-0 right-0 top-0 z-50 flex min-h-screen flex-col items-start justify-center gap-4 overflow-hidden bg-primary p-12 text-5xl font-bold text-white transition-transform duration-500 lg:relative lg:min-h-0 lg:translate-x-0 lg:flex-row lg:bg-transparent lg:p-0 lg:text-xl lg:font-normal lg:text-foreground ${
			$navigationOpen ? 'translate-x-0' : '-translate-x-full'
		}`}
		style="view-transition-name: header-nav"
	>
		<a
			class="rounded-full px-4 py-2 transition-colors duration-200 {pathWithoutlang === route('/')
				? 'border border-border/50 active'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/')}
		>
			{m.home_name()}
		</a>
		<a
			class="rounded-full px-4 py-2 transition-colors duration-200 {pathWithoutlang.startsWith(
				route('/about')
			)
				? 'border border-border/50 active'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/about')}
		>
			{m.about_name()}
		</a>
		<a
			class="rounded-full px-4 py-2 transition-colors duration-200 {pathWithoutlang.startsWith(
				route('/work')
			)
				? 'border border-border/50 active'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/work')}
		>
			{m.work_name()}
		</a>
		<a
			class="rounded-full px-4 py-2 transition-colors duration-200 {pathWithoutlang.startsWith(
				route('/blog')
			)
				? 'border border-border/50 active'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/blog')}
		>
			{m.blog_name()}
		</a>
		<button
			class="rounded-full px-4 py-2 transition-colors duration-200 {$bot.open
				? 'border border-border/50 active'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => {
				navigationOpen.set(false);
				bot.toggle();
			}}
		>
			{m.contact_name()}
		</button>
	</div>
	<div class="flex items-center gap-2 text-muted-foreground">
		<LangSwitcher />
		<Settings />
		<div class="relative z-50 flex items-center lg:hidden">
			<NavigationMenuButton />
		</div>
	</div>
</header>

<style lang="scss">
	header {
		background: linear-gradient(
			45deg,
			hsl(var(--primary-500) / 0.05),
			hsl(var(--primary-200) / 0.25)
		);

		.nav {
			a,
			button {
				position: relative;
				padding: 0.5rem 1rem;

				&.active {
					background: hsl(var(--primary-50));
				}
			}
		}
	}
</style>
