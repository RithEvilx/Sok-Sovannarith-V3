import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle, useColorModeTheme } from "@/constants/style";
// Icon
import { LuChevronRight, LuSettings } from "react-icons/lu";

const TechStackSection = () => {
  const { t } = useTranslation();
  const { textMutedColorMode } = useColorModeTheme();

  return (
    <Flex {...ContainerHoverStyle}>
      {/* Header */}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="0.5rem">
          <Box fontSize={{ base: "1.25rem", md: "1.15rem" }}>
            <LuSettings />
          </Box>
          <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
            {t("Tech Stack")}
          </Text>
        </Flex>
        <Flex alignItems="center" color={textMutedColorMode} fontSize="sm" className="group" cursor="pointer">
          <Text>{t("View All")}</Text>
          <Box _groupHover={{ transform: "translateX(3px)" }} _groupActive={{ transform: "translateX(3px)" }} transition="all 0.15s">
            <LuChevronRight />
          </Box>
        </Flex>
      </Flex>
      <Flex >
      </Flex>
    </Flex>
  );
};

export default TechStackSection;
