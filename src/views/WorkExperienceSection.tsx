import { useTranslation } from "react-i18next";
import { useColorMode } from "@/components/ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/constants/style";
// Icon
import { LuBriefcaseBusiness } from "react-icons/lu";
// Component
import TimelineComponent from "@/components/views/TimelineComponent";
// Data
import { WorkExperienceData } from "@/constants/data/WorkExperienceData";

const WorkExperienceSection = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Flex {...ContainerHoverStyle} padding="1.25rem" gap="1.5rem" bg={colorMode === "dark" ? "darkBg" : "transparent"}>
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box fontSize={{ base: "1.25rem", md: "1.15rem" }}>
          <LuBriefcaseBusiness />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("Work Experience")}
        </Text>
      </Flex>
      <TimelineComponent data={WorkExperienceData} />
    </Flex>
  );
};

export default WorkExperienceSection;
