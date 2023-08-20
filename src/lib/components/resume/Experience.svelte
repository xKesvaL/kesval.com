<script lang="ts">
  import Circle from '$lib/icons/IconCircle.svelte';
  import Pin from '$lib/icons/IconPin.svelte';
  import type { Company } from '$lib';
  import { json, t } from 'svelte-i18n';
  import { capitalizeFirstLetter } from '$lib/utils/functions';

  let experiences = [] as Company[];
  $: experiences = $json('resume.experiences') as Company[];
</script>

<div class="resume-experience">
  {#each experiences as experience}
    <div class="experience" class:current={experience.current}>
      <div class="timeline">
        <div class="time">
          {#if experience.current}{capitalizeFirstLetter($t('std.current'))}{/if}
          <Circle />
          {experience.timeframe.split(' ')[0]}
        </div>
        <div class="line" />
      </div>
      <div class="content">
        <div class="title">
          <div>
            <span class="company-name">
              <h3>{experience.name}</h3>
            </span>
          </div>
          <small>
            {experience.position} |
            <span class="icon"><Pin /></span>
            {experience.location}
          </small>
        </div>
        <p>
          {experience.description}
        </p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  @use '$design' as *;

  .resume-experience {
    .experience {
      display: flex;
      gap: 0.5rem;

      .timeline {
        width: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: -1.25rem;

        .line {
          border-left: 2px dashed var(--primary-500);
          width: 2px;
          flex: 1;
        }

        .time {
          color: var(--base-800);
          width: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          word-wrap: break-word;
          white-space: nowrap;
          font-size: var(--fs-200);

          :global(svg) {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--primary-500);
          }
        }
      }

      &.current {
        .title {
          margin-top: 1.45rem;
        }

        .time {
          :global(svg) {
            padding: 0.25rem;
            background: var(--base-200);
            border: 1px solid var(--primary-500);
            border-radius: 50%;
            fill: var(--primary-500);
          }
        }
      }

      &:not(:last-child) {
        padding-bottom: 1.5rem;
      }

      &:last-child {
        .timeline {
          .line {
            display: none;
          }
        }
      }

      .content {
        flex: 1;
        width: fit-content;

        p {
          font-size: var(--fs-300);

          @include mq(md) {
            font-size: var(--fs-400);
          }
        }
      }

      .title {
        margin-top: -0.15rem;
        div {
          margin-bottom: -0.2rem;
          .company-name {
            h3 {
              font-size: var(--fs-600);

              @include mq(md) {
                font-size: var(--fs-700);
              }
            }
            font-weight: var(--fw-semi-bold);
          }
        }
        .icon {
          display: inline-block;

          :global(svg) {
            width: 0.75rem;
            height: 0.75rem;
          }
        }

        small {
          color: var(--base-700);
          fill: var(--base-700);
          font-size: var(--fs-200);
        }
      }
    }
  }
</style>
