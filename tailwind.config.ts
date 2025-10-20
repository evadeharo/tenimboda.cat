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
        "container-padding": "var(--container-padding)", // 60px
        "grid-gutter": "var(--grid-gutter)", // 20px
      },
    },
  },
  plugins: [
    pluginTypography({
      // Desktop
      "text-title-xl":
        "text-[11.5rem] font-black leading-[7rem] tracking-normal font-roca",
      "text-title-l":
        "text-[7.75rem] font-black leading-[7.5rem] tracking-normal font-roca",
      "text-title-m":
        "text-[5rem] font-black leading-[6.25rem] tracking-normal font-roca",
      "text-subtitle":
        "text-[3.125rem] font-light tracking-normal font-roca",
      "text-subtitle-bold":
        "text-[3rem] font-black leading-[3.125rem] tracking-normal font-roca",
      "text-base": "text-[1.2rem] tracking-normal font-inter",
      "text-button": "text-[1.25rem] leading-none font-black tracking-normal font-roca",
      "text-cta": "text-[1.25rem] tracking-normal font-roca hover:underline",
    }),
  ],
} satisfies Config;
