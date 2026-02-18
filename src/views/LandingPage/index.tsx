import { useEffect } from "react";
import { Box, Flex, GridItem, Presence, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Right - Components
import HeaderSection from "./HeaderSection";
import LocalTimeSection from "./LocalTimeSection";
import AboutUsSection from "./AboutMeSection";
import EducationSection from "./EducationSection";
import TechStackSection from "./TechStackSection";
import BeyondScreenSection from "./BeyondScreenSection";
// Left - Components
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectSection from "./ProjectSection";
import GetInTouchSection from "./GetInTouchSection";
// Bottom - Components
import Footer from "./Footer";

const Home = () => {
  const { open, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  useEffect(() => {
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
    return () => clearTimeout(scrollTimer);
  }, []);

  const presenceProps = {
    lazyMount: true,
    unmountOnExit: true,
    present: open,
    animationStyle: { _open: "scale-fade-in", _closed: "scale-fade-out" },
    animationDuration: "1000ms",
  };

  return (
    <Box>
      {/* --- MOBILE VIEW: Custom Sequence (Hidden on Desktop) --- */}
      <Flex direction="column" gap="1rem" hideFrom="lg">
        <Presence {...presenceProps}><HeaderSection /></Presence>
        <Presence {...presenceProps}><AboutUsSection /></Presence>
        <Presence {...presenceProps}><LocalTimeSection /></Presence>
        <Presence {...presenceProps}><WorkExperienceSection /></Presence>
        <Presence {...presenceProps}><TechStackSection /></Presence>
        <Presence {...presenceProps}><ProjectSection /></Presence>
        <Presence {...presenceProps}><EducationSection /></Presence>
        <Presence {...presenceProps}><BeyondScreenSection /></Presence>
        <Presence {...presenceProps}><GetInTouchSection /></Presence>
        <Presence {...presenceProps}><Footer /></Presence>
      </Flex>

      {/* --- DESKTOP VIEW: Split Columns (Hidden on Mobile) --- */}
      <SimpleGrid columns={12} gap="1rem" hideBelow="lg">
        {/* Header Section */}
        <GridItem colSpan={12}>
          <Presence {...presenceProps} animationDuration="1000ms">
            <HeaderSection />
          </Presence>
        </GridItem>

        {/* Left Column (Span 5) */}
        <GridItem colSpan={5}>
          <Flex direction="column" gap="1rem">
            <Presence {...presenceProps}><LocalTimeSection /></Presence>
            <Presence {...presenceProps}><AboutUsSection /></Presence>
            <Presence {...presenceProps}><EducationSection /></Presence>
            <Presence {...presenceProps}><TechStackSection /></Presence>
            <Presence {...presenceProps}><BeyondScreenSection /></Presence>
          </Flex>
        </GridItem>

        {/* Right Column (Span 7) */}
        <GridItem colSpan={7}>
          <Flex direction="column" gap="1rem">
            <Presence {...presenceProps}><WorkExperienceSection /></Presence>
            <Presence {...presenceProps}><ProjectSection /></Presence>
            <Presence {...presenceProps}><GetInTouchSection /></Presence>
          </Flex>
        </GridItem>

        {/* Footer Section */}
        <GridItem colSpan={12}>
          <Presence {...presenceProps}><Footer /></Presence>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Home;