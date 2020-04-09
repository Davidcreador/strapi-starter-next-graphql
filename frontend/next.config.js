require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
});
