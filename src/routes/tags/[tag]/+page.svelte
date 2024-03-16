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
  <main>
    <p>Couldn't find any posts in the category "{data.tag}".</p>
    <p><a href="/tags"> タグ一覧 </a></p>
    <p><a href="/blog">Back to home</a></p>
  </main>
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
  a {
    color: var(--accent);
  }
</style>
