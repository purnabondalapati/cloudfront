import { VStack, Box , Text  } from "@chakra-ui/react";
import Link from "next/link";

const DashboardCard = ({detail}: {detail: any}) => {
    return (
        <Link href={detail.internalLink} passHref>
      <VStack
        w="280px"
        h="172px"
        bg="rgba(0, 112, 210, 0.1)"
        pr={3}
        color="#0A1931"
        border="1px solid #DDDBDA"
        borderRadius={"lg"}
        
      >
        <Box flex="1" pl={6} pt={4} pb="10px">
        <Text fontWeight={"normal"} fontSize="18px" lineHeight="1.11">
     {detail.tag}
    </Text>
        </Box>
      </VStack>
      </Link>
    );
  };

  export default DashboardCard;