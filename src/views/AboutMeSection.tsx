import { useTranslation } from "react-i18next";
import { Box, Flex, List, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
// Style
import { ContainerHoverStyle } from "@/constants/style";
// Icon
import { LuInfo } from "react-icons/lu";
// Component
import { AboutMeData } from "@/constants/data/AboutMeData";

const AboutMeSection = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Flex {...ContainerHoverStyle} padding="1.25rem" gap="1.5rem" bg={colorMode === "dark" ? "darkBg" : "transparent"}>
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box fontSize={{ lg: "1.15rem" }}>
          <LuInfo />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("About Me")}
        </Text>
      </Flex>
      {/* Description */}
      <List.Root listStyleType="none" gap="0.5rem">
        {AboutMeData.map((item, index) => (
          <List.Item key={index} fontSize="sm" color={colorMode === "dark" ? "secondaryTextColorForDark" : "darkText"}>
            {t(item)}
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  );
};

export default AboutMeSection;
