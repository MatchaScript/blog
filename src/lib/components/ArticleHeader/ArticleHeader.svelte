<script lang="ts">
  import { Share, Button } from "$lib/components";
  export let title;
  export let date;
  export let description;
  export let url;
  export let tags = "";
  const formatDate = (dt) => {
    let date = new Date(dt);
    var y = date.getFullYear();
    var m = ("00" + (date.getMonth() + 1)).slice(-2);
    var d = ("00" + date.getDate()).slice(-2);
    return y + "年" + m + "月" + d + "日";
  };
</script>

<div class="container">
  <div class="info" />
  <div class="item">
    <div class="date">{formatDate(date)}</div>
    <div class="tags">
      {#each tags as t}
        <Button variant="outline" href="/tags/{t}">{t}</Button>
      {/each}
    </div>
    <h1>{title}</h1>
    <div>{description}</div>

    <div>
      <Share {title} {url} />
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
    display: contents;
  }
  .item {
    grid-column: 3/5;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
  .info {
    grid-column: 4/5;
  }
  .date {
  }
  .tags {
    display: flex;
    gap: 4px;
  }
</style>
