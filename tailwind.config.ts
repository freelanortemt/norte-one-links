import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        norte: "#0B1F33",
        offwhite: "#F4F1EA",
        grafite: "#20242A",
        cobre: "#B87945",
        nevoa: "#D8E1E8",
        pedra: "#8A8F98",
        premium: "#F4F1EA",
        mist: "#D8E1E8",
        titanium: "#8A8F98",
        graphite: "#20242A",
        softblack: "#0B1F33",
      },
      boxShadow: {
        premium: "0 32px 100px rgba(11, 31, 51, 0.16)",
        glass: "0 18px 60px rgba(11, 31, 51, 0.10)",
        copper: "0 24px 80px rgba(184, 121, 69, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
