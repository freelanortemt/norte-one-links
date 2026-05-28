import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: "#F6F5F2",
        mist: "#EFECE6",
        titanium: "#7A7A80",
        graphite: "#2B2B31",
        softblack: "#111111",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(17, 17, 17, 0.10)",
        glass: "0 18px 50px rgba(43, 43, 49, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
