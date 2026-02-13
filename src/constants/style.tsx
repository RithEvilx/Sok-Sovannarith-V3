import { useColorMode } from "@/components/ui/color-mode";

export const ContainerHoverStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  rounded: "lg",
  padding: "1.25rem",
  transition: "all 0.15s",
  border: "1px solid",
  borderColor: {
    _light: "borderColorForLight",
    _dark: "borderColorForDark",
  },
  _hover: {
    boxShadow: "sm",
  },
  color: { _dark: "textForDark", _light: "textForLight" },
  bgColor: { _dark: "bgForDark", _light: "transparent" },
};

export const useColorModeTheme = () => {
  const { colorMode } = useColorMode();

  const bgColorMode = colorMode === "dark" ? "bgForDark" : "bgForLight";
  const textColorMode = colorMode === "dark" ? "textForDark" : "textForLight";
  const borderColorMode = colorMode === "dark" ? "borderColorForDark" : "borderColorForLight";

  return { bgColorMode, textColorMode, borderColorMode } as const;
};
