import { useEffect } from "react";
import { Box, Flex, GridItem, Presence, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Component
import HeaderSection from "./HeaderSection";
import AboutUsSection from "./AboutMeSection";
import EducationSection from "./EducationSection";
import WorkExperienceSection from "./WorkExperienceSection";
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
      {/* Profile */}
      <Presence lazyMount unmountOnExit present={open} animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }} animationDuration="1000ms">
        <Box marginBottom={{ base: "2rem", lg: "3rem" }}>
          <HeaderSection />
        </Box>
      </Presence>
      <SimpleGrid columns={12} gap="1rem">
        <GridItem colSpan={{ base: 12, lg: 5 }}>
          <Flex direction="column" gap="1rem">
            {/* About Me */}
            <Presence lazyMount unmountOnExit present={open} animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }} animationDuration="1000ms">
              <AboutUsSection />
            </Presence>
            {/* Education */}
            <Presence lazyMount unmountOnExit present={open} animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }} animationDuration="1000ms">
              <EducationSection />
            </Presence>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <Flex direction="column" gap="1rem">
            {/* Work Experience */}
            <Presence lazyMount unmountOnExit present={open} animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }} animationDuration="1000ms">
              <WorkExperienceSection />
            </Presence>
          </Flex>
        </GridItem>
        <GridItem colSpan={12} paddingBlock={{ base: "3rem", lg: "4rem 3rem" }}>
          <Footer />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Home;
