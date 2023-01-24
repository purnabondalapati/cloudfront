import { Box, HStack } from "@chakra-ui/react";

const CommonArrayField = ({
  children,
  removeButton,
}: {
  children: React.ReactNode;
  removeButton?: React.ReactNode;
}) => {
  return (
    <Box width={"100%"}>
      <Box border="1px solid #c3cfd9" p={4} borderRadius="3px">
        <HStack justify="flex-end">{removeButton}</HStack>
        {children}
      </Box>
    </Box>
  );
};

export default CommonArrayField;
