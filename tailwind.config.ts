import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
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
          light: "#333A48",
        },
        silver: {
          DEFAULT: "#E2E8F0",
          light: "#DEE4EE",
          dark: "#637381",
          darken: "#8A99AF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
