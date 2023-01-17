import { Box } from "@chakra-ui/react";
import Dashboard from "components/dashboard"
import Layout from "components/Layout";

const Home = () => {
  return (
    <Box>
      <Dashboard/>
    </Box>  
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
