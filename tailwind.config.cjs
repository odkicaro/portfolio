/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            fontSize:{
              's' : '13px',
              'm' : '15px',
            }
        },
    },
    plugins: [],
}
