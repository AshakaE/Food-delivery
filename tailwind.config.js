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
        secondary: {
          100: "#656566",
          200: "#333333",
        },
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
