<script lang="ts">
	import type { SortOption } from '$lib/utils/posts';
	import { filterPosts, getAllPostTags } from '$lib/utils/posts';
	import * as m from '$paraglide/messages';
	import BlogCard from './BlogCard.svelte';
	import { IconSearch, IconX } from '@tabler/icons-svelte';
	import { Input } from '$lib/components/ui/input';
	import { Badge } from '$lib/components/ui/badge';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils/ui';
	import { getLocale } from '$paraglide/runtime';

	let { posts } = $props();

	let searchTerm = $state('');
	let selectedTags = $state<string[]>([]);
	let sortBy = $state<SortOption>('date-desc');
	let filteredPostsPromise = $derived(filterPosts(posts, { sortBy, searchTerm, selectedTags }));

	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}

	function handleSortChange(value: string) {
		sortBy = value as SortOption;
	}

	const sortOptions: { value: SortOption; label: string }[] = [
		{ value: 'date-desc', label: m['common.sort_newest']() },
		{ value: 'date-asc', label: m['common.sort_oldest']() },
		{ value: 'title-asc', label: m['blog.sort.title_asc']() },
		{ value: 'title-desc', label: m['blog.sort.title_desc']() },
		{ value: 'readingTime-asc', label: m['blog.sort.readingTime_asc']() },
		{ value: 'readingTime-desc', label: m['blog.sort.readingTime_desc']() }
	];

	let selectedSortLabel = $derived(
		sortOptions.find((opt) => opt.value === sortBy)?.label ?? m['common.sort_newest']()
	);

	let allPostTags = $derived(getAllPostTags(getLocale()));
</script>

<section class="section-hero relative">
	<div class="kcontainer flex w-full flex-col gap-12 px-4">
		<div class="flex flex-col items-center text-center">
			<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
				{m['blog.title']()}
			</h1>
			<p class="text-muted-foreground max-w-[60ch] text-lg">
				{m['blog.description']()}
			</p>
		</div>

		<!-- Search and Sort -->
		<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
			<div class="relative md:max-w-sm">
				<IconSearch
					class="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
				/>
				<Input
					type="search"
					placeholder={m['blog.placeholder.search']()}
					class="pl-10"
					bind:value={searchTerm}
				/>
				{#if searchTerm}
					<Button
						variant="ghost"
						size="icon"
						class="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2"
						onclick={() => (searchTerm = '')}
					>
						<IconX class="h-4 w-4" />
					</Button>
				{/if}
			</div>

			<div class="flex items-center gap-2">
				<Select.Root
					items={sortOptions}
					type="single"
					value={sortBy}
					onValueChange={handleSortChange}
				>
					<Select.Trigger class="w-auto min-w-[150px] justify-between gap-4">
						{selectedSortLabel}
					</Select.Trigger>
					<Select.Content>
						{#each sortOptions as option}
							<Select.Item value={option.value} label={option.label}>
								{option.label}
							</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</div>

		<!-- Tag Filters -->
		<div class="flex flex-wrap items-center gap-2">
			<span class="text-muted-foreground text-sm font-medium">{m['common.filter_tags']()}:</span>
			{#each allPostTags as tag}
				{@const isSelected = selectedTags.includes(tag)}
				<Badge
					variant={isSelected ? 'default' : 'outline'}
					class={cn('cursor-pointer transition-colors')}
					onclick={() => toggleTag(tag)}
				>
					{tag}
					{#if isSelected}
						<IconX class="-mr-1 ml-1.5 h-3 w-3" />
					{/if}
				</Badge>
			{/each}
			{#if selectedTags.length}
				<Button
					variant="ghost"
					size="sm"
					class="h-auto px-2 py-0.5 text-xs"
					onclick={() => (selectedTags = [])}
				>
					{m['common.clear_filters']()}
				</Button>
			{/if}
		</div>

		<!-- Posts Grid -->
		{#await filteredPostsPromise}
			<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
				{#each Array(4) as _}
					<div class="bg-muted animate-pulse rounded-lg p-6">
						<div class="bg-muted-foreground/20 mb-4 h-40 rounded"></div>
						<div class="bg-muted-foreground/20 mb-2 h-6 w-3/4 rounded"></div>
						<div class="bg-muted-foreground/20 h-4 w-1/2 rounded"></div>
					</div>
				{/each}
			</div>
		{:then shownPosts}
			{#if shownPosts.length}
				<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
					{#each shownPosts as post (post.slug)}
						<BlogCard {post} />
					{/each}
				</div>
			{:else}
				<div class="flex flex-col items-center justify-center gap-4 py-16 text-center">
					<IconSearch class="text-muted-foreground h-12 w-12" />
					<h3 class="text-xl font-semibold">{m['blog.placeholder.no_results']()}</h3>
					<p class="text-muted-foreground max-w-sm">
						{m['blog.placeholder.no_results_description']()}
					</p>
					<Button
						variant="outline"
						onclick={() => {
							searchTerm = '';
							selectedTags = [];
						}}
					>
						{m['common.clear_filters_button']()}
					</Button>
				</div>
			{/if}
		{:catch error}
			<div class="text-destructive text-center">
				<p>Error: {error.message}</p>
			</div>
		{/await}
	</div>
</section>
