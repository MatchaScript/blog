import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import path from "path";
import fs from "fs/promises";
import url from "url";
import sharp from "sharp";
import imageOptimize from "./image-optimizer.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function get_headings() {
  return async function transformer(tree, vFile) {
    const postDir = vFile.filename.split("index.svelte.md")[0];
    const postPath = vFile.filename.split("lib")[1].split("index.svelte.md")[0];
    const originImage = vFile.data.fm.coverImage;
    const imagePath = path.resolve(postDir, originImage);
    const imageDir = path.join(__dirname, "../static", postPath);
    const images = await encode(imagePath, imageDir);
    vFile.data.coverImage = {};
    visit(tree, "heading", (node) => {
      vFile.data.coverImage = images;
    });
    if (!vFile.data.fm) vFile.data.fm = {};
    vFile.data.fm.coverImage = vFile.data.coverImage;
  };
}

const encode = async (imagePath, imageDir) => {
  const images = await imageOptimize(imagePath, imageDir);
  return images;
};

