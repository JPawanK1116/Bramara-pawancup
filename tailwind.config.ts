import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#C6A756",
        highlight: "#6E0D25",
        "gold-light": "#EED8A1",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
export default config;
