<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import HomeHero from './HomeHero.svelte';

	type Story = ComponentProps<HomeHero>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta {argTypes} args={metaArgs} component={HomeHero} title="Containers/Home/Hero" />

<Template {argTypes} args={metaArgs} let:args>
	<HomeHero {...args} />
</Template>

<Story let:args name="Default">
	<HomeHero {...args} />
</Story>
