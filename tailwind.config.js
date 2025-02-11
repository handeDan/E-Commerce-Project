/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "40px": "40px", // 40px boyutunda yazı tipi
      },
    },
  },
  plugins: [],
};
