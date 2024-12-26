/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1440px"
      },
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mld: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      colors:{
        amazonBlue: "#131921",
        amazonLight: "#232F3E",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
        amazonYellow: "#fcd814",
        amazonYellowDark: "#f7ca00",
        amazonOrange: "#fba41c",
        amazonOrangeDark: "#fa8900",
        amazonGreen: "#7fda69",
        footerBg: "#232f3d",
      },
      boxShadow:{
        textShadow: "0px 0px 32px 1px rgba(199, 199, 199, 1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17/50%)",
      }
    },
  },
  plugins: [],
}