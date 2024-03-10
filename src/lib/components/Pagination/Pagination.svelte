<script>
  import { postsPerPage } from "$lib/config";
  import { Button, Icon } from "$lib/components";

  export let currentPage = 1;
  export let totalPosts;
  export let path = "/archive/page";

  let pagesAvailable;
  $: pagesAvailable = Math.ceil(totalPosts / postsPerPage);
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
  {#if pagesAvailable > 1}
    <nav aria-label="Pagination navigation" class="pagination">
      <div class="button-container">
        {#if currentPage > 1}
          <Button href={`${path}/${currentPage - 1}`}>
            <div class="left">
              <Icon icon={"arrow-left"} />
            </div>
          </Button>
        {:else}
          <Button disabled={true}>
            <div class="left">
              <Icon icon={"arrow-left"} />
            </div>
          </Button>
        {/if}
      </div>
      <div>
        {currentPage}/{pagesAvailable}
      </div>
      <div class="button-container">
        {#if currentPage < pagesAvailable}
          <Button href={`${path}/${currentPage + 1}`}>
            <div class="rotate">
              <Icon icon={"arrow-left"} />
            </div>
          </Button>
        {:else}
          <Button disabled={true}>
            <div class="rotate">
              <Icon icon={"arrow-left"} />
            </div>
          </Button>
        {/if}
      </div>
    </nav>
  {/if}
{/key}

<style lang="postcss">
  nav {
    display: flex;
    gap: 4rem;
    align-items: center;
  }
  .button-container {
    display: inline-block;

    & > :global(.button) {
      width: 40px;
      height: 40px;
    }
  }
  .rotate {
    transform: rotate(180deg);
  }
</style>
