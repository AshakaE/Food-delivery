module.exports = {
  purge: {
    enabled: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00A205",
        primaryLight: "#AEE1B2",
        lime: "#84CC16",
        secondary: {
          25: "#fafafa",
          50: "#949494",
          100: "#656566",
          200: "#333333",
        },
      },
      spacing: {
        84: "22rem",
        97: "28rem",
        98: "32rem",
        100: "36rem",
        110: "38rem",
        120: "42rem",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {
      transform: ["active"],
      translate: ["active"],
      boxShadow: ["active"],
    },
  },
  plugins: [],
};
