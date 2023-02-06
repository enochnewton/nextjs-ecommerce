/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3C38",
        secondary: "#FF6D2B",
        tertiary: "#E84727",
        error: "#E63329",
        black75: "#261F22",
        Black: "#261F22",
        black50: "#261F22",
        orange: " hsl(26, 100%, 55%)",
        "pale-orange": " hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
      },
      screens: {
        tab: { min: "640.4px", max: "768.4px" },
      },
    },
  },
  plugins: [],
};
