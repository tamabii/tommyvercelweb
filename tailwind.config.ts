import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/sharedcomponents/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#2D2D66",
      secondary: "#38C675",
      white: "#ffffff",
      offwhite: "#ADB5BD",
      orange: "#FF9700",
      lightblue: "#3EAEFF",
      red: "#FE5050",
      slate: "#495057",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
