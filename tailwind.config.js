/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1440px",
    },
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        heading: "'Red Hat Display', sans-serif",
        content: "'Inter', sans-serif",

      },
      colors: {
        'primary': "#228B22",
        'secondary': "#13B690",
        'info': "#15C99F",
        'accent': '#353539',
        'darkColor': '#010A08',
        'bgColor1': "#E8F3F0",
        'bgColor2': "#1B2821",
      }
    },
    animation: {
      marquee: "marquee 10s linear infinite",
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      bounchingImage: "bounchingImage 2s infinite"
    },
    keyframes: {
      marquee: {
        '0%': { transform: "translate(0%)" },
        '100%': { transform: "translate(-100%)" }
      },
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "black"
        }
      },
      bounchingImage: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(25px)' },
        '100%': { transform: 'translateY(0px)' }
      }
    }
  },
  plugins: [],

  plugins: [require("daisyui")],
}