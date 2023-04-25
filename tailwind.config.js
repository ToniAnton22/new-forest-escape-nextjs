/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.jsx",
"./pages/*.js",
"./pages/*.jsx",
"./components/*.jsx",
"./public/*.{html,js}"
],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  
}

