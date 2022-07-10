module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Secular: ["Secular One", "sans-serif"],
        Titan: ["Titan One", "cursive"],
      },
    },
  },
  plugins: [],
};
