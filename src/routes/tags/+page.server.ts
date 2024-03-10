import fetchPosts from "$lib/utilities/fetchPosts";

export const load = async () => {
  const options = { limit: -1 };
  const { posts } = await fetchPosts(options);

  let uniqueCategories = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (uniqueCategories.hasOwnProperty(tag)) {
        uniqueCategories[tag].count += 1;
      } else {
        uniqueCategories[tag] = {
          title: tag,
          count: 1
        };
      }
    });
  });

  const sortedUniqueCategories = Object.values(uniqueCategories).sort((a, b) => a.title > b.title);

  return {
    uniqueCategories: sortedUniqueCategories
  };
};
