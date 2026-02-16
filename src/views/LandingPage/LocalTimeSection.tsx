import { Box, Flex } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/constants/style";

const LocalTimeSection = () => {
  const date = new Date();
  console.log("object", date)
  return (
    <Flex {...ContainerHoverStyle}>
      <Box height={{ lg: "162px" }}>LocalTimeSection</Box>
    </Flex>
  );
};

export default LocalTimeSection;
