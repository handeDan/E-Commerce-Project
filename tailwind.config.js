/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "40px": "40px", // 40px boyutunda yazı tipi
      },
      colors: {
        primary: {
          //griler
          light: "#BDBDBD", // Açık renk (bazı yazılar)
          DEFAULT: "#737373", // Ana renk (yazılar:gri)
          dark: "#252B42", // Koyu renk (logo ve başlıklar)
        },
        secondary: {
          blue: "#23A6F0", //blue
          light_blue: "#8EC2F2", //light blue
          green: "#23856D", //green
          light_green: "#2DC071", //light green
          alert: "#E77C40", //orange
          danger: "#E74040", //red
          dark: "#252B42", //dark
          gray: "#FAFAFA", //light gray
        },
        icons: {
          fb: "#395185", //facebook
          tw: "#55ACEE", //twitter
          ln: "#0A66C2", //linkedin
          ins: "#000000", //instagram
        },
      },
    },
  },
  plugins: [],
};
