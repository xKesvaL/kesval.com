<script lang="ts">
	import * as m from '$paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import AnimatedBadge from '$lib/components/animated/AnimatedBadge.svelte';
	import { IconMail } from '@tabler/icons-svelte';
	import { route } from '$lib/ROUTES';
	import { localizeHref } from '$paraglide/runtime';
	import { team } from '$lib/utils/config';
	import TeamProfileCard from '$lib/components/base/TeamProfileCard.svelte';
</script>

<section class="section relative">
	<div class="kcontainer relative flex flex-col gap-20 px-4">
		<!-- Section header -->
		<div class="space-y-6 text-center">
			<AnimatedBadge class=" inline-flex">
				<span class="flex items-center gap-2">
					👥
					<hr class="bg-muted-foreground h-4 w-[1px] shrink-0" />
					{m['about.team.suptitle']()}
				</span>
			</AnimatedBadge>
			<h2
				class="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
			>
				{m['about.team.title']()}
			</h2>
			<p class="text-muted-foreground mx-auto max-w-[50ch] text-lg leading-relaxed">
				{m['about.team.description']()}
			</p>
		</div>

		<!-- Creative team display section with enhanced professionalism -->
		<div class="relative flex flex-col gap-16 md:gap-24">
			<TeamProfileCard member={team.jordan} />
		</div>

		<!-- CTA with refined styling -->
		<div class=" flex justify-center pt-8">
			<Button size="lg" href={localizeHref(route('/contact'))}>
				{m['contact_us']()}
				<IconMail class="animate-bounce-y h-4 w-4 " stroke={2} />
			</Button>
		</div>
	</div>

	<!-- Refined background pattern with better blending -->
	<div class="absolute inset-0 isolate -z-10">
		<div class="from-background absolute inset-0 z-10 bg-gradient-to-b to-transparent to-20%"></div>
		<div class="from-background absolute inset-0 z-10 bg-gradient-to-t to-transparent to-20%"></div>
		<div class="bgc-dot h-full w-full"></div>
	</div>
</section>
