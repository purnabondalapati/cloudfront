import {
  FormControl,
  FormLabel,
  Input,
  Image,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "components/common/Buttons";
// import { useDispatch } from "react-redux";
// import { login } from "src/redux/slices/authSlice";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<any>();

  // const dispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    // dispatch(
    //   login({
    //     email: e.email,
    //     password: e.password,
    //     loggedIN: true,
    //   })
    // );
  };
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
      <form onSubmit={handleSubmit(handleLogin)}>
        <Image src="/images/logo2.png" alt="logo" mx="auto" />
        <FormControl mt={14}>
          <FormLabel fontWeight="600">Email Address</FormLabel>
          <Input
            border="2px solid #c3cfd9"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <FormErrorMessage mt={1}>Email is required</FormErrorMessage>
        </FormControl>
        <FormControl mt={5}>
          <FormLabel fontWeight="600">Password</FormLabel>
          <Input
            border="2px solid #c3cfd9"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
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
