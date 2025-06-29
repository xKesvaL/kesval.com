<script lang="ts">
	import type { Post } from '$content/index';
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { IconBrandLinkedin, IconBrandX, IconLink } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import AnimatedCircleCheck from '../base/AnimatedCircleCheck.svelte';
	import { cn } from '$lib/utils/ui';

	type Props = {
		post: Post;
	};

	let { post }: Props = $props();

	let copied = $state(false);

	const getShareUrl = (platform: 'x' | 'linkedin' | 'link' | 'copy') => {
		if (!browser) return '';
		const url = new URL(page.url.href).origin + page.url.pathname;
		const text = post.title;

		switch (platform) {
			case 'x':
				return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
			case 'linkedin':
				return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
			case 'copy':
				return url;
		}
	};

	const copyToClipboard = () => {
		if (!browser) return;
		const urlToCopy = getShareUrl('copy');

		if (!urlToCopy) {
			return null;
		}

		navigator.clipboard.writeText(urlToCopy).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 4000); // Reset copied state after 4 seconds (default duration for the toast)
			toast.success(m['common.link_copied_to_clipboard']());
		});
	};
</script>

<div class="hidden flex-col gap-2 lg:flex">
	<h3 class="text-base">
		{m['blog.share_this_post']()}
	</h3>
	<div class="flex gap-4">
		<Button
			variant="outline"
			href={getShareUrl('x')}
			target="_blank"
			rel="noopener noreferrer"
			size="icon"
		>
			<IconBrandX class="h-4 w-4" />
			<span class="sr-only">
				{m['blog.share_on_x']({ x: 'X' })}
			</span>
		</Button>
		<Button
			variant="outline"
			href={getShareUrl('linkedin')}
			target="_blank"
			rel="noopener noreferrer"
			size="icon"
		>
			<IconBrandLinkedin class="h-4 w-4" />
			<span class="sr-only">
				{m['blog.share_on_x']({ x: 'LinkedIn' })}
			</span>
		</Button>
		<Button
			variant="outline"
			onclick={copyToClipboard}
			size="icon"
			class={cn(copied && 'text-primary')}
		>
			{#if copied}
				<AnimatedCircleCheck />
			{:else}
				<IconLink class="h-4 w-4" />
			{/if}
			<span class="sr-only">
				{m['common.copy_link']()}
			</span>
		</Button>
	</div>
</div>
