<script lang="ts">
	import type { ArgTypes } from '@storybook/svelte';	import type { ComponentProps } from 'svelte';

	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import ErrorHero from './ErrorHero.svelte';

	type Story = ComponentProps<ErrorHero>;

	const metaArgs: Story = {};

	const argTypes: ArgTypes<Story> = {};
</script>

<Meta {argTypes} args={metaArgs} component={ErrorHero} title="Containers/Error/Hero" />

<Template {argTypes} args={metaArgs} let:args>
	<ErrorHero {...args} />
</Template>

<Story let:args name="Default">
	<ErrorHero {...args} />
</Story>
