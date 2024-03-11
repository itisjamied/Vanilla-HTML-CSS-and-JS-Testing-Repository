/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // This points to your HTML file at the project root
    "./src/**/*.{html,js}" // This includes all HTML and JS files within the src directory
  ],
  theme: {
    extend: {
      height: {
        '60screen': '60vh',
      },
      colors: {
        'pross-gray': '#BEBEBE', 
      },
      backgroundColor: {
        'pross-black': '#020202', 
      },
    },
  },
}

