<script lang="ts">
  export let isOnTop = true;
  import { Icon } from "$lib/components";
  const clickHandler = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };
</script>

<button
  aria-hidden={isOnTop ? "true" : "false"}
  class="container button style-acrylic"
  on:click={clickHandler}
  disabled={isOnTop ? true : false}
>
  <Icon icon="arrow" />
</button>

<style lang="postcss">
  .container {
    content-visibility: none;
    position: fixed;
    right: 4vw;
    bottom: 2vh;
    &[aria-hidden="true"] {
      opacity: 0;
      cursor: default;
      content-visibility: hidden;
    }
  }

  .style-acrylic {
    border-radius: calc(var(--radius) / 2);
    border: 1px solid var(--stroke);
    box-shadow: var(--shadow);
    width: 32px;
    height: 32px;
    display: grid;
    place-content: center;
    backdrop-filter: var(--filter);
    background-color: var(--acrylic);
    mix-blend-mode: luminosity;
    &:hover {
      border: 1px solid var(--outline);
    }
  }
</style>
