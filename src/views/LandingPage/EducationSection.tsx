import { useTranslation } from "react-i18next";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/constants/style";
// Icon
import { LuGraduationCap } from "react-icons/lu";
// Component
import TimelineComponent from "@/components/common/TimelineComponent";
// Data
import { EducationData } from "@/constants/data/EducationData";

const EducationSection = () => {
  const { t } = useTranslation();

  return (
    <Flex {...ContainerHoverStyle} paddingBottom="0.25rem">
      {/* Header */}
      <Flex alignItems="center" gap="0.5rem">
        <Box fontSize={{ base: "1.25rem", md: "1.15rem" }}>
          <LuGraduationCap />
        </Box>
        <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
          {t("Education")}
        </Text>
      </Flex>
      {/* Timeline */}
      <TimelineComponent data={EducationData} />
    </Flex>
  );
};

export default EducationSection;
