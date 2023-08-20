<script lang="ts">
  import type { Skill } from '$lib';
  import { capitalizeFirstLetter } from '$lib/utils/functions';
  import { t } from 'svelte-i18n';

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
    {capitalizeFirstLetter($t('std.other'))}
    <div class="tags tertiary">
      {#each others as tag}
        <span class="tag">{tag.name}</span>
      {/each}
    </div>
  </li>
</ul>

<style lang="scss">
  .resume-skills {
    list-style: none;

    li {
      margin-block: 0.25rem;
    }

    .tags {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      .tag {
        background: rgba(var(--primary-200-rgb), 0.4);
        border: 1px solid var(--primary-500);
        color: var(--base-900);

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
          background: rgba(var(--secondary-200-rgb), 0.4);
          border: 1px solid var(--secondary-500);
        }
      }

      &.tertiary {
        .tag {
          background: rgba(var(--success-200-rgb), 0.4);
          border: 1px solid var(--success-500);
        }
      }
    }
  }
</style>
