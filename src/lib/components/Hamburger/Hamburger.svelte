<script lang="ts">
  import { Icon, Button, Accordion } from "$lib/components";
</script>

<ul>
  <li>
    <details>
      <summary class="hamburger button style-stealth">
        <Icon icon="navi" />
      </summary>
      <nav class="menu">
        <div>
          <a class="button" href="/archive">Archive</a>
          <a class="button" href="/about">About</a>
        </div>
      </nav>
    </details>
  </li>
  <li class="link-item">
    <a class="button" href="/archive">Archive</a>
  </li>
  <li class="link-item">
    <a class="button" href="/about">About</a>
  </li>
</ul>

<style lang="postcss">
  ul {
    display: flex;
    gap: var(--gap);
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    margin: 0;
  }
  details {
    display: none;

    &[open] summary::before {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 4;
      display: block;
      cursor: default;
      background: transparent;
    }
    &[open] nav {
      animation-name: slide;
      animation-duration: 0.3s;
      animation-timing-function: ease-in-out;
      transform-origin: left;
    }
  }
  summary {
    list-style: none;
    padding: 8px 8px;
    width: 18px;
    height: 18px;
    &::-webkit-details-marker {
      display: none;
    }
  }
  h3 {
    border-bottom: 1px solid var(--outline);
  }
  a {
    display: flex;
    height: 2rem;
    margin: 4px 0;
    cursor: default;
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: calc(var(--radius) / 2);
    text-decoration: none;
    color: var(--text);
    &:hover {
      background-color: var(--layer);
      border: 1px solid var(--stroke);
    }
  }
  .style-stealth {
    transition: all 0.5s cubic-bezier(0.17, 0.935, 0.305, 1);
    display: grid;
    place-content: center;
    border: 1px solid transparent;
    border-radius: calc(var(--radius) / 2);
    &:hover {
      background-color: var(--layer);
      border: 1px solid var(--stroke);
    }
  }

  nav {
    display: flex;

    padding-block-end: 12px;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid var(--outline);
    background-color: var(--mica);
    backdrop-filter: var(--filter);
    border-radius: var(--radius);
    overflow: auto;
    position: absolute;
    top: 56px;
    right: 0;
    padding-inline: 12px;
    z-index: 5;
    inline-size: 8rem;
    list-style: none;
  }

  @media only screen and (--small) {
    .link-item {
      display: none;
    }
    details {
      display: block;
    }
  }
</style>
