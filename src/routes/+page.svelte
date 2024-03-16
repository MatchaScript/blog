<script>
  export let data;
  import { TopPage, Button } from "$lib/components";
  import { siteTitle, siteDescription } from "$lib/config";
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<main>
  <h1>Welcome to SvelteKit</h1>
  <p>
    Visit
    <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>

  <TopPage posts={data.posts} />
  <div class="button-container">
    <Button href={"/archive"}>View Archive</Button>
  </div>
</main>

<style lang="postcss">
  .button-container {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    height: 42px;
    gap: 16px;
  }
</style>
