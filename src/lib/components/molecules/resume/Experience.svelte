<script lang="ts">
  import Circle from '$lib/icons/Circle.svelte';
  import Pin from '$lib/icons/Pin.svelte';
  import { experiences } from '$lib/utils/data';
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
          border-left: 2px dashed var(--color-primary);
          width: 2px;
          flex: 1;
        }

        .time {
          color: hsl(var(--color-text-hue), 0%, var(--primary-dark-lightness));
          width: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          word-wrap: none;
          white-space: nowrap;
          font-size: 0.75rem;

          :global(svg) {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-primary);
          }
        }
      }

      &.current {
        .title {
          margin-top: 1.5rem;
        }

        .time {
          :global(svg) {
            padding: 0.25rem;
            background: var(--color-bg-card);
            border: 1px solid var(--color-primary);
            border-radius: 50%;
            fill: var(--color-primary);
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
      }

      .title {
        div {
          margin-bottom: -0.5rem;
          .company-name {
            font-size: 1.25rem;
            font-weight: 600;
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
          color: hsl(var(--color-text-hue), 0%, var(--primary-dark-lightness));
          fill: hsl(var(--color-text-hue), 0%, var(--primary-dark-lightness));
          font-size: 0.875rem;
        }
      }
    }
  }
</style>
