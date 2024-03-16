<script>
  import { page } from "$app/stores";
</script>

<main>
  <h1>{$page.status} {$page.error.message}</h1>
  <a href="/">Back to home</a>
  <div class="blank" />
</main>

<style lang="postcss">
  h2,
  h1 {
    margin-top: calc(var(--gap) * 2);
    text-align: center;
  }
  a {
    text-align: center;
    margin-top: var(--gap);
    color: var(--accent);
  }
  .blank {
    height: 25vh;
  }
</style>
