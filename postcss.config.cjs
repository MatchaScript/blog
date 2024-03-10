const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

const config = {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
        "custom-media-queries": true
      }
    })
  ]
};

module.exports = config;
