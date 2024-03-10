import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  try {
    const post = await import(`../../../lib/posts/${params.post}/index.svelte.md`);
    return {
      PostContent: post.default.render().html,
      meta: { ...post.metadata, slug: params.post }
    };
  } catch (err) {
    error(404, err);
  }
};
