module.exports = {
  chainWebpack: (config) => {
    // SVG Loader
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ mergePaths: false }, { removeViewBox: false }],
        },
      });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/variables.scss";
          @import "@/assets/styles/globals.scss";
          @import "@/assets/styles/fonts.scss";
        `,
      },
    },
  },
};
