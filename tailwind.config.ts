import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#261708',
        silver: '#ACADB2',
        secondary: '#EB8C2A',
        tertiary: '#754515',
        yell: '#FFE663',
        brown: '#6B3C24'
      },
      rotate: {
        '360': '360deg',
      },
      backgroundImage: {
        'connect-wl-pattern': "url('/img/hero-pattern.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
