import path from "path";
import { hasProperty } from "hast-util-has-property";
import { visit, SKIP } from "unist-util-visit";
import { isElement } from "hast-util-is-element";
import imageOptimize from "./image-optimizer.js";
import url from "url";
import { type } from "os";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function remarkImage() {
  return async function processer(tree, vFile) {
    const postDir = vFile.filename.split("index.svelte.md")[0];
    const distPath = vFile.filename.split("lib")[1].split("index.svelte.md")[0];
    const images = [];
    const promises = [];
    visit(tree, (node) => {
      if (node.type === "image") {
        images.push(node);
      }
    });
    images.forEach((node) => {
      const image = node.url;
      const extension = path.extname(image);
      const basename = path.basename(image, extension);
      const imagePath = path.resolve(postDir, image);
      const imageDir = path.join(__dirname, "../static", distPath);
      const promise = imageOptimize(imagePath, imageDir).then((images) => {
        const alt = hasProperty(node, "alt") ? node.alt : basename;
        const rawHtml = createAst(images, distPath, alt);
        node.type = "html";
        node.value = rawHtml;
      });
      promises.push(promise);
    });
    await Promise.all(promises);
  };
}

const createAst = (images, distPath, alt) => {
  const imageset = { avif: "", webp: "", jpeg: "", origin: "" };
  images.sizes.forEach((size) => {
    imageset.avif += `${distPath}${images[size].avif} ${size}w,`;
    imageset.webp += `${distPath}${images[size].webp} ${size}w,`;
    imageset.jpeg += `${distPath}${images[size].jpeg} ${size}w,`;
  });
  imageset.origin = `${distPath}/${images.origin.name}`;
  const rawHtml = `<picture>
<source type="image/avif" srcset="${imageset.avif.slice(0, -1)}">
<source type="image/webp" srcset="${imageset.webp.slice(0, -1)}">
<source type="image/jpeg" srcset="${imageset.jpeg.slice(0, -1)}">
<img src="${distPath}${images.origin.name}" alt="${alt}" width="${images.origin.width}" height="${
    images.origin.height
  }" class="article-image">
</picture>`;
  return rawHtml;
};
