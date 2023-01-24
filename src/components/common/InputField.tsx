import {
  FormControl,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { RegisterOptions } from "react-hook-form";

interface Props {
  title: string;
  hForm: any;
  isDisabled?: boolean;
  name: string;
  rules?: RegisterOptions;
  labelProps?: FormLabelProps;
}

export type CommonInputFieldProps = Props & Omit<InputProps, "name">;

const CommonInputField = ({
  title,
  hForm,
  isDisabled,
  name,
  rules,
  labelProps,
  ...props
}: CommonInputFieldProps) => {
  return (
    <FormControl maxWidth="200px">
      <FormLabel
        opacity={isDisabled ? 0.5 : 1}
        fontSize="md"
        fontWeight="600"
        {...labelProps}
      >
        {title}
      </FormLabel>
      <Input isDisabled={isDisabled} {...props} borderColor="#9fb1bd" />
    </FormControl>
  );
};

export default CommonInputField;