/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,js,jsx,ts,tsx}",
    "./*.html",
  ],
  theme: {
    extend:{
        backgroundImage: {
        'hero-gradient': "linear-gradient(to right, #083F9B, #7F56D9)",
        // "body-background":"linear-gradient(to right,#04016C,#4A16BD)",
           "body-background": "url('/images/bodybackground.png')",
        "footer-background":"url('/images/footer1img.png')",
      }
    
    },
  },

  plugins: [],
}

