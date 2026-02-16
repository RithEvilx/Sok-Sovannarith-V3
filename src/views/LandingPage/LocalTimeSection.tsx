import { Box, Flex } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/constants/style";

const LocalTimeSection = () => {
  return (
    <Flex {...ContainerHoverStyle}>
      <Box height={{ lg: "162px" }}>LocalTimeSection</Box>
    </Flex>
  );
};

export default LocalTimeSection;
