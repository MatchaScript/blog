<script>
  import themeStore from "./index";
  import { Icon, Button } from "$lib/components";
</script>

<div class="toggle">
  <label>
    <input type="radio" value="light" bind:group={$themeStore.theme} />
    <div class="text">Light</div>
  </label>
  <label>
    <input type="radio" value="dark" bind:group={$themeStore.theme} />
    <div class="text">Dark</div>
  </label>
  <label>
    <input type="radio" value="system" bind:group={$themeStore.theme} />
    <div class="text">Auto</div>
  </label>
</div>

<style lang="postcss">
  .toggle {
    border: 1px solid var(--outline);
    border-radius: 12px;
    padding: 1px;
    display: inline-flex;
  }
  input[type="radio"] {
    appearance: none;
    padding: 0;
    margin: 0;
  }
  input:checked + .text {
    background-color: var(--accent);
    color: var(--base);
  }
  .text {
    padding: 0 0.5rem;
    border-radius: 8px;
    color: var(--text);
  }
  label {
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    padding: 1px;
    width: 100%;
  }
</style>
