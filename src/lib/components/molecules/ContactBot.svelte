<script lang="ts">
  import Close from '$lib/icons/Close.svelte';
  import { botState, history } from '$lib/stores/bot';
  import Image from '../atoms/Image.svelte';
  import { beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import type { ChatBotAnswers } from '$lib';

  let content: HTMLElement;
  let autoscroll: boolean;

  const toggleExpanded = () => {
    $botState = !$botState;
  };

  let chatBotAnswers = {
    first: [
      'Hello! 👋',
      "I'm Jordan Bot. I'm here to help you with your questions about Jordan.",
      'What would you like to know?',
    ],
    looking: [
      'Nice!',
      "I'm glad you're interested in myself.",
      "I hope you're enjoying my work.",
      'Can I help you with anything else?',
    ],
    hire: [
      'Wonderful!',
      "Send me a message and let's chat about it!",
      "Oh, and, I'm looking for little personnal side jobs, not full-time jobs.",
    ],
    other: ['Okay, no problem', 'Can I help you with anything else?'],
    confirmHire: [
      'Great, you can contact me here:',
      'e-mail: <a href="mailto:jabeddou@gmail.com" class="special-link">jabeddou@gmail.com</a>',
      'Can I help you with anything else?',
    ],
    teachMe: ["Hum, sure, I'm not a teacher but I can give you ressources or help you.", 'What do you want to learn?'],
    teachHTMLCSS: [
      'Well, I strongly suggest <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" class="special-link" rel="external">this course</a> from freeCodeCamp.',
      "It's free, interactive and you will learn everything from basics to advanced stuff.",
      "If you want to learn more about freeCodeCamp, you can check out <a href= '/about#certifications' class='special-link'>this page</a>.",
      'You can still contact me on my <a href="/about#socials" class="special-link">socials</a> if you have any questions.',
    ],
    teachJS: [
      'Well, I strongly suggest <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" class="special-link" rel="external">this course</a> from freeCodeCamp.',
      "It's free, interactive and you will learn everything from basics to advanced stuff.",
      "If you want to learn more about freeCodeCamp, you can check out <a href= '/about#certifications' class='special-link'>this page</a>.",
      'You can still contact me on my <a href="/about#socials" class="special-link">socials</a> if you have any questions.',
    ],
    teachSvelte: [
      'Svelte is a great framework, and I would say it is close to React.',
      'You can check out this <a href="https://www.youtube.com/@WebDevSimplified" class="special-link" rel="external">channel</a> to learn more about React, and then implement it in Svelte.',
      "Or, simply try to make a Svelte project and you'll learn a lot by doing it. A simple thing like a ToDo app is a good start.",
      "You can still contact me on my <a href='/about#socials' class='special-link'>socials</a> if you have any questions.",
    ],
  };

  let defaultQuestions: {
    text: string;
    to: ChatBotAnswers;
  }[] = [
    { text: 'Just looking!', to: 'looking' },
    { text: 'I want to hire you!', to: 'hire' },
    { text: 'Can you teach me?', to: 'teachMe' },
  ];

  let chatBotQuestions: {
    [key: string]: { text: string; to: ChatBotAnswers }[];
  } = {
    first: defaultQuestions,
    looking: defaultQuestions,
    hire: [
      { text: "Yes I'm interested!", to: 'confirmHire' },
      { text: 'No, thanks.', to: 'other' },
    ],
    other: defaultQuestions,
    confirmHire: defaultQuestions,
    teachMe: [
      {
        text: 'HTML/CSS',
        to: 'teachHTMLCSS',
      },
      {
        text: 'JavaScript',
        to: 'teachJS',
      },
      {
        text: 'Svelte',
        to: 'teachSvelte',
      },
    ],
    teachHTMLCSS: defaultQuestions,
    teachJS: defaultQuestions,
    teachSvelte: defaultQuestions,
  };

  function chooseQuestion(e: MouseEvent | KeyboardEvent) {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.classList.add('chosen');
      $history = [...$history, e.currentTarget.id as ChatBotAnswers];
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

<div class="chat-bot {$botState ? 'open' : ''}" aria-hidden={$botState ? 'false' : 'true'}>
  <header>
    <div class="wrapper">
      <div class="img">
        <Image path={'logos/kesval'} alt="KesvaL's logo" />
      </div>
      <div class="name">
        <p>Jordan Bot</p>
        <p>Ask me anything!</p>
      </div>
    </div>
    <button class="close" on:click={toggleExpanded}>
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
        class="question {'' ? 'chosen not-chosen <- only so svelte sees it as "used"' : ''}"
        on:click|once={(e) => {
          chooseQuestion(e);
        }}
        on:keypress|once={(e) => {
          if (e.key === 'Enter') {
            chooseQuestion(e);
          }
        }}
        id={question.to}>
        <p>{question.text}</p>
      </div>
    {/each}
    {#each $history as action}
      {#each chatBotAnswers[action] as answer, i}
        <div class="answer" in:fly={{ y: 50, duration: 500, delay: 1000 * i }}>
          <p>{@html answer}</p>
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
          in:fade={{ duration: 500, delay: chatBotAnswers[action].length * 1000 }}
          id={question.to}>
          <p>{question.text}</p>
        </div>
      {/each}
    {/each}
  </div>
</div>

<style lang="scss">
  @use '$lib/scss/breakpoints' as *;

  .chat-bot {
    position: fixed;
    inset: 0;
    border: 0.125rem solid var(--color-primary);
    z-index: 20;
    background: hsla(var(--color-primary-hue), 30%, var(--primary-lighter-lightness), 0.8);
    backdrop-filter: blur(1rem) saturate(2);
    box-shadow: 0px 0px 20px 0px black;
    transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
    opacity: 0;
    pointer-events: none;
    transform: translateY(5%);

    &.open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    @include breakpoint(sm) {
      top: auto;
      right: 1.5rem;
      bottom: 1.5rem;
      left: auto;
      height: 38rem;
      width: 22rem;
      border-radius: 0.5rem;
    }

    @include breakpoint(md) {
      transform: translateY(10%);
    }

    .content {
      padding: 1rem;
      overflow-y: scroll;
      max-height: 90%;
      display: grid;
      scroll-behavior: smooth;

      .answer {
        margin-bottom: 0.5rem;
        background: var(--color-gray-violet);
        padding: 1rem;
        border-radius: 1rem;
        color: hsl(var(--color-primary-hue), 100%, var(--primary-darker-lightness));
        max-width: 90%;
      }

      .question {
        margin-bottom: 0.5rem;
        border: hsl(var(--color-primary-hue), 100%, var(--primary-darker-lightness)) solid 0.125rem;
        padding: 1rem;
        border-radius: 100vh;
        color: hsl(var(--color-primary-hue), 100%, var(--primary-darker-lightness));
        width: fit-content;
        cursor: pointer;
        background: rgba(var(--color-gray-violet-rgb), 0.2);

        &.not-chosen {
          display: none;
        }

        &.chosen {
          background: rgba(var(--color-primary-rgb), 1);
          border-radius: 1em;
          justify-self: end;
          border: none;
          color: var(--color-static-text);
          cursor: default;

          &:hover {
            background: rgba(var(--color-primary-rgb), 1);
          }

          &:active {
            background: rgba(var(--color-primary-rgb), 1);
          }
        }

        &:hover {
          background: rgba(var(--color-gray-violet-rgb), 0.5);
        }

        &:active {
          background: rgba(var(--color-gray-violet-rgb), 0.8);
        }
      }
    }

    header {
      padding-inline: 1rem;
      height: 10%;
      background: var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: space-between;

      .close {
        color: var(--color-static-text);
      }

      .wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: fit-content;
        height: 100%;
        .img {
          aspect-ratio: 1/1;
          height: 50%;
        }

        .name {
          p:first-child {
            font-size: 1rem;
            font-weight: 700;
          }

          p:last-child {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
</style>
