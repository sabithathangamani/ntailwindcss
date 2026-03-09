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
        "page3-background": "linear-gradient(to right, #739FE8, #4F18CA)",
        "course-background": "linear-gradient(to right, #D9ECFF, #D9ECFF)",
         "subscribe-background": "linear-gradient(45deg, #EFF1F4 0%, #7A68FF 56%,#E441FF 100%)",
         "testimonals-background":"linear-gradient(to top, #DBEDFF 0%,#DBEDFF 100%)",
         "last-background":"linear-gradient(45deg, #931BBD 10%,#477AE3 90%)",
        "last1-background":"url('/images/last.png')",
      }
    
    },
  },

  plugins: [],
}

