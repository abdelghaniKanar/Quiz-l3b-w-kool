/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "quiz-lime": {
          100: "#ecfccb",
          500: "#84cc16",
          600: "#65a30d",
        },
        "quiz-neutral": {
          700: "#404040",
        },
      },
    },
  },
  plugins: [],
};
