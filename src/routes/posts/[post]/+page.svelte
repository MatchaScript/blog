<script>
  export let data;
  import { ToC, ArticleHeader } from "$lib/components";
  import "../../../styles/code.postcss";
  import "../../../styles/posts.postcss";
  const url = `https://example.com/posts/${data.meta.slug}`;
</script>

<svelte:head>
  <!--<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />-->
  <!-- 
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} /> -->
  <!-- <meta property="og:image" content="https://example.com/image_path" /> -->
  <!--<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />-->
  <!-- <meta name="twitter:image" content="https://example.com/image_path" /> -->
</svelte:head>

<article class="post">
  <ArticleHeader
    tags={data.meta.tags}
    title={data.meta.title}
    date={data.meta.date}
    description={data.meta.description}
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
