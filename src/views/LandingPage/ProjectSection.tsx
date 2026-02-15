import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle, useColorModeTheme } from "@/constants/style";
// Icon
import { LuChevronRight, LuFolderCode } from "react-icons/lu";

const ProjectSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { textMutedColorMode } = useColorModeTheme();

  return (
    <Flex {...ContainerHoverStyle}>
      {/* Header */}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="0.5rem">
          <Box fontSize={{ base: "1.25rem", md: "1.15rem" }}>
            <LuFolderCode />
          </Box>
          <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
            {t("Project")}
          </Text>
        </Flex>
        <Flex alignItems="center" color={textMutedColorMode} fontSize="sm" className="group" cursor="pointer" onClick={() => navigate("/projects")}>
          <Text>{t("View All")}</Text>
          <Box _groupHover={{ transform: "translateX(3px)" }} _groupActive={{ transform: "translateX(3px)" }} transition="all 0.15s">
            <LuChevronRight />
          </Box>
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default ProjectSection;
