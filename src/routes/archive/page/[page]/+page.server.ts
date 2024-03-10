import { postsPerPage } from "$lib/config";
import fetchPosts from "$lib/utilities/fetchPosts";
import fetchLength from "$lib/utilities/fetchLength";
import { redirect, error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const page = params.page ? params.page : 1;

  // Keeps from duplicationg the blog index route as page 1
  if (page <= 1) {
    redirect(301, "/archive");
  }

  let offset = page * postsPerPage - postsPerPage;
  const options = { limit: -1 };
  const totalRes = await fetchLength(options);
  const total = totalRes.length;
  const { posts } = await fetchPosts({ offset, page });

  return {
    posts,
    page,
    totalPosts: total
  };
};
