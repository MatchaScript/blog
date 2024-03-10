<script>
  import { Pagination, PostsList } from "$lib/components";
  import { siteDescription } from "$lib/config";
  export let data;
</script>

<svelte:head>
  <title>Archive</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1>Archive</h1>
<PostsList posts={data.posts} />
<div class="pagenation">
  <Pagination currentPage={1} totalPosts={data.total} />
</div>

<style lang="postcss">
  h1 {
    grid-column: 3/6;
  }
  .pagenation {
    margin-top: 48px;
    grid-column: 3/6;
    display: flex;
    justify-content: center;
  }
</style>
