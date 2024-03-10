<script lang="ts">
  export let posts = null;
  import { Card } from "$lib/components";
  const options = [{ size: "small" }, { size: "medium" }, { size: "large" }];
  const sizeSelect = (i: number) => {
    return i == 0
      ? options[2]
      : 1 <= i && i <= 4
      ? options[1]
      : 5 <= i && i <= 10
      ? options[0]
      : options[2];
  };
  const lazy = (i: number) => {
    return 0 == i ? "fist" : "";
  };
</script>

<ul class="posts-list">
  {#each posts as post, i}
    <li>
      <Card {post} variant={sizeSelect(i).size} lazy={lazy(i)} />
    </li>
  {/each}
</ul>

<style lang="postcss">
  li {
    list-style: none;
    display: contents;
  }
  .posts-list {
    display: grid;
    padding: 0;
    margin: 0;
    gap: var(--gap);

    grid-template-columns: repeat(6, 1fr);
  }
</style>
