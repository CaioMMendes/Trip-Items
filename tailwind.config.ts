import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "paynes-gray-blue": "#536b78",
        "paynes-gray": "#637081",
        "superiority-blue": "#7c98b3",
        "columbia-blue": "#accbe1",
        "columbia-blue-white": "#cee5f2",
      },
    },
  },
  plugins: [],
};
export default config;
