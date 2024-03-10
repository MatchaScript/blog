import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}", "scripts/*.test.js"]
  }
};

export default config;
