import { useState } from "react";
import { useColorMode } from "../ui/color-mode";
import { Flex, List, Separator, Text, Timeline } from "@chakra-ui/react";
// Data
import { WorkExperienceData } from "@/constants/data/WorkExperienceData";
import { useTranslation } from "react-i18next";

const TimelineComponent = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <Timeline.Root variant="outline" size="sm">
      {WorkExperienceData.map((item, index) => {
        const isSelected = activeIndex === index;

        // Dynamic Colors based on Mode
        const activeBg = colorMode === "dark" ? "lightBg" : "darkBg";
        const inactiveBg = colorMode === "dark" ? "darkBg" : "lightBg";

        return (
          <Timeline.Item key={index} alignItems="center" onClick={() => setActiveIndex(index)} cursor="pointer">
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator
                cursor="pointer"
                // Conditional Background
                bg={isSelected ? activeBg : inactiveBg}
                // Conditional Border
                border="1px solid"
                borderColor={isSelected ? activeBg : "borderColor"}
                transition="all 0.2s ease-in-out"
                _hover={{
                  transform: "scale(1.2)",
                  borderColor: activeBg,
                }}
              />
            </Timeline.Connector>

            <Timeline.Content
              gap="0.15rem"
              paddingBottom="1rem"
              opacity={activeIndex !== null && !isSelected ? 0.5 : 1}
              filter={activeIndex !== null && !isSelected ? "grayscale(100%)" : "none"}
              transition="all 0.3s"
            >
              <Timeline.Title>
                <Text fontWeight="semibold" fontSize="md">
                  {t(item.role)}
                </Text>
              </Timeline.Title>
              <Timeline.Description fontWeight="medium" color={isSelected ? (colorMode === "dark" ? "white" : "black") : "secondaryTextColor"}>
                <Flex alignItems="center" flexWrap="wrap" gap="0.25rem">
                  <Text>{t(item.title)}</Text>
                  {item.date && <Separator orientation="vertical" height="3" variant="solid" size="md" colorPalette="gray.800" />}
                  <Text>{t(item.date)}</Text>
                </Flex>
              </Timeline.Description>

              <List.Root listStylePosition="inside" marginTop="0.25rem" gap="0.15rem">
                {item.description.map((description, idx) => (
                  <List.Item fontSize="sm" key={idx} color={colorMode === "dark" ? "secondaryTextColorForDark" : "darkText"}>
                    {t(description)}
                  </List.Item>
                ))}
              </List.Root>
            </Timeline.Content>
          </Timeline.Item>
        );
      })}
    </Timeline.Root>
  );
};

export default TimelineComponent;
