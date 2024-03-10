<script>
  import { Button, Icon } from "$lib/components";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>
<main>
  <h2 class="top">About</h2>
</main>

<style lang="postcss">
  .top {
    padding-top: var(--gap);
  }
  .social {
    display: flex;
    gap: 4px;
  }
  p {
    line-height: 1.5;
    margin: 0;
  }
  .button-container {
    display: inline-block;
    &:hover > :global(.button) {
      color: var(--accent);
    }
    & > :global(.button) {
      width: 40px;
      height: 40px;
    }
  }
</style>
