<script lang="ts">
  export let variant: "large" | "medium" | "small" = "medium";
  export let post = null;
  export let lazy = auto;
  import { Image } from "$lib/components";
  const formatDate = (dt) => {
    let date = new Date(dt);
    var y = date.getFullYear();
    var m = ("00" + (date.getMonth() + 1)).slice(-2);
    var d = ("00" + date.getDate()).slice(-2);
    return y + "年" + m + "月" + d + "日";
  };
</script>

<a class="card style-{variant}" sveltekit:prefetch href="/posts/{post.slug}">
  <div class="media">
    <Image
      srcset={post.coverImage}
      slug="/posts/{post.slug}"
      width={post.coverImage.origin.width}
      height={post.coverImage.origin.height}
      alt={post.title}
      {lazy}
    />
  </div>
  <div class="description">
    <div class="title">{post.title}</div>
    <div class="date">{formatDate(post.date)}</div>
  </div>
</a>

<style lang="postcss">
  @custom-media --medium (max-width: 1023px);
  @custom-media --small (max-width: 734px);

  .card {
    border-radius: var(--radius);
    background-color: var(--layer);
    cursor: pointer;
    display: grid;
    box-shadow: var(--shadow);
    border: 1px solid var(--stroke);
    overflow: hidden;
    text-decoration: none;
    color: var(--text);
    transition: all 0.5s cubic-bezier(0.17, 0.935, 0.305, 1);
    &:hover {
      border: 1px solid var(--outline);
    }
    &:active {
      box-shadow: none;
      background-color: var(--layer);
    }
  }
  .media {
    overflow: hidden;
  }
  .description {
    display: flex;
    padding: 1.7rem;
    justify-content: space-between;
    flex-direction: column;
  }
  .title {
    width: 100%;
    font-size: var(--head4);
    font-weight: 600;
  }
  .date {
    font-weight: 600;
    font-size: var(--body2);
    margin-top: 12px;
    color: var(--text3);
    @media only screen and (--medium) {
      margin-top: 8px;
    }
  }

  .style-large {
    grid-row: span 1;
    grid-column: span 6;
    grid: auto-flow / 2fr 1fr;
    height: 365px;
    @media only screen and (--medium) {
      height: 250px;
    }
    @media only screen and (--small) {
      grid-column: span 6;
      grid: 1fr auto / auto-flow;
      height: 365px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .style-medium {
    grid-row: span 1;
    grid-column: span 3;
    grid: 1fr 1fr / auto-flow;
    height: 476px;
    @media only screen and (--medium) {
      grid-column: span 3;
      height: 355px;
    }
    @media only screen and (--small) {
      grid-column: span 6;
      grid: 1fr auto / auto-flow;
      height: 365px;
    }
  }

  .style-small {
    grid-row: span 1;
    grid-column: span 2;
    grid: 1fr 1fr / auto-flow;
    height: 365px;
    @media only screen and (--medium) {
      grid-column: span 3;
      height: 355px;
    }
    @media only screen and (--small) {
      grid-column: span 6;
      grid: 1fr auto / auto-flow;
      height: 365px;
    }
  }
</style>
