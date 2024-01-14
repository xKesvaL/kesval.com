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
	class="container sticky top-0 z-10 flex min-h-[4rem] items-center justify-between px-3 py-2 backdrop-blur-xl backdrop-saturate-150 lg:top-4 lg:rounded-full"
	id="navigation"
	style="view-transition-name: header;"
>
	<a href={route('/')} class="relative h-10 w-10">
		<enhanced:img src="$assets/logos/logo.png" alt="KesvaL Logo" />
	</a>
	<nav
		class={`nav fixed -right-2 left-0 top-0 z-50 flex flex-col items-start justify-center gap-4 overflow-hidden bg-primary p-12 text-5xl font-bold text-white transition-transform duration-500 lg:relative lg:min-h-0 lg:translate-x-0 lg:flex-row lg:bg-transparent lg:p-0 lg:text-xl lg:font-normal lg:text-foreground ${
			$navigationOpen ? 'translate-x-0' : '-translate-x-full'
		}`}
		style="view-transition-name: header-nav"
	>
		<a
			class="rounded-none px-4 py-2 transition-colors duration-200 lg:rounded-full {pathWithoutlang ===
			route('/')
				? 'active border-b-2 border-primary-foreground lg:border lg:border-border/50'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/')}
		>
			{m.home_name()}
		</a>
		<a
			class="rounded-none px-4 py-2 transition-colors duration-200 lg:rounded-full {pathWithoutlang.startsWith(
				route('/about')
			)
				? 'active border-b-2 border-primary-foreground lg:border lg:border-border/50'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/about')}
		>
			{m.about_name()}
		</a>
		<a
			class="rounded-none px-4 py-2 transition-colors duration-200 lg:rounded-full {pathWithoutlang.startsWith(
				route('/work')
			)
				? 'active border-b-2 border-primary-foreground lg:border lg:border-border/50'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/work')}
		>
			{m.work_name()}
		</a>
		<a
			class="rounded-none px-4 py-2 transition-colors duration-200 lg:rounded-full {pathWithoutlang.startsWith(
				route('/blog')
			)
				? 'active border-b-2 border-primary-foreground lg:border lg:border-border/50'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => navigationOpen.set(false)}
			href={route('/blog')}
		>
			{m.blog_name()}
		</a>
		<button
			class="rounded-none px-4 py-2 transition-colors duration-200 lg:rounded-full {$bot.open
				? 'active border-b-2 border-primary-foreground lg:border lg:border-border/50'
				: 'border border-transparent lg:hover:border-border/50 lg:hover:bg-background/50'} "
			on:click={() => {
				navigationOpen.set(false);
				bot.toggle();
			}}
		>
			{m.contact_name()}
		</button>
	</nav>
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
			hsl(var(--primary-500) / 0.1),
			hsl(var(--primary-200) / 0.25)
		);

		@media (min-width: 1024px) {
			--ct-max-width: 760px;
		}

		.nav {
			min-height: 95vh;
			height: calc(100dvh + 1.5rem);

			@media (min-width: 1024px) {
				min-height: 0;
				height: auto;
			}

			a,
			button {
				position: relative;
				padding: 0.5rem 1rem;

				@media (min-width: 1024px) {
					&:not(.active) {
						text-shadow:
							0 0 1.25rem hsl(var(--background)),
							0 0 1.25rem hsl(var(--background));
					}

					&.active {
						background: hsl(var(--base-50) / 0.75);
					}
				}
			}
		}
	}
</style>
