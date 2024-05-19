<script lang="ts">
  import { mediaQuery } from "svelte-legos";
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Drawer from "$lib/components/ui/drawer";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button, type ButtonProps } from "$lib/components/ui/button/index.js";
 
  let open = false;
  const isDesktop = mediaQuery("(min-width: 768px)");

  export let title: string;
  export let description: string | undefined = undefined;
  export let buttonProps: ButtonProps = {};

  import * as m from "$paraglide/messages"
</script>
 
{#if $isDesktop}
  <Dialog.Root bind:open>
    <Dialog.Trigger asChild let:builder>
      <Button {...buttonProps} builders={[builder]}>
        <slot name="trigger" />
      </Button>
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>{title}</Dialog.Title>
        {#if description}
          <Dialog.Description>{description}</Dialog.Description>
        {/if}
      </Dialog.Header>
      <slot />
      <Dialog.Footer>
        <Dialog.Close asChild let:builder>
          <Button variant="outline" builders={[builder]}>
            {m.cancel()}
          </Button>
        </Dialog.Close>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
{:else}
  <Drawer.Root bind:open>
    <Drawer.Trigger asChild let:builder>
      <Button {...buttonProps} builders={[builder]}>
        <slot name="trigger" />
      </Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.Header class="text-left">
        <Drawer.Title>{title}</Drawer.Title>
        {#if description}
          <Drawer.Description>
            {description}
          </Drawer.Description>
        {/if}
      </Drawer.Header>
      <div class="p-4 w-full">
        <slot />
      </div>
      <Drawer.Footer class="pt-2">
        <Drawer.Close asChild let:builder>
          <Button variant="outline" builders={[builder]}>
            {m.cancel()}
          </Button>
        </Drawer.Close>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Root>
{/if}