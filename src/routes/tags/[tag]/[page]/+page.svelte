
<script>
  import { PostsList, Pagination } from "$lib/components";
  import { siteDescription, postsPerPage } from "$lib/config";

  export let data;
  const { page, tag, totalPosts, posts } = data;

  $: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  $: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
  <title>Blog category {tag} - page {page}</title>
  <meta data-key="description" name={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts && posts.length}
  <h1>
    Category: {tag}
    <br />
    <small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
  </h1>
  <PostsList {posts} />
  <div class="pagenation">
    <Pagination currentPage={page} {totalPosts} path="/tags/{tag}" />
  </div>
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no posts to show here.</p>

  <a href="/blog">Back to blog</a>
{/if}

<style lang="postcss">
  h1,
  p,
  a {
    grid-column: 3/6;
  }
  .pagenation {
    margin-top: 48px;
    grid-column: 3/6;
    display: flex;
    justify-content: center;
  }
</style>
