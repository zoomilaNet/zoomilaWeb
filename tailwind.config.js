const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,ts,tsx}","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {

    colors: {
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      red: colors.red,
      'occasion_ads_tag': '#fec0d8',        /*رنگ تگ آگهی های ویژه*/
      'featured_ads_tag': '#f9c806',        /*تگ آگهی های فوری*/
      'simple_ads_tag': '#f3f3f3',          /*پس زمینه قیمت آگهی های ساده*/
      'green_accent': '#218603',            /*رنگ سبز فروش*/
      'blue_accent': '#198AE1',             /*رنگ آبی اجاره*/
      'gray_text': '#656565',               /*رنگ حروف خاکستری*/
      'hf_color': '#1f1f47',
      'sale_up': '#07aba0',
      'sale_down': '#045650',
      'rent_up': '#0064bb',
      'rent_down': '#00325e',
      'upgreen_gradient': '#03a807',
      'downgreen_gradient': '#015e05',
      'upnblue_gradient': '#1d2085',
      'downnblue_gradient': '#050033',
      'arrow': '#494870',
      'clean_button': '#00B1FF',
      'upgray_gradient': '#d9d8d3',
      'with_gray': '#E6DCDC',
      'downgray_gradient': '#c2c1bd',
      'ads_title': '#0e0085',
      'no_image':'#d0d0d0',
      'pagination':'#123e56',
    },
    extend: {
      zIndex: {
        '9999': '9999',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'home_bg': "url('../public/image/bg.png')",
      },
      boxShadow: {
        '3xl': '0 35px 50px -15px rgba(0, 0, 0, 0.1)',
      },
      height: {
        '92': '23rem',
        '128': '32rem',
        '10%': '10vh',
        '8%': '8vh',
        '20%': '20vh',
        '30%': '30vh',
        '40%': '40vh',
        '50%': '50vh',
        '60%': '60vh',
        '70%': '70vh',
        '75%': '75vh',
        '80%': '80vh',
        '90%': '90vh',
        '92%': '92vh',
        '15%': '15vh',
        '5%': '5vh',
        '12%': '12vh',
        '25rem': '25rem',
        '31rem': '31rem',
        '48W': '48vw'
      },
      width: {
        '92': '23rem',
        '3/10': '30%',
        '3.2/10': '32%',
        '49%': '49%',
        '45%': '45%',
        '18%': '18%',
        '25rem': '25rem',
        '31rem': '31rem',
        '48W': '48vw'
      },

      fontFamily: {
        iransans: ["iransans"],
        iransansbold: ["iransansbold"],
        iransanslight: ["iransanslight"],
        iransansmedium: ["iransansmedium"],
        iransansultralight: ["iransansultralight"],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
