import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#05142B'
      }
    },
  },
  plugins: [],
} satisfies Config;
