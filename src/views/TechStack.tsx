import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Badge, Box, Flex, GridItem, Heading, Presence, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
// Style
import { ContainerHoverStyle } from "@/constants/style";
// Icon
import { LuArrowLeft, LuLaptop } from "react-icons/lu";

const TechStack = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { open, onOpen } = useDisclosure({ defaultOpen: true });

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, []);

  return (
    <Flex direction="column" gap={{ base: "2rem", lg: "2.5rem" }}>
      {/* Navigation */}
      <Flex alignItems="center" fontSize="sm" gap="0.25rem" className="group" cursor="pointer" onClick={() => navigate("/")}>
        <Box _groupHover={{ transform: "translateX(-3px)" }} _groupActive={{ transform: "translateX(-3px)" }} transition="all 0.15s">
          <LuArrowLeft />
        </Box>
        <Text>{t("Back to Home")}</Text>
      </Flex>
      {/* Header */}
      <Flex direction="column" gap={{ base: "0.5rem", lg: "0.75rem" }}>
        <Heading fontSize={{ base: "xl", md: "2xl" }}>{t("Full Tech Stack")}</Heading>
        <Text color="secondaryTextColor">{t("Comprehensive list of tools and technologies I use.")}</Text>
      </Flex>
      {/* List Item */}
      <SimpleGrid columns={12} gap="1rem">
        {Array.from({ length: 6 }).map((_, idx) => (
          <GridItem key={idx} colSpan={{ base: 12, md: 6 }}>
            <Presence
              present={open}
              animationName={{
                _open: "slide-from-bottom, fade-in",
                _closed: "slide-to-bottom, fade-out",
              }}
              animationDuration={`${(idx + 0.5) * 500}ms`}
            >
              <Flex {...ContainerHoverStyle} _hover={{ transform: "translateY(-3px)" }} _active={{ transform: "translateY(-3px)" }}>
                {/* Header */}
                <Flex alignItems="center" gap="0.5rem">
                  <Box fontSize="1.25rem">
                    <LuLaptop />
                  </Box>
                  <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
                    {t("Frontend")}
                  </Text>
                </Flex>
                {/* Skill List */}
                <Flex gap="0.5rem" flexWrap="wrap">
                  <Badge variant="outline" padding="0.25rem 0.5rem">
                    1
                  </Badge>
                </Flex>
              </Flex>
            </Presence>
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default TechStack;
