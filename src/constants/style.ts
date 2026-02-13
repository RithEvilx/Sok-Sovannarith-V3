export const ContainerHoverStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  border: "1px solid",
  borderColor: {
    _light: "borderColorForLight", // Your Light Hex
    _dark: "borderColorForDark", // Your Dark Hex
  },
  rounded: "lg",
  _hover: {
    boxShadow: "sm",
  },
  transition: "all 0.15s",
};
