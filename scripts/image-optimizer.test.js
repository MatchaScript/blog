//to-do: output type is not correct
import imageOptimize from "./image-optimizer";
import { describe, expect, it } from "vitest";

const dir = "../tests/images/";
const output = "../tests/output";
const images = ["test-small.jpg", "test-mid.jpg", "test-large.jpg"];

describe("image-optimizer test", () => {
  it("large image resize test", async () => {
    const imagePath = dir + images[2];
    const rawresult = await imageOptimize(imagePath, output);
    //const result = rawresult;
    const expected = {
      sizes: [720, 1440, 1920],
      origin: {
        name: "test-large.jpg",
        width: 1920,
        height: 1280
      },
      720: {
        avif: "test-large-720.avif",
        jpeg: "test-large-720.jpeg",
        webp: "test-large-720.webp"
      },
      1440: {
        avif: "test-large-1440.avif",
        jpeg: "test-large-1440.jpeg",
        webp: "test-large-1440.webp"
      },
      1920: {
        avif: "test-large-1920.avif",
        jpeg: "test-large-1920.jpeg",
        webp: "test-large-1920.webp"
      }
    };
    expect(rawresult).toEqual(expected);
  });
});
