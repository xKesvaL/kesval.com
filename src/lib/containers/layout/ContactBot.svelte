<script lang="ts">
	import { bot } from '$lib/stores/bot';
	import Image from '../../components/base/Image.svelte';
	import IconX from '$lib/icons/IconX.svelte';
	import { Button } from '../../components/ui/button';
	import { json, t } from 'svelte-i18n';
	import { beforeUpdate, afterUpdate, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type {
		ChatBotAnswers,
		ChatBotDefaultQuestions,
		ChatBotKey,
		ChatBotQuestions,
	} from '$lib/typings/chatbot';

	let content: HTMLElement;
	let autoscroll: boolean;

	let chatBotAnswers = $json('bot.answers') as ChatBotAnswers;
	$: chatBotAnswers = $json('bot.answers') as ChatBotAnswers;

	let defaultQuestions = $json('bot.defaultQuestions') as ChatBotDefaultQuestions;
	$: defaultQuestions = $json('bot.defaultQuestions') as ChatBotDefaultQuestions;

	let chatBotQuestions = $json('bot.questions') as ChatBotQuestions;
	$: chatBotQuestions = {
		first: defaultQuestions,
		looking: defaultQuestions,
		other: defaultQuestions,
		confirmHire: defaultQuestions,
		teachHTMLCSS: defaultQuestions,
		teachJS: defaultQuestions,
		teachSvelte: defaultQuestions,
		...($json('bot.questions') as Partial<ChatBotQuestions>),
	} as ChatBotQuestions;

	async function chooseQuestion(e: MouseEvent | KeyboardEvent) {
		if (e.currentTarget instanceof HTMLElement) {
			const target = e.currentTarget;

			target.dataset.chosen = 'true';
			$bot.history = [...$bot.history, target.dataset.name as ChatBotKey];
			content.querySelectorAll('.question').forEach((el) => {
				if ((el as HTMLElement).dataset.chosen !== 'true') {
					(el as HTMLElement).dataset.chosen = 'false';
				}
			});
		}
	}

	beforeUpdate(() => {
		autoscroll = content && content.offsetHeight + content.scrollTop > content.scrollHeight - 20;
	});

	afterUpdate(() => {
		if (autoscroll && $bot.history && $bot.history.length > 0) {
			let lengthAnswers = chatBotAnswers[$bot.history.at(-1) as ChatBotKey].length || 0;
			let lengthQuestions = chatBotQuestions[$bot.history.at(-1) as ChatBotKey].length || 0;

			for (let i = 0; i <= lengthAnswers; i++) {
				setTimeout(() => {
					if (i === lengthAnswers) {
						content.scrollTo(0, content.scrollHeight);
					} else {
						content.scrollTo(
							0,
							content.scrollHeight -
								content.offsetHeight -
								80 * (lengthAnswers - i) -
								60 * (lengthQuestions - 1),
						);
					}
				}, 1000 * i);
			}
		}
	});

	onDestroy(() => {
		$bot.history = [];
	});
</script>

<!-- <div class="chat-bot {$botState ? 'open' : ''}" aria-hidden={$botState ? 'false' : 'true'} id="chat-bot">

  <div class="content" bind:this={content}>
    {#each $history as action}
      {#each chatBotAnswers[action] as answer, i}
        <div class="answer" in:fly|global={{ y: 50, duration: 500, delay: 1000 * i }}> -->
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<!--
          <p>{@html answer.replaceAll('{email}', email)}</p>
        </div>
      {/each}
      {#each chatBotQuestions[action] as question, i}
        <div
          class="question"
          on:click|once={(e) => {
            chooseQuestion(e);
          }}
          on:keypress|once={(e) => {
            if (e.key === 'Enter') {
              chooseQuestion(e);
            }
          }}
          role="button"
          tabindex={$botState ? 0 : -1}
          in:fade|global={{ duration: 500, delay: chatBotAnswers[action].length * 1000 }}
          data-name={question.to}>
          <p>{question.text}</p>
        </div>
      {/each}
    {/each}
  </div>
</div> -->

{#if $bot.open}
	<div
		class="fixed inset-0 z-0 overflow-hidden text-primary-foreground backdrop-blur-lg backdrop-saturate-200 sm:bottom-4 sm:left-auto sm:right-4 sm:top-auto sm:h-[36rem] sm:w-[22rem] sm:rounded-lg"
		transition:fly={{ y: 20, duration: 300, opacity: 0 }}
		aria-hidden={$bot.open ? false : true}
	>
		<header class="grid grid-cols-[auto,1fr,auto] items-center gap-4 bg-primary px-2 py-4">
			<div class="ml-2 h-10 w-10">
				<Image src="/images/logos/logo.png" alt="KesvaL Logo" />
			</div>
			<div class="flex h-full flex-col justify-between">
				<h2 class="font-sans leading-none">
					{$t('bot.title')}
				</h2>
				<p class="text-sm">
					{$t('bot.subtitle')}
				</p>
			</div>
			<Button
				size="icon"
				variant="ghost"
				class="p-1 text-primary-foreground hover:bg-transparent hover:text-primary-foreground"
				on:click={bot.toggle}
			>
				<IconX />
			</Button>
		</header>
		<div
			class="content grid max-h-[90%] overflow-y-scroll overscroll-contain scroll-smooth p-4 text-foreground"
			bind:this={content}
		>
			{#each chatBotAnswers['first'] as answer}
				<div class="answer">
					<p>{answer}</p>
				</div>
			{/each}

			{#each chatBotQuestions['first'] as question}
				<button
					class="question"
					on:click|once={(e) => {
						chooseQuestion(e);
					}}
					data-name={question.to}
					data-chosen="null"
				>
					<p>{question.text}</p>
				</button>
			{/each}
			{#each $bot.history as action}
				{#each chatBotAnswers[action] as answer, i}
					<div class="answer" in:fly|global={{ y: 50, duration: 500, delay: 1000 * i }}>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{answer}
					</div>
				{/each}
				{#each chatBotQuestions[action] as question}
					<button
						class="question"
						on:click|once={(e) => {
							chooseQuestion(e);
						}}
						in:fade|global={{ duration: 500, delay: chatBotAnswers[action].length * 1000 }}
						data-name={question.to}
					>
						<p>{question.text}</p>
					</button>
				{/each}
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	div.fixed {
		background: linear-gradient(135deg, hsl(var(--primary-500) / 0.05), hsl(var(--primary-100) / 0)),
			linear-gradient(225deg, hsl(var(--secondary-500) / 0.05), transparent),
			linear-gradient(0deg, hsl(var(--secondary-500) / 0.05), transparent),
			radial-gradient(hsl(var(--primary-50) / 0.8), hsl(var(--primary-50) / 0.8));
		box-shadow: 0px 0px 16px 4px hsla(0, 0%, 0%, 0.5);
		view-transition-name: chat-bot;
	}
</style>
