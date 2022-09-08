/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        "blink-caret": {
          from: { "border-color": "transparent" },
          to: { "border-color": "transparent" },
          "50%": { "border-color": "orange" },
        },
      },
      animation: {
        typing: "typing 2s steps(30, end), blink-caret .75s step-end infinite",
      },
    },
  },
  plugins: [],
};
