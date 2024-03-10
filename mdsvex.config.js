import { defineMDSveXConfig as defineConfig } from "mdsvex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCustomTagHeadings from "./scripts/rehype-customtag-headings.js";
import remarkGetHeadings from "./scripts/remark-get-headings.js";
import coverImage from "./scripts/remark-cover-image.js";
import optimizeImage from "./scripts/remark-image.js";

const config = defineConfig({
  layout: {
    _: "src/lib/components/PostLayout/Nomal.svelte"
  },
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool"
  },

  remarkPlugins: [optimizeImage, remarkGetHeadings, coverImage],
  rehypePlugins: [
    rehypeSlug,
    rehypeCustomTagHeadings,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        content: {
          type: "element",
          tagName: "span",
          properties: { className: ["heading-link"] },
          children: [
            {
              type: "element",
              tagName: "svg",
              properties: {
                className: ["icon"]
              },
              children: [
                {
                  type: "element",
                  tagName: "use",
                  properties: {
                    "xlink:href": "#link"
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  ]
});

export default config;
