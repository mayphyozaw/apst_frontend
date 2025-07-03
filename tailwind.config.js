/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{css,js,vue}"],
  theme: {
    extend: {

            colors:{
                primary: "#2e6130 ",
                secondary: "#FFB823",

            },
            textColor:{
                theme: "#1CBC9B ",
            },
       
    },
  },
  darkMode: false,
  mode:'jit',
  plugins: [],
}

