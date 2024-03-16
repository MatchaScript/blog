<script lang="ts">
  import { Share, Button, Image } from "$lib/components";
  export let title;
  export let date;
  export let description;
  export let url;
  export let slug;
  export let images;
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
    <div class="media">
      <Image
        srcset={images}
        slug="/posts/{slug}"
        width={images.origin.width}
        height={images.origin.height}
        alt={title}
        lazy="eager"
      />
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
    display: contents;
  }
  .media {
    margin: 4px 4px var(--gap) 4px;
    overflow: hidden;
    border-radius: var(--radius);
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
    margin-top: 2px;
    display: flex;
    gap: 4px;
  }
</style>
