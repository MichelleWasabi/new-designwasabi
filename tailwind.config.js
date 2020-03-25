// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "5.5rem",
      "9xl": "6rem",
      "10xl": "6.5rem"
    },
    opacity: {
      "0": "0",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1"
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "120": "45rem"
      },
      colors: {
        dkblue: "#0f2538",
        blush: "#F3E2E4",
        flower: "#C5466F",
        leaf: "#4F8464",
        sky: "#337EBF",
        dkgray: "#19202D"
      },
      fontfamily: {
        logo: "Jura, sans-serif",
        logotwo: "Righteous, sans-serif"
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};

// #7cc9ae  green
