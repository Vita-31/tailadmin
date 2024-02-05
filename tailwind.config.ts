import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)'],
      },
      colors: {
        primary: '#3C50E0',
        secondary: '#10B981',
        dark: '#1C2434',
      },
    },
  },
  plugins: [],
};
export default config;
