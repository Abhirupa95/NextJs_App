import type { Config } from "tailwindcss";

export default {
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
        purple : "#800080",
        yellow: "#ffff00",
        black: '#000000',
        cadetblue: 'cadetblue',
        aliceblue: 'aliceblue',
        blue: '#0000ff'
      },
      fontFamily: {
        fantasy: ["fantasy"], 
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
