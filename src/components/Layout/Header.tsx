import {
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Box
      flex="0 0 72px"
      bg="#FFFFFF"
      pl="32px"
      pr="16px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.15)"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        maxW="1600px"
        mx="auto"
      >
        <Link href={"/"}>
          <Image
            src="/images/logo2.png"
            alt="logo"
            width="220px"
            height="26px"
            pl={6}
          />
        </Link>
      </Flex>
    </Box>
  );
}
