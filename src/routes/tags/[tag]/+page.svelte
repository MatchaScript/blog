<!-- Renders any page at /blog/category/* -->
<script>
  import { PostsList, Pagination } from "$lib/components";
  export let data;
</script>

<svelte:head>
  <title>Category: {data.tag}</title>
</svelte:head>

<h1>Blog category: {data.tag}</h1>

{#if data.posts.length}
  <PostsList posts={data.posts} />
  <div class="pagenation">
    <Pagination currentPage={1} totalPosts={data.total} path="/tags/{data.tag}" />
  </div>
{:else}
  <p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{data.tag}".</p>
  <p><a href="/tags"> タグ一覧 </a></p>
  <p><a href="/blog">Back to blog</a></p>
{/if}

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
