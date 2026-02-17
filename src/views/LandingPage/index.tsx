import { useEffect } from "react";
import { Flex, GridItem, Presence, SimpleGrid, useDisclosure } from "@chakra-ui/react";
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

  return (
    <SimpleGrid columns={12} gap="1rem">
      {/* 1. HEADER - Always Top */}
      <GridItem colSpan={12} order={1}>
        <Presence present={open} animationStyle={{ _open: "scale-fade-in" }} animationDuration="1000ms">
          <HeaderSection />
        </Presence>
      </GridItem>

      {/* 2. MAIN CONTENT (Work & Projects) - Order 2 on Mobile, Right side on Desktop */}
      <GridItem colSpan={{ base: 12, lg: 7 }} order={{ base: 2, lg: 2 }}>
        <Flex direction="column" gap="1rem">
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <WorkExperienceSection />
          </Presence>
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <ProjectSection />
          </Presence>
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <GetInTouchSection />
          </Presence>
        </Flex>
      </GridItem>

      {/* 3. SIDEBAR (About, Education, Tech) - Order 3 on Mobile, Left side on Desktop */}
      <GridItem colSpan={{ base: 12, lg: 5 }} order={{ base: 3, lg: 1 }}>
        <Flex direction="column" gap="1rem">
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <AboutUsSection />
          </Presence>
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <LocalTimeSection />
          </Presence>
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <TechStackSection />
          </Presence>
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <EducationSection />
          </Presence>
          <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
            <BeyondScreenSection />
          </Presence>
        </Flex>
      </GridItem>

      {/* 4. FOOTER - Always Bottom */}
      <GridItem colSpan={12} order={4}>
        <Presence present={open} animationStyle={{ _open: "scale-fade-in" }}>
          <Footer />
        </Presence>
      </GridItem>
    </SimpleGrid>
  );
};

export default Home;
