import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // main: { 300: "#F5B927", 400: "#EE8B1C", 500: "#E86012" },
        // background: "#20242F",
        ok_main: {
          100: "#E6DAC4",
          200: "#F5D9B4",
          300: "#E1BB94",
          400: "#D6A37B",
          500: "#A97E53",
          600: "#6E3A22",
          700: "#452925",
          900: "#1D1C22",
        },
      },
      fontFamily: {
        mont: ["var(--font-montserrat)", ...fontFamily.sans],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
