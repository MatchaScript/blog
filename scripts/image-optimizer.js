import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { tmpdir } from "os";
import url from "url";

const encodeOptions = {
  avif: {
    quality: 45
  },
  webp: {
    quality: 70
  },
  jpeg: {
    quality: 75,
    mozjpeg: true
  }
};

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resizeOptions = [720, 1440, 1920];

// 画像を変換するクラス
// 他のrehype, remarkプラグインから呼び出す。
// 画像のパスと出力先ディレクトリを受け取り、画像を変換して出力する。(オリジナルもコピーする)
// 変換後の形式と各サイズの画像のパスを返す。
const Image = class {
  constructor(imgpath, dir, resize, temp, encodedImages) {
    this.path = imgpath;
    this.targetDir = dir;
    this.resizeOptions = resize;
    this.encodeOptions = encodeOptions;
    this.basename = path.basename(imgpath, path.extname(imgpath));
    this.extension = path.extname(imgpath);
    this.tempDir = temp;
    this.encodedImages = encodedImages;
  }
  static init = async (imagePath, imageDir) => {
    const temp = await fs.mkdtemp(path.join(tmpdir(), "image-optimizer-"));
    const targetPath = path.resolve(__dirname, imagePath);
    const targetDir = path.resolve(__dirname, imageDir);
    const metadata = await sharp(targetPath).metadata();
    const resize = resizeOptions.filter((option) => {
      return metadata.width > option;
    });
    if (resize.length <= 1) {
      resize.push(metadata.width);
    }
    const encodedImages = {
      origin: {
        name: "",
        width: metadata.width,
        height: metadata.height
      },
      sizes: resize
    };
    return new Image(targetPath, targetDir, resize, temp, encodedImages);
  };
  // 出力先ディレクトリを作成する
  createDir = async () => {
    await fs.mkdir(this.targetDir, { recursive: true });
  };
  // 画像を変換する
  encode = async () => {
    // 各サイズの画像を作成して変換する
    await Promise.all(
      this.resizeOptions.map(async (size) => {
        const outputpath = `${this.tempDir}/${this.basename}-${size}${this.extension}`;
        await sharp(this.path).resize(size).toFile(outputpath);
        await Promise.all(
          Object.keys(this.encodeOptions).map(async (encode) => {
            const outputpath = `${this.tempDir}/${this.basename}-${size}.${encode}`;
            await sharp(this.path).resize(size).toFile(outputpath);
          })
        );
      })
    );
    // オリジナル画像をコピーする
    await fs.copyFile(this.path, `${this.tempDir}/${this.basename}${this.extension}`);
    this.encodedImages.origin.name = `${this.basename}${this.extension}`;
  };
  // 変換処理を実行し、画像をコピーした後、出力した画像のパスを返す
  run = async () => {
    await this.createDir();
    await this.encode();
    await fs.copyFile(
      `${this.tempDir}/${this.basename}${this.extension}`,
      `${this.targetDir}/${this.basename}${this.extension}`
    );
    await Promise.all(
      this.resizeOptions.map(async (size) => {
        this.encodedImages[size] = {};
        this.encodedImages[size].width = size;
        await fs.copyFile(
          `${this.tempDir}/${this.basename}-${size}${this.extension}`,
          `${this.targetDir}/${this.basename}-${size}${this.extension}`
        );
        const metadata = await sharp(
          `${this.tempDir}/${this.basename}-${size}${this.extension}`
        ).metadata();
        this.encodedImages[size].height = metadata.height;
        await Promise.all(
          Object.keys(this.encodeOptions).map(async (encode) => {
            await fs.copyFile(
              `${this.tempDir}/${this.basename}-${size}.${encode}`,
              `${this.targetDir}/${this.basename}-${size}.${encode}`
            );
            this.encodedImages[size][encode] = `${this.basename}-${size}.${encode}`;
          })
        );
      })
    );
    return this.encodedImages;
  };
};

// input: image path and output dir
// output: array of processed image path
export default async function imageOptimize(image, dir) {
  const imageObj = await Image.init(image, dir);
  const encodedImages = await imageObj.run();
  return encodedImages;
}
