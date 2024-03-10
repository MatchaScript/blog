import fetchPosts from "$lib/utilities/fetchPosts";
import { postsPerPage } from "$lib/config";

const fetchLength = async ({ offset = 0, limit = postsPerPage, tag = "" } = {}) => {
  const { posts } = await fetchPosts({ offset, limit, tag });

  return { length: posts.length };
};

export default fetchLength;
