module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Roboto"],
      secondary: ["Roboto Mono"],
    },
    extend: {},
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    maxHeight: {
      "1/4vh": "25vh",
      "1/2vh": "50vh",
      "3/4vh": "75vh",
      full: "100%",
    },
    minHeight: {
      "1/4vh": "25vh",
      "1/2vh": "50vh",
      "3/4vh": "75vh",
      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
