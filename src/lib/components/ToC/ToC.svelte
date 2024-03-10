<script lang="ts">
  import { onMount } from "svelte";
  // heading has level title and slug
  export let headings: { level: number; title: string; slug: string }[] = [];
  export let activeHeading = "";

  onMount(() => {
    //Highlight the current section in the table of contents
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeHeading = entry.target.id;
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px"
      }
    );
    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      observer.observe(element);
    });
  });
</script>

<aside class="toc">
  <div>
    <h4 class="toc-exclude">In this article</h4>
    <ul>
      {#each headings as heading}
        <li
          tabindex={heading.level}
          style:font-size="calc(1.3rem - {heading.level - 1} * 0.2rem)"
          style:margin-left="calc({heading.level - 2} * 1rem)"
          class:active={activeHeading === heading.slug}
        >
          <a href="#{heading.slug}">
            {heading.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</aside>

<style lang="postcss">
  @custom-media --medium (max-width: 1023px);
  @custom-media --small (max-width: 734px);
  aside {
    display: contents;
  }
  h2 {
    padding: 0;
  }
  div {
    padding: 52px 0 0 2px;
    grid-column: 5;
    grid-row: 2/6;
    top: 0;
    display: flow-root;
    position: sticky;
    & ul {
      list-style: none;
      margin: 0;
      padding: 0 0 0 8px;
      & li {
        margin-inline: 0;
        block-size: 32px;
        border-radius: var(--radius);
        position: relative;
        display: flex;
        align-items: center;

        /* &:hover {
          background-color: var(--layer);
        } */
        & a {
          display: inline-block;
          text-decoration: none;
          white-space: nowrap;
          font-size: 0.9rem;
          color: var(--color-text);
        }
      }
      & li.active {
        /*  background-color: var(--layer); */
        &::before {
          position: absolute;
          overflow: visible;
          top: calc(50% - 9px);
          inline-size: 5px;
          inset-inline-start: 0;
          block-size: 18px;
          content: "";
          left: -8px;
          width: 3px;
          background: var(--accent);
          border-radius: 6px;
        }
      }
    }
    @media (--medium) {
      padding: 0;
      grid-column: 3/5;
      position: static;
      top: auto;
      display: unset;
      grid-row: auto;
      & ul {
        & li {
          margin-inline: 0;
          block-size: 28px;
          box-sizing: content-box;
          position: static;
        }
        & li.active::before {
          display: none;
        }
      }
    }
  }
</style>
