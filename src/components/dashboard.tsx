import { VStack, Wrap } from "@chakra-ui/react";
import DashboardCard from "components/common/DashboardCard";
import { dashboardDetails } from "src/data/dashboardData";

export const Dashboard = () => {
  return (
    <VStack
      px={[3, 6]}
      alignItems={["center", "flex-start"]}
      spacing={[3, 6]}
      overflowY="auto"
    >
      <Wrap
        spacing={[3, 6]}
        justify={["center", null, "flex-start"]}
        mt={[3, 6]}
      >
        {dashboardDetails.map((detail, index) => (
          <DashboardCard detail={detail} key={index}  />
        ))}
      </Wrap>
    </VStack>
  );
};

export default Dashboard;
