import { postsPerPage } from "$lib/config";
import { slugFromPath } from "$lib/utilities/slugFromPath";

const fetchPosts = async ({ offset = 0, limit = postsPerPage, tag = "" } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("$lib/posts/*/*.{md,svx,svelte.md}")).map(
      async ([path, resolver]) => {
        const { metadata } = await resolver();
        const slug = slugFromPath(path);
        return { ...metadata, slug };
      }
    )
  );

  let sortedPosts = posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  if (tag) {
    sortedPosts = sortedPosts.filter((post) => post.tags.includes(tag));
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }

  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }

  sortedPosts = sortedPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    coverImage: post.coverImage,
    date: post.date,
    tags: post.tags
  }));

  return {
    posts: sortedPosts
  };
};

export default fetchPosts;
