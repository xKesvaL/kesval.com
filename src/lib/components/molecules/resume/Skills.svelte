<script lang="ts">
  import type { Skill } from '$lib';

  export let skills: Skill[];

  let frontEnd = skills.filter((s) => s.type === 'frontend');
  let backEnd = skills.filter((s) => s.type === 'backend');
  let others = skills.filter((s) => s.type === 'other');
</script>

<ul class="resume-skills">
  <li>
    Front-End
    <div class="tags">
      {#each frontEnd as tag}
        <span class="tag">{tag.name}</span>
      {/each}
    </div>
  </li>
  <li>
    Back-End
    <div class="tags secondary">
      {#each backEnd as tag}
        <span class="tag">{tag.name}</span>
      {/each}
    </div>
  </li>
  <li>
    Other
    <div class="tags tertiary">
      {#each others as tag}
        <span class="tag">{tag.name}</span>
      {/each}
    </div>
  </li>
</ul>

<style lang="scss">
  @use '$lib/scss/breakpoints.scss' as *;
  @use '$lib/scss/mixins' as *;

  .resume-skills {
    list-style: none;

    li {
      margin-block: 0.25rem;
    }

    .tags {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .tag {
        background: hsl(var(--color-primary-hue), 25%, var(--primary-lighter-lightness));
        border: 1px solid var(--color-primary);
        color: var(--color-text);

        border-radius: 0.25rem;
        display: inline-block;
        font-size: 0.75rem;
        white-space: nowrap;
        line-height: 2rem;
        margin: 0.125rem;
        padding: 0 0.5rem;
      }

      &.secondary {
        .tag {
          background: hsl(var(--color-secondary-hue), 25%, var(--primary-lighter-lightness));
          border: 1px solid var(--color-secondary);
        }
      }

      &.tertiary {
        .tag {
          background: hsl(var(--color-tertiary-hue), 25%, var(--primary-lighter-lightness));
          border: 1px solid var(--color-tertiary);
        }
      }
    }
  }
</style>
