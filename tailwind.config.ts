/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1720px",
    },

    // background: linear-gradient(180deg, #00FF47 0%, #247BE1 100%);

    extend: {
      textColor: {
        primary: "#59D279",
        secondary: "#00FF47",

        "nav-title": "#98FF98",

        "dark-main": "#151515",
        "dark-secondary": "#27262c",
        "light-main": "#D2D6EE",
      },
      backgroundColor: {
        primary: "#59D279",
        secondary: "#00FF47",

        "dark-main": "#151515",
        "dark-secondary": "#27262c",
        "dark-tertiary": "#205d7d",
        "dark-hover": "#99a1bd14",

        grayscale: "#111114",

        "nav-scroll": "#DD6B20",

        "light-primary": "#FFF",
        "light-secondary": "#E2EAF4",
      },
      fill: {
        primary: "#59D279",
        secondary: "#00FF47",
      },
      backgroundImage: () => ({
        "chr-primary": "linear-gradient(152.64deg, #59D279 0%, #00FF47 100%)",
        "chr-primary-transparent":
          "linear-gradient(152.64deg, rgba(36, 123, 225, 0.5) 0%, rgba(0, 255, 71, 0.5) 100%)",
        "chr-secondary": "linear-gradient(152.64deg, #00FF47 0%, #59D279 100%)",
        "chr-secondary-transparent":
          "linear-gradient(152.64deg, rgba(0, 255, 71, 0.5) 0%, rgba(36, 123, 225, 0.5) 100%)",

        "about-us":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.2) 100%)",
        "join-us":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.2) 100%)",

        vector: "url(/app-vector.png)",
        "chr-bg": "url('/background.png')",

        "dark-primary": "linear-gradient(to right, #151515, rgb(19, 24, 35))",
        "dark-fade":
          "linear-gradient(to right, #151515, #131823, rgb(19, 24, 35))",
      }),
      borderColor: {
        primary: "#59D279",
        secondary: "#00FF47",

        "dark-main": "#8F8686",
        "light-main": "#D2D6EE",
      },
      borderImageSource: {
        "chr-primary": "linear-gradient(152.64deg, #59D279 0%, #00FF47 100%)",
      },
      keyframes: {
        lightning: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.25,
          },
          "80%": {
            opacity: 0.5,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        pulse: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translate3d(0, -100%, 0)" },
          "100%": { opacity: 1, transform: "none" },
        },
        fadeInDown: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shadowColorChange: {
          "0%": {
            boxShadow: "0px 0px 10px 5px #ee3a00",
          },
          "33%": {
            boxShadow: "0px 0px 10px 5px #17e8fe",
          },
          "66%": {
            boxShadow: "0px 0px 10px 5px #e23bfd",
          },
          "100%": {
            boxShadow: "0px 0px 10px 5px #eb7744",
          },
          // "100%": {
          //   boxShadow: "0px 0px 10px 5px #895335",
          // },
        },
        lightSpeedInLeft: {
          "0%": {
            transform: "translateX(-100%) skewX(-30deg)",
            opacity: 0,
          },
          "60%": {
            transform: "translateX(20%) skewX(20deg)",
            opacity: 1,
          },
          "80%": {
            transform: "translateX(-5%) skewX(-5deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromBottom: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        pulse: "pulse 1s infinite",
        pulseBasic: "pulse 1s ease",
        bounceSlow: "bounce 1.5s infinite",
        slideInTopBasic: "slideInFromTop 1s ease-out",
        slideInRightBasic: "slideInFromRight 1s ease",
        slideInLeftBasic: "slideInFromLeft 1s ease",
        slideInBottomBasic: "slideInFromBottom 1s ease",
        slideInTopFast: "slideInFromTop 0.5s ease-out",
        slideInRightFast: "slideInFromRight 0.5s ease",
        slideInLeftFast: "slideInFromLeft 0.5s ease",
        slideInBottomFast: "slideInFromBottom 0.5s ease",
        slideInBottomInstant: "slideInFromBottom 0.25s ease",
        lightSpeedInLeftFast: "lightSpeedInLeft 0.5s ease-out",
        lightSpeedInLeftBase: "lightSpeedInLeft 1s ease-out",
        fadeInInstant: "fadeIn 0.25s ease",
        fadeInBasic: "fadeIn 0.5s ease",
        fadeInBase: "fadeIn 1s ease",
        fadeInLame: "fadeIn 2s ease",
        fadeInDownBase: "1s ease 0s 1 normal none running fadeInDown",
        spinSlow: "spin 5s linear infinite",
        lightningBase: "lightning 2s infinite",
        shadowColorChangeMythical: "shadowColorChange 5s infinite",
        typingBasic: "typing 2s steps(20, end)",
      },
      boxShadow: {
        "dark-shadow": "inset 0 0 0 1px #202835",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

// border: 1px solid;

// border-image-source: linear-gradient(152.64deg, #247BE1 0%, #00FF47 100%);
