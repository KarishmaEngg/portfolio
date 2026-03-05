/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#121212",
        cardDark: "#1e1e1f",
        borderGray: "#383838",
        accentYellow: "#ffdb70",
      },
    },
  },
  plugins: [],
};