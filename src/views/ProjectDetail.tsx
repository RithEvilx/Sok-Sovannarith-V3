import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Flex, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/constants/style";
// Icon
import { LuArrowLeft } from "react-icons/lu";

const ProjectDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Flex direction="column" gap={{ base: "2rem", lg: "2.5rem" }}>
      {/* Navigation */}
      <Flex alignItems="center" fontSize="sm" gap="0.25rem" className="group" cursor="pointer" onClick={() => navigate("/projects")}>
        <Box _groupHover={{ transform: "translateX(-3px)" }} _groupActive={{ transform: "translateX(-3px)" }} transition="all 0.15s">
          <LuArrowLeft />
        </Box>
        <Text>{t("Back to Projects")}</Text>
      </Flex>
      {/* Header */}
      <Flex direction="column" gap={{ base: "0.5rem", lg: "0.75rem" }}>
        <Heading fontSize={{ base: "xl", md: "2xl" }}>Title Project</Heading>
        <Text color="secondaryTextColor">Description</Text>
      </Flex>
      {/* Content */}
      <SimpleGrid columns={12} gap="1rem">
        <GridItem colSpan={8} bg="red">
          Text detail
        </GridItem>
        <GridItem colSpan={4} {...ContainerHoverStyle} _hover={{ boxShadow: "none" }} _active={{ boxShadow: "none" }}>
          Stack
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectDetail;
