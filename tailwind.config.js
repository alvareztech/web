module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorA: "#007aff", // Blue Light
        colorAD: "#0a84ff", // Blue Dark
        colorAccent: "#ffcc00", // Yellow Light
        colorAccentD: "#ffd60a", // Yellow Light
      }
    },
  },
  plugins: [],
}
