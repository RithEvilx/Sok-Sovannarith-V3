import { Box, Flex, GridItem, Presence, SimpleGrid, useDisclosure } from "@chakra-ui/react";
// Component
import HeaderSection from "./HeaderSection";
import AboutUsSection from "./AboutMeSection";
import WorkExperienceSection from "./WorkExperienceSection";
import { useEffect } from "react";

const Home = () => {
  const { open, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Presence
        lazyMount
        unmountOnExit
        present={open}
        animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
        animationDuration="1000ms"
      >
        <Box marginBottom={{ base: "2rem", lg: "3rem" }}>
          <HeaderSection />
        </Box>
      </Presence>
      <SimpleGrid columns={12} gap="1rem">
        <GridItem colSpan={{ base: 12, lg: 5 }}>
          <Flex direction="column" gap="1rem">
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <AboutUsSection />
            </Presence>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 7 }}>
          <Flex direction="column" gap="1rem">
            <Presence
              lazyMount
              unmountOnExit
              present={open}
              animationStyle={{ _open: "scale-fade-in", _closed: "scale-fade-out" }}
              animationDuration="1000ms"
            >
              <WorkExperienceSection />
            </Presence>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Home;
