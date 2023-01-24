import { Button, ButtonProps } from "@chakra-ui/react";

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      bg="primary"
      color="#FFFFFF"
      border="1px solid"
      borderColor="primary"
      _hover={{
        color: "primary",
        bg: "white",
      }}
      {...props}
    />
  );
};

const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button
      bg="white"
      color="primary"
      border="1px solid"
      variant="outline"
      borderColor="primary"
      {...props}
    />
  );
};

export { PrimaryButton, SecondaryButton };
