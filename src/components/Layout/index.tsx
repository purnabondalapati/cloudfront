import React from "react";
import { VStack, Flex, Box } from "@chakra-ui/react";
import Header from "./Header";
import SideMenu from "./SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VStack spacing={0} align="stretch" h="100vh" >
      <Header />
      <Flex flex="1" >
        <Box display={["none", null, "block"]}>
          <SideMenu />
        </Box>
        <Flex direction="column" h="100%" flex="1">
          {children}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Layout;
