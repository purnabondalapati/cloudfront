import {
  FormControl,
  FormLabel,
  Input,
  Image,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { PrimaryButton } from "components/common/Buttons";

const Login = () => {
  return (
    <Box
      maxW="500px"
      w="90vw"
      p={4}
      mx="auto"
      pos="absolute"
      left="50%"
      transform="translate(-50%,30%)"
    >
      <form>
        <Image src="/images/logo2.png" alt="logo" mx="auto" />
        <FormControl mt={14}>
          <FormLabel fontWeight="600">Email Address</FormLabel>
          <Input border="2px solid #c3cfd9" placeholder="Email" type="email" />
          <FormErrorMessage mt={1}>Email is required</FormErrorMessage>
        </FormControl>
        <FormControl mt={5}>
          <FormLabel fontWeight="600">Password</FormLabel>
          <Input
            border="2px solid #c3cfd9"
            placeholder="Password"
            type="password"
          />
          <FormErrorMessage mt={1}>Password is required</FormErrorMessage>
        </FormControl>
        <PrimaryButton type="submit" w="100%" mt={10}>
          Login
        </PrimaryButton>
      </form>
    </Box>
  );
};

export default Login;
