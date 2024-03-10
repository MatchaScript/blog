import GithubSlugger from "github-slugger";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export default function get_headings() {
  const slugger = new GithubSlugger();
  return async function transformer(tree, vFile) {
    vFile.data.headings = [];
    visit(tree, "heading", (node) => {
      vFile.data.headings.push({
        level: node.depth,
        title: toString(node),
        slug: slugger.slug(toString(node))
      });
    });
    slugger.reset();
    if (!vFile.data.fm) vFile.data.fm = {};
    vFile.data.fm.headings = vFile.data.headings;
  };
}
