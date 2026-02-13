import { Box, Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
// Component
import HeaderSection from "./HeaderSection";
import AboutUsSection from "./AboutUsSection";
import WorkExperienceSection from "./WorkExperienceSection";

const Home = () => {
  return (
    <>
      <Box marginBottom="3rem">
        <HeaderSection />
      </Box>
      <SimpleGrid columns={12} gap="1rem">
        <GridItem colSpan={5}>
          <Flex direction="column" gap="1rem">
            <AboutUsSection />
          </Flex>
        </GridItem>
        <GridItem colSpan={7}>
          <Flex direction="column" gap="1rem">
            <WorkExperienceSection />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Home;
