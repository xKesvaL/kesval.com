<script lang="ts">
  import Circle from '$lib/icons/IconCircle.svelte';
  import Pin from '$lib/icons/IconPin.svelte';
  import type { Company } from '$lib';

  export let experiences: Company[];
</script>

<div class="resume-experience">
  {#each experiences as experience}
    <div class="experience" class:current={experience.current}>
      <div class="timeline">
        <div class="time">
          {#if experience.current}Current{/if}
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
          border-left: 2px dashed var(--color-primary-500);
          width: 2px;
          flex: 1;
        }

        .time {
          color: var(--color-neutral-800);
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
            color: var(--color-primary-500);
          }
        }
      }

      &.current {
        .title {
          margin-top: 1.75rem;
        }

        .time {
          :global(svg) {
            padding: 0.25rem;
            background: var(--color-base-200);
            border: 1px solid var(--color-primary-500);
            border-radius: 50%;
            fill: var(--color-primary-500);
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
      }

      .title {
        margin-top: 0.25rem;
        div {
          margin-bottom: -0.5rem;
          .company-name {
            h3 {
              font-size: var(--fs-600);
            }
            font-weight: $font-weight-semi-bold;
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
          color: var(--color-neutral-700);
          fill: var(--color-neutral-700);
          font-size: var(--fs-200);
        }
      }
    }
  }
</style>
