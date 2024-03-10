import { hasProperty } from "hast-util-has-property";
import { headingRank } from "hast-util-heading-rank";
import { visit } from "unist-util-visit";

export default function get_linked_header() {
  return (tree) => {
    //get autolinked header and add class
    visit(tree, "element", (node) => {
      if (headingRank(node) && hasProperty(node, "id")) {
        node.properties.class = "article-header";
      }
    });
  };
}
