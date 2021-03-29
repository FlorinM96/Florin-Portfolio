module.exports = {
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
