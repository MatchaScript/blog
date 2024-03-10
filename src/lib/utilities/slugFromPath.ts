export const slugFromPath = (path) =>
  path.match(/([\w-]+)\/index\.(svelte\.md|md|svx)/i)?.[1] ?? null;
