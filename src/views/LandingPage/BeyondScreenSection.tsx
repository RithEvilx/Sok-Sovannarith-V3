import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
// Styles
import { ContainerHoverStyle, useColorModeTheme } from "@/constants/style";
// Icons
import { LuFullscreen, LuChevronLeft, LuChevronRight } from "react-icons/lu";
// Data
import { BeyondScreenData } from "@/constants/data/BeyondScreenData";

const BeyondScreenSection = () => {
  const { t } = useTranslation();
  const { textColorMode, borderColorMode } = useColorModeTheme();

  // 1. Create a reference for the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Navigation function
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 339; // Adjust based on your card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex {...ContainerHoverStyle} direction="column" position="relative">
      {/* Header */}
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gap="0.5rem">
          <Box fontSize="1.25rem">
            <LuFullscreen />
          </Box>
          <Text fontWeight="semibold" fontSize={{ base: "lg", lg: "xl" }}>
            {t("Beyond the Screen")}
          </Text>
        </Flex>

        {/* 3. Navigation Buttons */}
        <Flex gap="0.5rem">
          <IconButton aria-label="Scroll Left" size="sm" variant="outline" onClick={() => scroll("left")}>
            <LuChevronLeft />
          </IconButton>
          <IconButton aria-label="Scroll Right" size="sm" variant="outline" onClick={() => scroll("right")}>
            <LuChevronRight />
          </IconButton>
        </Flex>
      </Flex>

      {/* Content */}
      <Flex direction="column" gap={{ base: "1.5rem", lg: "2rem" }}>
        <Text color={textColorMode} fontSize="sm">
          {t(BeyondScreenData.description)}
        </Text>
        {/* 4. Scrollable Gallery */}
        <Flex
          ref={scrollRef}
          gap="0.75rem"
          overflowX="auto"
          // css={{
          //   msOverflowStyle: "none",
          //   scrollbarWidth: "none",
          //   "&::-webkit-scrollbar": { display: "none" },
          // }}
          paddingBottom="0.5rem"
        >
          {BeyondScreenData.gallery.map((item, index) => (
            <Box
              key={index}
              minWidth="240px"
              width="240px"
              height="150px"
              rounded="lg"
              overflow="hidden"
              border="1px solid"
              borderColor={borderColorMode}
              flexShrink={0} // Important: prevents the box from squeezing
            >
              <Image src={item} alt={`beyond_the_screen_${index}`} width="100%" height="100%" objectFit="cover" />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BeyondScreenSection;
