<script lang="ts">
	import { bot } from '$lib/stores/bot';
	import IconX from '$lib/icons/IconX.svelte';
	import { Button } from '../../components/ui/button';
	import { beforeUpdate, afterUpdate, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type {
		ChatBotDefaultQuestions,
		ChatBotAnswers,
		ChatBotQuestions,
		ChatBotKey
	} from '$lib/typings/chatbot';

	import * as m from '$paraglide/messages';
	import { getI18n } from '$lib/utils/functions';
	import { EMAIL } from '$lib/config';
	let content: HTMLElement;
	let autoscroll = false;

	//
	// TODO: needs to be refactored at some point
	//

	function transformArrays<T = Record<string, string[]>>(arrays: string[]): T {
		const transformedObject: Record<string, string[]> = {};

		arrays?.forEach((array) => {
			const key = array.split('_')[2] as string; // Extract the key from the array string
			const index =
				parseInt(array.split('_')[3] as string) || (array.split('_')[3] as never as number); // Extract the index from the array string

			if (!transformedObject[key]) {
				transformedObject[key] = []; // Create an empty array for the key if it doesn't exist
			}

			(transformedObject[key] as string[])[index] = getI18n(array, { email: EMAIL }); // Assign the array string to the corresponding index in the transformed object
		});

		return transformedObject as T;
	}

	let messages = Object.keys(m);

	const chatBotAnswersKeys = messages.filter((message) => message.startsWith('bot_answers_'));
	let chatBotAnswers = transformArrays<ChatBotAnswers>(chatBotAnswersKeys);

	const chatBotDefaultQuestionsKeys = messages.filter((message) =>
		message.startsWith('bot_defaultQuestions_')
	);
	let chatBotDefaultQuestions = Object.values(
		transformArrays<ChatBotDefaultQuestions>(chatBotDefaultQuestionsKeys)
	);

	const chatBotQuestionsKeys = messages.filter((message) => message.startsWith('bot_questions_'));
	const chatBotQuestionsArray = Object.entries(
		transformArrays<ChatBotQuestions>(chatBotQuestionsKeys)
	);

	let chatBotQuestions = {
		first: chatBotDefaultQuestions,
		looking: chatBotDefaultQuestions,
		other: chatBotDefaultQuestions,
		confirmHire: chatBotDefaultQuestions,
		teachHTMLCSS: chatBotDefaultQuestions,
		teachJS: chatBotDefaultQuestions,
		teachSvelte: chatBotDefaultQuestions
	} as ChatBotQuestions;

	chatBotQuestionsArray.forEach(([key, value]) => {
		chatBotQuestions[key as ChatBotKey] = value.map((_, i) => {
			return {
				to: getI18n(`bot_questions_${key}_${i}_to`),
				text: getI18n(`bot_questions_${key}_${i}_text`)
			};
		}) as any;
	});

	async function chooseQuestion(e: MouseEvent | KeyboardEvent) {
		if (e.currentTarget instanceof HTMLElement) {
			const target = e.currentTarget;

			target.dataset.chosen = 'true';

			$bot.history = [...$bot.history, target.dataset.name as ChatBotKey];
		}
	}

	beforeUpdate(() => {
		autoscroll = content && content.offsetHeight + content.scrollTop > content.scrollHeight - 80;
	});

	afterUpdate(() => {
		if (autoscroll && $bot.history && $bot.history.length > 0) {
			let lengthAnswers = chatBotAnswers[$bot.history.at(-1) as ChatBotKey].length || 0;
			let lengthQuestions = chatBotQuestions[$bot.history.at(-1) as ChatBotKey].length || 0;

			for (let i = 0; i <= lengthAnswers; i++) {
				setTimeout(() => {
					if (i === lengthAnswers) {
						content?.scrollTo(0, content.scrollHeight);
					} else {
						content?.scrollTo(
							0,
							content.scrollHeight -
								content.offsetHeight -
								80 * (lengthAnswers - i) -
								60 * (lengthQuestions - 1)
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

{#if $bot.open}
	<div
		class="fixed inset-0 z-20 overflow-hidden border border-primary/25 text-primary-foreground backdrop-blur-lg backdrop-saturate-200 sm:bottom-4 sm:left-auto sm:right-4 sm:top-auto sm:h-[36rem] sm:w-[22rem] sm:rounded-lg"
		transition:fly={{ y: 20, duration: 300, opacity: 0 }}
		aria-hidden={$bot.open ? false : true}
	>
		<header class="grid grid-cols-[auto,1fr,auto] items-center gap-3 bg-primary px-2 py-4">
			<div class="ml-2 h-12 w-12 rounded-full border-2 border-white">
				<enhanced:img src="$assets/logos/logo.png" alt={m.common_profile_picture()} />
			</div>
			<div class="flex h-full flex-col justify-between">
				<h2 class="font-sans leading-none">
					{m.bot_title()}
				</h2>
				<p class="text-sm">
					{m.bot_subtitle()}
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
			{#each chatBotAnswers.first as answer}
				<div class="text-foreground; mb-2 max-w-[90%] rounded-lg bg-background/95 p-4">
					<p>{answer}</p>
				</div>
			{/each}

			{#each chatBotQuestions.first as question}
				<button
					class="mb-2 w-fit justify-self-end p-4 transition-all duration-150
				{$bot.history.length && $bot.history[0]
						? $bot.history[0] === question.to
							? 'cursor-default rounded-lg bg-primary text-primary-foreground'
							: 'hidden'
						: 'cursor-pointer rounded-5xl border-2 border-primary bg-background/40 hover:bg-primary hover:text-primary-foreground'}"
					on:click|once={(e) => {
						chooseQuestion(e);
					}}
					data-name={question.to}
					data-chosen="null"
				>
					<p>{question.text}</p>
				</button>
			{/each}

			{#each $bot.history as action, actionIndex}
				{#each chatBotAnswers[action] as answer, i}
					<div
						class="text-foreground; mb-2 max-w-[90%] rounded-lg bg-background/95 p-4"
						in:fly|global={{ y: 50, duration: 500, delay: 1000 * i }}
					>
						{@html answer}
					</div>
				{/each}

				{#each chatBotQuestions[action] as question}
					<button
						class="mb-2 w-fit justify-self-end p-4 transition-all duration-150
								{$bot.history.length && $bot.history[actionIndex + 1]
							? $bot.history[actionIndex + 1] === question.to
								? 'cursor-default rounded-lg bg-primary text-primary-foreground'
								: 'hidden'
							: 'cursor-pointer rounded-5xl border-2 border-primary bg-background/40 hover:bg-primary hover:text-primary-foreground'}"
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
		background: linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0)),
			linear-gradient(225deg, hsl(var(--accent) / 0.05), transparent),
			linear-gradient(0deg, hsl(var(--accent) / 0.05), transparent),
			radial-gradient(hsl(var(--muted) / 0.7), hsl(var(--muted) / 0.7));
		box-shadow: 0px 0px 16px 4px hsla(0, 0%, 0%, 0.5);
		view-transition-name: chat-bot;
	}
</style>
