module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        // sm: { max: "639px" },
        // lg: { min: "640px" },
        // "3xl": "1600px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(185.6deg, rgba(217, 217, 217, 0.8) 0%, rgba(217, 217, 217, 0) 5%, rgba(0, 49, 95, 0.42) 27.36%, #D10409 93.6%)",
      },
      backgroundColor: {
        primary: "#00315F",
        "main-bg": "#F5F5F5",
        "5A5": "#A5A5A5",
        white: "#ffffff",
      },
      colors: {
        white: "#ffffff",
        primary: "#00315F",
      },
      borderWidth: {
        1: "1px",
      },

      boxShadow: {
        select: "10px 10px 40px rgba(0, 0, 0, 0.08);",
        "small-select": "0 2px 2px rgba(0, 0, 0, 0.08);",
        "shift-shadow": "10px 10px 40px rgba(0, 0, 0, 0.08);",
        "shift-shadow-small": "0px 0px 10px 2px rgba(0, 0, 0, 0.04);",
        "live-shadow": "0px 0px 20px 4px rgba(0, 0, 0, 0.06)",
      },

      borderColor: {
        main: "#00315F",
        btnBorder: "#000000",
        input: "#152A75",
        "grey-500": "#E6E6E6",
        "grey-600": "#A5A5A5",
        "9FD": "#E4E9FD",
        353: "#C15353",
        "6E6": "#E6E6E6",
        "5A5": "#A5A5A5",
        "0E0": "#E0E0E0",
        BC2: "#4ACBC2",
        "5F5": "#F5F5F5",
        "border-red": "#D10409",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 2s infinite",
      },
    },
  },
  plugins: [],
};
