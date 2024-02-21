import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      colors: {
        primary: "#3C50E0",
        secondary: "#10B981",
        dark: {
          DEFAULT: "#1C2434",
          light: "#DEE4EE",
          darken: "#8A99AF",
        },
        silver: "#E2E8F0",
      },
    },
  },
  plugins: [],
};
export default config;
