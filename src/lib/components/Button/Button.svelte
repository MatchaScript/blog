<script lang="ts">
  export let variant: "standard" | "accent" | "outline" | "stealth" | "acrylic" = "standard";
  export let href = "";
  export let external = false;
  export let disabled = false;
  export let element: HTMLButtonElement | HTMLAnchorElement = null;
</script>

{#if href && external}
  <a
    {href}
    class="button style-{variant}"
    target="_blank"
    rel="noopener"
    bind:this={element}
    disabled={disabled ? true : false}
  >
    <slot />
  </a>
{:else if href}
  <a {href} class="button style-{variant}" bind:this={element} disabled={disabled ? true : false}>
    <slot />
  </a>
{:else}
  <button
    class="button style-{variant}"
    bind:this={element}
    on:click
    disabled={disabled ? true : false}
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  /* "standard" | "accent" | "outline" | "stealth" */

  .button {
    fill: currentColor;
    border: 1px solid var(--outline);
    transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    border-radius: calc(var(--radius) / 2);
    padding: 4px;
    text-decoration: none;
    color: var(--text);
    &:active {
      box-shadow: none;
    }
    &:disabled {
      box-shadow: none;
      color: var(--outline);
    }
  }

  .style-standard {
    background-color: var(--layer);
    border: 1px solid var(--outline);
    box-shadow: var(--shadow);
    border-radius: calc(var(--radius) / 2);
    display: grid;
    place-content: center;
    &:hover {
      background-color: var(--layer);
    }
    &:active {
      box-shadow: none;
    }
  }
  .style-stealth {
    display: grid;
    background-color: transparent;
    place-content: center;
    border: 1px solid transparent;
    border-radius: calc(var(--radius) / 2);
    &:hover {
      background-color: var(--layer);
      border: 1px solid var(--stroke);
    }
  }
  a {
    display: block;
    margin: 0em;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
  }
</style>
