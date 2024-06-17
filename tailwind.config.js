module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "dark": "#000000",
        "light": "#F3F3F3",
        "gray": "#ECEEF0",
        "secondary": "#7F8C87"
      },
      container: {
        center: true,
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1128px',
          'xxl': '1400px'
        }
      },
      fontFamily: {
        sans: ["Prompt", "sans-serif"],
        quote: ["Prosto One", "sans-serif"]
      },
      fontSize: {
        "1xs": "0.625rem",
        "3.5xl": "2rem",
        "6.5xl": "4rem",
        "7.5xl": "5rem"
      },
      lineHeight: {
        "1xs": "0.875rem",
        "3xl": "3rem",
        "4.5": "1.125rem"
      },
      spacing: {
        "7.5": "1.875rem",
        "13": "3.125rem",
        "15": "3.75rem",
        "17": "4.375rem",
        "22": "5.5rem",
        "27": "6.25rem",
        "30": "7.75rem",
        "33": "8.125rem",
        "96.5": "25rem"
      },
      width: {
        "4.5": "1.125rem",
        "22": "5.75rem",
        "29": "7.5rem",
        "53": "13.125rem",
        "97.5": "27.8125rem",
        "98.5": "28.75rem",
        "100": "30rem"
      },
      height: {
        "8.5": "2.125rem",
        "22": "5.75rem",
        "29": "7.5rem",        
        "97.5": "27.8125rem",
        "98.5": "28.75rem",
        "100": "30rem"
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "2/1": "2 / 1",
        "1/1": "1 / 1",
      },
      boxShadow: {
        xs: "-1px 1px 3px 0 rgba(0, 0, 0, 0.05)",        
        sm: "0 .3125rem .75rem rgba(11, 21, 19, 0.07)",
        lg: "0 .4375rem 2rem rgba(11, 21, 19, 0.07)"
      },
      borderWidth: {
        1: "1px",
        10: "10px"
      },
      backgroundImage: {
        "waves-white": "url('../images/bg/waves-white.png')",
        "waves-whiteWebp": "url('../images/bg/waves-white.webp')",
        "service": "url('../images/bg/service.png')",
        "serviceWebp": "url('../images/bg/service.webp')",
        "num": "url('../images/bg/num.png')",
        "numWebp": "url('../images/bg/num.webp')",
        "products": "url('../images/bg/products.png')",
        "productsWebp": "url('../images/bg/products.webp')",
        "texture": "url('../images/bg/texture.png')",
        "textureWebp": "url('../images/bg/texture.webp')",
        "blog": "url('../images/bg/blog.png')",
        "blogWebp": "url('../images/bg/blog.webp')",
        "footer": "url('../images/bg/footer.png')",
        "footerWebp": "url('../images/bg/footer.webp')",
        "header": "url('../images/bg/header.svg')",
        "map": "url('../images/bg/map.svg')",
        "intro": "url('../images/bg/intro.svg')",
        "decor": "url('../images/bg/decor.png')",
        "decorWebp": "url('../images/bg/decor.webp')",
        "category": "url('../images/bg/category.svg')",
        "category-active": "url('../images/bg/category-active.svg')"
      },
      backgroundSize: {
        "100": "100% 100%",
        "150": "150%",
        "200": "200%"
      },
      maxWidth: {
        "auto": "inherit",
        "8": "8rem",
        "10": "10rem",
        "max-w-screen-2xl": "91.5rem"
      },
      letterSpacing: {
      },
      animation: {
        "scroll-mouse": "mouseColor 7s linear infinite, mouseMove 7s ease-out infinite",
        "scroll-mouse-ball": "mouseBallMove 7s linear infinite",
        "scroll-text": "textColor 7s ease-in-out infinite",
        "move-bounce-y": "moveBounceY 3s linear infinite",
        "move-bounce-x": "moveBounceX 3s linear infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]
};
