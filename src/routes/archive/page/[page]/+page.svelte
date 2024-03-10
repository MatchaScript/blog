<!-- This file handles any /blog/page/x route for pagination -->
<script>
  import { Pagination, PostsList } from "$lib/components";
  import { postsPerPage, siteDescription } from "$lib/config";

  export let data;
  const { page, totalPosts, posts } = data;

  $: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  $: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
  <title>Blog - page {page}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts.length}
  <h1>Posts {lowerBound}-{upperBound} of {totalPosts}</h1>
  <PostsList {posts} />
  <div class="pagenation">
    <Pagination currentPage={page} {totalPosts} />
  </div>
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no posts to show here.</p>

  <a href="/blog">Back to blog</a>
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
