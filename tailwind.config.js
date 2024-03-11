/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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

