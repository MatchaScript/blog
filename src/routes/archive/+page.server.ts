import fetchPosts from "$lib/utilities/fetchPosts";
import fetchLength from "$lib/utilities/fetchLength";

export const load = async () => {
  const options = { limit: -1 };
  const { posts } = await fetchPosts();

  const totalRes = await fetchLength(options);
  const total = totalRes.length;

  return { posts, total };
};
