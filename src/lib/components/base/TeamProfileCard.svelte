<script lang="ts">
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { brand, type TeamMember } from '$lib/utils/config';
	import { translate } from '$lib/utils/i18n';
	import { Badge } from '../ui/badge';
	import { Button } from '../ui/button';
	import Card from '../ui/card/card.svelte';
	import * as m from '$paraglide/messages';

	type Props = {
		member: TeamMember;
	};

	let { member }: Props = $props();

	const isMobile = new IsMobile();
</script>

<Card
	class="group not-prose shadow-primary/5 grid grid-cols-1 overflow-hidden rounded-2xl border p-0 shadow-[inset_0_-4px_8px_0px] drop-shadow-xs transition-all duration-500 ease-in-out md:grid-cols-6"
>
	<div
		class="relative overflow-hidden md:col-span-2 [&>picture]:my-0 [&>picture]:h-full"
		style={`clip-path: ${isMobile.current ? 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' : 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'}`}
	>
		<enhanced:img
			src={member.image}
			alt={`${member.name} - ${member.role} at KesvaL Studio`}
			class="h-full max-h-64 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 @md:max-h-88"
		/>
		<Badge class="absolute top-4 left-4 z-30">{brand.name}</Badge>
	</div>
	<div class="flex flex-col justify-between px-6 pb-6 md:col-span-4 md:px-2 md:py-6">
		<div>
			<h3 class="h4 font-semibold">{member.name}</h3>
			<p class="text-primary mb-4">
				{#await translate(`roles.${member.role}`) then translation}
					{translation}
				{/await}
			</p>

			<div class="mb-6">
				<p class="text-muted-foreground leading-relaxed">
					{#await translate(`team.${member.id}.description`) then translation}
						{translation}
					{/await}
				</p>
			</div>

			<div class="mb-6">
				<h4 class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
					{m['team.expertise']()}
				</h4>
				<div class="flex flex-wrap gap-2">
					{#each member.skills as skill (skill.name)}
						<Badge variant="outline">
							{#await translate(`skills.${skill.name}`) then translation}
								{translation}
							{/await}
						</Badge>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex space-x-2">
			{#each member.socials as social (social.href)}
				<Button
					href={social.href}
					size="icon"
					variant="outline"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full"
				>
					<social.icon size={18} />
				</Button>
			{/each}
		</div>
	</div>
</Card>
