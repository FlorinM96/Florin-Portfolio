module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("vue-loader")
      .loader("vue-loader-v16") // or `` if you are using a preview support of Vue 3 in Vue CLI
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
        `,
      },
    },
  },
};
