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
        primary: '#FE624D',
        secondary: '#F8B400',
        accent: '#4D8CFE',
        background: '#FFFDD0',
        text: '#333333',
        textLight: '#6B7280',
        border: '#DDDDDD',
        hover: '#E03B2A',
        success: '#4CAF50',
        error: '#F44336',
      },
    },
  },
  plugins: [],
};
export default config;
