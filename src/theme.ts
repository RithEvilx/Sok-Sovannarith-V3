import { defineConfig, defineTokens } from "@chakra-ui/react";

export const tokens = defineTokens({
  colors: {
    lightText: { value: "#ffffff" },
    lightBg: { value: "#fafafa" },
    darkText: { value: "#000000" },
    darkBg: { value: "#222222" },
    borderColor: { value: "#DADBE2" },
    secondaryTextColor: { value: "#7a838d" },
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
