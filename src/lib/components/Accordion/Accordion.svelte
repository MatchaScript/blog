<script lang="ts">
  export let summary: string = "";
  export let open = false;
</script>

<details bind:open>
  <summary>{summary}</summary>
  <div class="slot-container">
    <slot />
  </div>
</details>

<style lang="postcss">
  details {
    border: 1px solid var(--stroke);
    border-radius: var(--radius);
  }
  summary {
    background-color: var(--layer);
    border-radius: var(--radius) var(--radius) 0 0;
    padding: 1rem;
  }
</style>
