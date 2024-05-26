<script lang="ts">
  import { setContext, createEventDispatcher, onMount } from 'svelte'
  import Parser from './Parser.svelte'
  import { Lexer, defaultOptions, defaultRenderers } from './markdown-parser'
  import { key } from './context'
  import { slug } from 'github-slugger';
	import type { Renderers } from './types';
	import type { Token } from 'marked';

  export let source = "";
  export let renderers: Partial<Renderers> = {}
  export let options = {}
  export let isInline = false

  const dispatch = createEventDispatcher();

  let tokens: Token[];
  let lexer: Lexer;
  let mounted: boolean;

  $: slugger = source ? slug : undefined
  $: combinedOptions = { ...defaultOptions, ...options }
  $: {
    lexer = new Lexer(combinedOptions)

    tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source)

    dispatch('parsed', { tokens })
  }

  $: combinedRenderers = { ...defaultRenderers, ...renderers }

  setContext(key, {
    slug: (val) => slugger ? slugger(val) : '',
    getOptions: () => combinedOptions
  })
  $: mounted && dispatch('parsed', { tokens })

  onMount(() => {
    mounted = true
  });
</script>

<Parser {tokens} renderers={combinedRenderers} />