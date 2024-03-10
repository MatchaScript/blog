<script lang="ts">
  export let srcset: object = {};
  export let width: number = 0;
  export let height: number = 0;
  export let alt: string = "picture";
  export let lazy: "auto" | "lazy" | "eager" = "auto";
  export let slug: string = "asset";
  const imageSet = (slug, encode: string, data: any) => {
    let srcset = "";
    data.sizes.forEach((size) => {
      srcset += `${slug}/${data[size][encode]} ${data[size].width}w,`;
    });
    return srcset;
  };
</script>

<picture>
  <source type="image/avif" srcset={imageSet(slug, "avif", srcset)} />
  <source type="image/webp" srcset={imageSet(slug, "webp", srcset)} />
  <source type="image/jpeg" srcset={imageSet(slug, "jpeg", srcset)} />
  <img src="{slug}/{srcset.origin.name}" {width} {height} {alt} loading={lazy} />
</picture>

<style lang="postcss">
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
