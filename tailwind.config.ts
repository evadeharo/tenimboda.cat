import type { Config } from "tailwindcss";
import type { ScreensConfig, ThemeConfig } from "tailwindcss/types/config";
import { pluginTypography } from "./src/lib/tailwind";

export const screens = {
  md: "768px",
  lg: "1024px",
  xl: "1440px",
} as const satisfies ScreensConfig;

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  yellow: "#FFF800",
  blue: "#0816FF",
  transparent: "transparent",
  inherit: "inherit",
  "current-color": "currentColor",
} as const satisfies ThemeConfig["colors"];

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens,
    colors,
    fontSize: {},
    fontFamily: { inter: "var(--font-inter)", roca: "var(--font-roca)" },
    extend: {
      spacing: {
        "container-padding": "var(--container-padding)", // TODO: 60px
        "grid-gutter": "var(--grid-gutter)", // TODO: 20px
      },
    },
  },
  plugins: [
    pluginTypography({
      // Desktop
      "text-title": "text-[12.5rem] font-black leading-[10rem] tracking-normal", // TODO: add font
    }),
  ],
} satisfies Config;
