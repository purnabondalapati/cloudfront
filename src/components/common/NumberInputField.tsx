import {
  FormControl,
  FormLabel,
  FormLabelProps,
  InputProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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

const NumberedInputField = ({
  title,
  hForm,
  name,
  rules,
  labelProps,
  ...props
}: CommonInputFieldProps) => {
  return (
    <FormControl maxWidth="200px">
      <FormLabel opacity={1} fontSize="md" fontWeight="600">
        {title}
      </FormLabel>
      <NumberInput min={1} defaultValue={1} borderColor="#9fb1bd">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default NumberedInputField;
