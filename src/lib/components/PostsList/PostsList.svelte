<script lang="ts">
  export let posts = [];
  import { Image } from "$lib/components";
</script>

<ul class="posts-list">
  {#each posts as post, i}
    <li class={i == 0 ? "first" : ""}>
      <article>
        <a href="/posts/{post.slug}">
          <div class="picture">
            <Image
              srcset={post.coverImage}
              slug="/posts/{post.slug}"
              width={post.coverImage.origin.width}
              height={post.coverImage.origin.height}
              alt={post.title}
              lazy={i < 3 ? "eager" : "lazy"}
            />
          </div>
          <div class="text">
            <h2>
              {post.title}
            </h2>
            <p>{post.description}</p>
          </div>
        </a>
      </article>
    </li>
  {/each}
</ul>

<style lang="postcss">
  @custom-media --medium (max-width: 1023px);
  @custom-media --small (max-width: 734px);
  li {
    list-style: none;
    grid-column: 3/6;
    padding: 0 0 var(--gap) 0;
    border-bottom: 1px solid var(--outline);

    @media only screen and (--small) {
      grid-column: 2/7;
    }
  }
  .first {
    padding: var(--gap) 0 var(--gap) 0;
    border-top: 1px solid var(--outline);
  }

  .posts-list {
    display: contents;
    padding: 0;
    margin: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  a {
    display: flex;
    gap: 1rem;
    text-decoration: none;
    color: var(--text);
    justify-content: space-between;
    align-items: center;
  }
  .picture {
    flex: 1;
    width: auto;
    height: 150px;
    @media only screen and (--small) {
      height: 105px;
      width: 105px;
      flex: none;
    }
  }
  .text {
    flex: 3;
  }
</style>
