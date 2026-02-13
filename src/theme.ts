import { defineConfig, defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  colors: {
    lightText: { value: "#ffffff" },
    lightBg: { value: "#fafafa" },
    darkText: { value: "#000000" },
    darkBg: { value: "#111111" },
    borderColorForLight: { value: "#DADBE2" },
    borderColorForDark: { value: "#222222" },
    primaryTextColor: { value: "#4a4f55" },
    secondaryTextColor: { value: "#7a838d" },
    secondaryTextColorForDark: { value: "#74787c" },
    secondaryTextColorForLight: { value: "#414244" },
  },
});

export const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "375px", // phones (portrait + landscape)
      md: "768px", // tablets (iPad & other tablets, BOTH orientations)
      lg: "1200px", // laptops / small desktops
      xl: "1536px", // large desktops
      "2xl": "1920px", // very big screens (optional)
    },
    tokens,
  },
});
