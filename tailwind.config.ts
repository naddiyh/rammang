import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontSize: {
        "text-xs": [
          "12px",
          {
            lineHeight: "18px",
          },
        ],
        "text-s": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "text-m": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "text-l": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        "heading-s": [
          "20px",
          {
            lineHeight: "32px",
          },
        ],
        "heading-m": [
          "24px",
          {
            lineHeight: "40px",
          },
        ],
        "heading-l": [
          "32px",
          {
            lineHeight: "48px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
