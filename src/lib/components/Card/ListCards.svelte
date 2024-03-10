<script lang="ts">
  export let posts = null;
  import Card from "./Card.svelte";
</script>

<ul class="cards">
  {#each posts as post, i}
    <li>
      <Card {post} variant="medium" />
    </li>
  {/each}
</ul>

<style lang="postcss">
  li {
    list-style: none;
    display: contents;
  }
  .cards {
    display: grid;
    padding: 0;
    margin: 0;
    gap: var(--gap);

    grid-template-columns: repeat(6, 1fr);
  }
</style>
