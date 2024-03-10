<script lang="ts">
  import { Button, Icon } from "$lib/components";
  export let title: string = "";
  export let description: string = "";
  export let url: string = "";
  const twitter = encodeURI(`https://twitter.com/intent/tweet/?text=${title}&url=${url}`);
  const facebook = encodeURI(`https://facebook.com/sharer/sharer.php?u=${url}`);
  const shareButton = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: url
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      // fallback
    }
  };
</script>

<div>
  <div class="button-container">
    <Button external={true} href={twitter} variant="stealth">
      <Icon icon="twitter" />
    </Button>
  </div>
  <div class="button-container">
    <Button external={true} href={facebook} variant="stealth">
      <Icon icon="facebook" />
    </Button>
  </div>
  <div class="button-container">
    <Button variant="stealth" on:click={shareButton}>
      <Icon icon="share" />
    </Button>
  </div>
</div>

<style lang="postcss">
  .button-container {
    display: inline-block;
    &:hover > :global(.button) {
      color: var(--accent);
    }
    & > :global(.button) {
      width: 40px;
      height: 40px;
    }
  }
</style>
