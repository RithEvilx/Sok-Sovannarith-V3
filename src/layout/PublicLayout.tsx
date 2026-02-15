import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <Box padding={{ base: "1rem", lg: "2rem 15%" }}>
      <Outlet />
    </Box>
  );
};

export default PublicLayout;
