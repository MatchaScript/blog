import fetchPosts from "$lib/utilities/fetchPosts";
import fetchLength from "$lib/utilities/fetchLength";

export const load = async ({ params }) => {
  const tag = params.tag;
  const options = { tag };
  const count = { tag, limit: -1 };

  const { posts } = await fetchPosts(options);
  const { length } = await fetchLength(count);
  const total = length;

  return {
    posts,
    tag,
    total
  };
};
