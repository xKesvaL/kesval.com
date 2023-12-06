<script lang="ts">
	import type { Skill, SkillType } from '$lib/data/skills';
	import { onMount } from 'svelte';
	import CardGlass from '../cards/CardGlass.svelte';
	import IconCode from '$lib/icons/IconCode.svelte';
	import IconServer from '$lib/icons/IconServer.svelte';
	import IconMore from '$lib/icons/IconMore.svelte';

	import * as m from '$paraglide/messages';

	export let skills: Skill[];
	export let type: SkillType;

	let opened = type === 'front-end';
	let innerWidth: number;

	onMount(() => {
		if (innerWidth > 768) {
			opened = true;
		}
	});

	function toggleDropdown() {
		opened = !opened;
	}
</script>

<svelte:window bind:innerWidth />

<CardGlass
	classes="flex-grow !h-fit"
	classBg="isolate !p-0"
	color={type === 'front-end' ? 'primary' : type === 'back-end' ? 'accent' : 'success'}
	scale={1}
>
	<button class="relative flex w-full items-center gap-4 p-4" on:click={toggleDropdown}>
		<div class="h-8 w-8">
			{#if type === 'front-end'}
				<IconCode />
			{:else if type === 'back-end'}
				<IconServer />
			{:else if type === 'other'}
				<IconMore />
			{/if}
		</div>
		<h3 class="font-sans text-3xl font-bold">
			{$t(`skills.${type}`)}
		</h3>
		<div
			class="absolute right-4 mb-1 h-fit origin-[53%_62%] text-4xl transition-transform {opened
				? 'rotate-45'
				: ''}"
		>
			+
		</div>
	</button>
	<div
		class="content relative -z-10 grid list-none overflow-hidden px-4 text-left transition-all {opened
			? 'grid-rows-[1fr] pb-6'
			: 'grid-rows-[0fr] py-0'}"
	>
		<ul class="flex flex-col gap-4 overflow-hidden">
			{#each skills as skill}
				<li class="flex flex-col gap-1">
					<div id="sk-{skill.name}" class="flex justify-between">
						<span class="text-lg">
							{skill.name}
						</span>
						<span>
							{skill.progress}%
						</span>
					</div>
					<div class="h-2 w-full rounded-full bg-card">
						<div
							aria-labelledby="sk-{skill.name}"
							class="h-full rounded-full {type === 'front-end'
								? 'bg-primary'
								: type === 'back-end'
								  ? 'bg-accent'
								  : 'bg-success'}"
							role="progressbar"
							style="width: {skill.progress}%"
						/>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</CardGlass>

<style lang="scss">
</style>
