import { redirect } from "@sveltejs/kit";
import { postsPerPage } from "$lib/config";
import fetchPosts from "$lib/utilities/fetchPosts";
import fetchLength from "$lib/utilities/fetchLength";

export const load = async ({ params }) => {
  const page = params.page ? params.page : 1;
  const { tag } = params;

  if (page <= 1) {
    redirect(301, `/tags/${tag}`);
  }

  let offset = page * postsPerPage - postsPerPage;

  const { length } = await fetchLength({ tag, limit: -1 });
  const { posts } = await fetchPosts({ offset, page });
  const totalPosts = length;

  return {
    posts,
    page,
    tag,
    totalPosts
  };
};
