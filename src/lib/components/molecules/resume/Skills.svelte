<ul class="resume-skills">
  <li>
    Front-End
    <div class="tags">
      <span class="tag">React</span>
      <span class="tag">Svelte</span>
      <span class="tag">NextJS</span>
      <span class="tag">TypeScript</span>
      <span class="tag">PWAs</span>
    </div>
  </li>
  <li>
    Back-End
    <div class="tags secondary">
      <span class="tag">NodeJS</span>
      <span class="tag">MongoDB</span>
      <span class="tag">MariaDB</span>
    </div>
  </li>
  <li>
    Other
    <div class="tags tertiary">
      <span class="tag">Photoshop</span>
      <span class="tag">Premiere Pro</span>
      <span class="tag">Excel</span>
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
