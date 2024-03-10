import fetchPosts from "$lib/utilities/fetchPosts";

export const load = async () => {
  const options = { limit: 11 };
  const { posts } = await fetchPosts(options);
  return { posts };
};
