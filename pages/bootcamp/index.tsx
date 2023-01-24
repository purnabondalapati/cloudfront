import {
    Box,
    Heading,
    Tabs,
    TabList,
    Tab,
    Stack,
    TabPanels,
    TabPanel,
  } from "@chakra-ui/react";
  import Layout from "components/Layout";
  import { PrimaryButton } from "components/common/Buttons";
  import DeliveryPlannerSection from "components/delivery-planner";
  
  const DeliveryPlanner = () => {
    const bootcampCreate = () => {
      window.location.href = `/bootcamp/create`;
    };
    return (
      <Box p={5}>
        <Stack
          direction={["column", "row"]}
          align={"stretch"}
          justifyContent="space-between"
          alignItems={["flex-start", "center"]}
          my={2}
        >
          <Heading fontSize="lg">Delivery Planner & Schedule</Heading>
          <PrimaryButton onClick={bootcampCreate}>
            Create new bootcamp
          </PrimaryButton>
        </Stack>
        <Tabs border="none !important" mt={5} px={0}>
          <TabList border="none !important">
            <Tab
              borderBottomWidth="3.5px"
              fontWeight="medium"
              _selected={{
                color: "#0070D2",
                borderBottom: "3px solid #0070D2",
              }}
              px={0}
              mr={8}
            >
              Delivery Planner
            </Tab>
            <Tab
              borderBottomWidth="3.5px"
              fontWeight="medium"
              _selected={{
                color: "#0070D2",
                borderBottom: "3px solid #0070D2",
              }}
              px={0}
              mr={8}
            >
              Draft Plans
            </Tab>
          </TabList>
          <TabPanels pt={2}>
            <TabPanel px={0}>
              <DeliveryPlannerSection />
            </TabPanel>
            <TabPanel  px={0}>Welcome</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  };
  
  DeliveryPlanner.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
  };
  
  export default DeliveryPlanner;
  