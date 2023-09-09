<script lang="ts">
  /* eslint-disable no-constant-condition */
  import Close from '$lib/icons/IconClose.svelte';
  import { botState, history } from '$lib/stores/bot';
  import Image from '../base/Image.svelte';
  import { beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import type { ChatBotAnswers } from '$lib';
  import { json, t } from 'svelte-i18n';

  export let email: string;

  let content: HTMLElement;
  let autoscroll: boolean;

  const toggleExpanded = () => {
    botState.update((state) => !state);
  };

  let chatBotAnswers: {
    [key in ChatBotAnswers]: string[];
  };
  $: chatBotAnswers = $json('chatBot.answers') as {
    [key in ChatBotAnswers]: string[];
  };

  interface defaultQuestionType {
    text: string;
    to: ChatBotAnswers;
  }

  type defaultQuestionsType = defaultQuestionType[];

  let defaultQuestions: defaultQuestionsType;
  $: defaultQuestions = $json('chatBot.defaultQuestions') as defaultQuestionsType;

  let chatBotQuestions: {
    [key: string]: defaultQuestionsType;
  };
  $: chatBotQuestions = {
    first: defaultQuestions,
    looking: defaultQuestions,
    other: defaultQuestions,
    confirmHire: defaultQuestions,
    teachHTMLCSS: defaultQuestions,
    teachJS: defaultQuestions,
    teachSvelte: defaultQuestions,
    ...($json('chatBot.questions') as {
      [key: string]: defaultQuestionsType;
    }),
  };

  function chooseQuestion(e: MouseEvent | KeyboardEvent) {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.classList.add('chosen');
      $history = [...$history, e.currentTarget.dataset.name as ChatBotAnswers];
      document.querySelectorAll('.question').forEach((el) => {
        if (!el.classList.contains('chosen')) {
          el.classList.add('not-chosen');
        }
      });
    }
  }

  beforeUpdate(() => {
    autoscroll = content && content.offsetHeight + content.scrollTop > content.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll && $history && $history.length > 0) {
      let length = chatBotAnswers[$history[$history.length - 1]].length || 0;
      for (let i = 0; i < length; i++) {
        setTimeout(() => {
          content.scrollTo(0, content.scrollHeight - content.offsetHeight - 100 * (length - 1 - i));
        }, 1000 * i);
      }
    }
  });

  onDestroy(() => {
    $history = [];
  });
</script>

<div class="chat-bot {$botState ? 'open' : ''}" aria-hidden={$botState ? 'false' : 'true'} id="chat-bot">
  <header>
    <div class="wrapper">
      <div class="img">
        <Image src={'/images/logos/kesval.png'} alt={$t('std.kesvalLogo')} border={false} />
      </div>
      <div class="name">
        <p>Jordan Bot</p>
        <p>{$t('chatBot.askMeAnything')}</p>
      </div>
    </div>
    <button class="close" tabindex={$botState ? 0 : -1} on:click={toggleExpanded} aria-controls="chat-bot">
      <Close />
    </button>
  </header>

  <div class="content" bind:this={content}>
    {#each chatBotAnswers['first'] as answer, i}
      <div class="answer">
        <p>{answer}</p>
      </div>
    {/each}

    {#each chatBotQuestions['first'] as question, i}
      <div
        class="question {'' ? 'chosen not-chosen <- only so svelte sees it as used' : ''}"
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
        data-name={question.to}>
        <p>{question.text}</p>
      </div>
    {/each}
    {#each $history as action}
      {#each chatBotAnswers[action] as answer, i}
        <div class="answer" in:fly|global={{ y: 50, duration: 500, delay: 1000 * i }}>
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
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
</div>

<style lang="scss">
  .chat-bot {
    view-transition-name: contact-bot;
    position: fixed;
    inset: 0;
    border: 2px solid var(--primary-400);
    z-index: 20;
    background: linear-gradient(135deg, rgba(var(--primary-500-rgb), 0.15), rgba(var(--primary-100-rgb), 0)),
      linear-gradient(225deg, rgba(var(--secondary-500-rgb), 0.1), rgba(var(--primary-100-rgb), 0)),
      linear-gradient(0deg, rgba(var(--secondary-500-rgb), 0.05), rgba(var(--primary-100-rgb), 0)),
      radial-gradient(rgba(var(--primary-100-rgb), 0.9), rgba(var(--primary-100-rgb), 0.9));
    backdrop-filter: blur(0.5rem) saturate(2);
    box-shadow: var(--box-shadow-5);
    transition:
      transform 0.25s ease-in-out,
      opacity 0.25s ease-in-out;
    opacity: 0;
    pointer-events: none;
    transform: translateY(5%);
    overflow: hidden;

    &.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    @include mq(sm) {
      top: auto;
      right: 1.5rem;
      bottom: 1.5rem;
      left: auto;
      height: 38rem;
      width: 22rem;
      border-radius: 0.75rem;
    }

    @include mq(md) {
      transform: translateY(10%);
    }

    .content {
      padding: 1rem;
      overflow-y: scroll;
      overscroll-behavior: contain;
      max-height: 90%;
      display: grid;
      scroll-behavior: smooth;

      .answer {
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, rgba(var(--primary-500-rgb), 0.05), rgba(var(--primary-100-rgb), 0)),
          linear-gradient(315deg, rgba(var(--primary-500-rgb), 0.05), rgba(var(--primary-100-rgb), 0)),
          radial-gradient(rgba(var(--base-50-rgb), 0.8), rgba(var(--base-50-rgb), 0.8));
        padding: 1rem;
        border-radius: 0.75rem;
        color: var(--primary-900);
        max-width: 90%;
      }

      .question {
        margin-bottom: 0.5rem;
        border: var(--primary-500) solid 2px;
        padding: 1rem;
        border-radius: 1rem;
        color: hsl(var(--primary-hue), 100%, var(--primary-darker-lightness));
        width: fit-content;
        cursor: pointer;
        background: rgba(var(--base-100-rgb), 0.4);

        &.not-chosen {
          display: none;
        }

        &.chosen {
          background: rgba(var(--primary-500-rgb), 1);
          border-radius: 1em;
          justify-self: end;
          border: none;
          color: white;
          cursor: default;

          &:hover,
          &:focus {
            background: rgba(var(--primary-500-rgb), 1);
          }

          &:active {
            background: rgba(var(--primary-500-rgb), 1);
          }
        }

        &:hover,
        &:focus {
          background: rgba(var(--base-200), 0.5);
        }

        &:active {
          background: rgba(var(--base-200), 0.9);
        }
      }
    }

    header {
      padding-inline: 1rem;
      height: 10%;
      background: var(--primary-400);
      display: flex;
      align-items: center;
      justify-content: space-between;

      .close {
        color: white;
        background: none;
      }

      .wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: fit-content;
        height: 100%;

        .img {
          aspect-ratio: 1/1;
          height: 70%;
        }

        .name {
          color: white;

          p:first-child {
            font-size: var(--fs-400);
            font-weight: var(--fw-bold);
          }

          p:last-child {
            font-size: var(--fs-300);
          }
        }
      }
    }
  }
</style>
