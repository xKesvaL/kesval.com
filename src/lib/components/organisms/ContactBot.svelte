<script lang="ts">
  import Close from '$lib/icons/Close.svelte';
  import { botState } from '$lib/stores/bot';
  import Image from '../atoms/Image.svelte';

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
      "I'm glad you're interested in Jordan.",
      "I hope you're enjoying my work.",
      'Can I help you with anything else?',
    ],
    hire: [
      'Wonderful!',
      "Send me a message and let's chat about it!",
      "Oh, and, I'm looking for side jobs, not full-time jobs.",
    ],
  };

  let chatBotQuestions = {
    first: ['Just looking!', 'I want to hire you!'],
    hire: ["Yes I'm interested!", 'No, thanks.'],
  };

  let chatBotCurrentQuestion: keyof typeof chatBotAnswers = 'first';
</script>

<div class="chat-bot {$botState ? 'open' : ''}" aria-hidden={$botState ? 'false' : 'true'}>
  <header>
    <div class="wrapper">
      <div class="img">
        <Image path={'logos/kesval'} alt="KesvaL's logo" />
      </div>
      <div class="name">
        <p>Chat Bot</p>
        <p>Ask me anything!</p>
      </div>
    </div>
    <button class="close" on:click={toggleExpanded}>
      <Close />
    </button>
  </header>

  <div class="content">
    {#each chatBotAnswers[chatBotCurrentQuestion] as answer}
      <div class="answer">
        <p>{answer}</p>
      </div>
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
    transform: translateY(5%);
    transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
    opacity: 0;
    pointer-events: none;

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
      transform: translateY(20%);
    }

    .content {
      padding: 1rem;
      overflow-y: scroll;
      max-height: 90%;

      .answer {
        margin-bottom: 1rem;
        background: var(--color-gray-violet);
        padding: 1rem;
        border-radius: 1rem;
        color: hsl(var(--color-primary-hue), 100%, var(--primary-darker-lightness));
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

        .img {
          width: 10%;
          height: 10%;
        }
      }
    }
  }
</style>
