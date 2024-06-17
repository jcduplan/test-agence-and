const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: {
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    // cssnano: {},
    tailwindcss: "tailwind.config.js",
    autoprefixer
  }
};
