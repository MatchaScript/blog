<script lang="ts">
  import { Hamburger } from "$lib/components";
  import { siteTitle } from "$lib/config";
  export let isOnTop = true;
</script>

<header>
  <div class="border {isOnTop ? 'short' : 'long'}" />
  <div class="bg {isOnTop ? '' : 'acrylic'}" />
  <div class="title">
    <a href="/">{siteTitle}</a>
  </div>
  <div class="header-content">
    <Hamburger />
  </div>
</header>

<style lang="postcss">
  @custom-media --medium (max-width: 1023px);
  @custom-media --small (max-width: 734px);

  header {
    display: contents;
    & div {
      position: sticky;
      top: 0;
    }
    & .short {
      grid-area: 1/3/2/6;
    }
    & .title {
      font-size: var(--head4);
      grid-area: 1/3/2/5;
      display: flex;
      z-index: 4;
      & a {
        text-decoration: none;
        white-space: nowrap;
        color: var(--text);
        align-self: center;
      }
    }
    & .header-content {
      grid-area: 1/5/2/6;
      z-index: 3;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    & .border {
      border-bottom: 1px solid var(--outline);

      z-index: 2;
    }
    & .long {
      grid-area: 1/1/2/8;
      transition: 0.5s cubic-bezier(0.3, 0, 0.5, 1);
      box-shadow: var(--shadow);
    }
    & .short {
      grid-area: 1/3/2/6;
    }
    & .bg {
      grid-area: 1/1/2/8;
      transition: background-color 0.4s cubic-bezier(0.3, 1, 0.3, 1);
    }
    & .acrylic {
      backdrop-filter: var(--filter);
      background-color: var(--acrylic);
      mix-blend-mode: luminosity;
    }
    @media only screen and (--medium) {
      & .title {
        grid-area: 1/2/2/4;
      }
      & .header-content {
        grid-area: 1/4/2/7;
      }
      & .short {
        grid-area: 1/1/2/9;
      }
    }
  }
</style>
