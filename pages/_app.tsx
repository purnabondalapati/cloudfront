import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Header from "components/Header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box maxW="1600px" mx="auto">
        <Component {...pageProps} key={router.asPath} />
      </Box>
    </ChakraProvider>
  );
}
