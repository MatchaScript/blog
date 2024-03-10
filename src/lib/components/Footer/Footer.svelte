<script>
  import { ThemeToggle } from "$lib/components";
</script>

<footer>
  <div class="border" />
  <div class="toggle">
    <ThemeToggle />
  </div>
  <div class="content">
    <div class="copylight">
      <p>© 2022 matcha</p>
    </div>
    <div class="links">
      <a href="/privacy">Privacy Policy</a>
      <a href="https://twitter.com" target="_blank">Contact</a>
      <a href="https://github.com" target="_blank">Report issue</a>
    </div>
  </div>
</footer>

<style lang="postcss">
  footer {
    display: contents;
  }
  .border {
    grid-column: 3 / 6;
    border-bottom: 1px solid var(--outline);
  }
  .content {
    grid-column: 3 / 6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px var(--gap) 0;
  }
  .links {
    display: flex;
    gap: 16px;
  }
  a {
    text-decoration: none;
    color: var(--text);
  }
  p {
    margin-top: 0;
    margin-bottom: auto;
  }
  .copylight {
    z-index: 1;
    display: flex;
  }
  .toggle {
    grid-column: 3 / 6;
    margin: 0;
  }

  @media only screen and (--medium) {
    .content {
      flex-direction: column;
      align-items: normal;
    }
    p {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
</style>
