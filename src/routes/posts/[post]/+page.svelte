<script>
  export let data;
  import { ToC, ArticleHeader } from "$lib/components";
  import { siteTitle, siteLink } from "$lib/config";
  import "../../../styles/code.postcss";
  import "../../../styles/posts.postcss";
  const url = `${siteLink}/posts/${data.meta.slug}`;
  const title = `${data.meta.title} | ${siteTitle}`;
  const thumb = `${siteLink}/${data.meta.slug}/${data.meta.coverImage.origin.name}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta data-key="description" name="description" content={data.meta.description} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={data.meta.description} />
  <meta name="twitter:description" content={data.meta.description} />
  <meta property="og:image" content={thumb} />
  <meta property="og:image:width" content={data.meta.coverImage.origin.width} />
  <meta property="og:image:height" content={data.meta.coverImage.origin.height} />
  <meta name="twitter:image" content={thumb} />
</svelte:head>

<article class="post">
  <ArticleHeader
    tags={data.meta.tags}
    title={data.meta.title}
    date={data.meta.date}
    description={data.meta.description}
    slug={data.meta.slug}
    images={data.meta.coverImage}
    {url}
  />
  <ToC headings={data.meta.headings} />

  {@html data.PostContent}
</article>

<style lang="postcss">
  article {
    display: contents;
  }
  article > :global(*) {
    grid-column: 3/5;
  }
</style>
