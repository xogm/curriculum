import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#9146FF",
          "primary-focus": "#772CE8",
          "primary-content": "#ffffff",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        dark: {
          "primary": "#9146FF",
          "primary-focus": "#772CE8",
          "primary-content": "#ffffff",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#2a323c",
          "base-100": "#1d232a",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
