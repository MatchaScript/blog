<script>
  import "../app.postcss";
  import { Header, BackToTop, Intersection, Footer, Sprite, Theme } from "$lib/components";
  let intersect = true;
  function ontop(event) {
    intersect = event.detail.intersecting;
  }
</script>

<Theme />
<Sprite />

<div class="scroll-detector" aria-hidden="true">
  <Intersection createevent={true} on:intersecting={ontop} />
</div>
<Header isOnTop={intersect} />
<BackToTop isOnTop={intersect} />
<slot />

<Footer />

<style lang="postcss">
  @custom-media --medium (max-width: 1023px);
  @custom-media --small (max-width: 734px);
  .scroll-detector {
    position: absolute;
    top: 0;
  }
  :global(main) {
    display: contents;
    content-visibility: auto;
  }
  :global(main) > :global(*) {
    grid-column: 3 / 6;
    @media only screen and (--small) {
      grid-column: 4;
    }
  }
</style>
