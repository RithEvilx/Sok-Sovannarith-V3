import { useEffect } from "react";
import { Flex, GridItem, Presence, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Component
// Right
import HeaderSection from "./HeaderSection";
import LocalTimeSection from "./LocalTimeSection";
import AboutUsSection from "./AboutMeSection";
import EducationSection from "./EducationSection";
import TechStackSection from "./TechStackSection";
import BeyondScreenSection from "./BeyondScreenSection";
// Left
import WorkExperienceSection from "./WorkExperienceSection";
import ProjectSection from "./ProjectSection";
// Bottom
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
    <>
      <SimpleGrid columns={12} gap="1rem">
        <GridItem colSpan={12}>
          {/* Profile */}
          <Presence
            lazyMount
            unmountOnExit
            present={open}
            animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
            animationDuration="1000ms"
          >
            <HeaderSection />
          </Presence>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 5 }}>
          <Flex direction="column" gap="1rem">
            {/* Local Time */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <LocalTimeSection />
            </Presence>
            {/* About Me */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <AboutUsSection />
            </Presence>
            {/* Education */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <EducationSection />
            </Presence>
            {/* Tech Stack */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <TechStackSection />
            </Presence>
            {/* Beyond the screen */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <BeyondScreenSection />
            </Presence>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <Flex direction="column" gap="1rem">
            {/* Work Experience */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <WorkExperienceSection />
            </Presence>
            {/* Project */}
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <ProjectSection />
            </Presence>
          </Flex>
        </GridItem>
        <GridItem colSpan={12}>
          {/* Footer */}
          <Presence
            lazyMount
            unmountOnExit
            present={open}
            animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
            animationDuration="1000ms"
          >
            <Footer />
          </Presence>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Home;
