import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormLabelProps,
    Input,
    InputProps,
  } from "@chakra-ui/react";
  import { get } from "lodash";
  import { RegisterOptions } from "react-hook-form";
  
  const getErrorMessage = (error: any) => {
    if (error?.type === "required") {
      return "Field is required";
    }
  };
  
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
    // const {
    //   formState: { errors },
    //   register,
    // } = hForm;
  
    // const error = get(errors, name);
  
    return (
      <FormControl  maxWidth="200px">
        <FormLabel
          opacity={isDisabled ? 0.5 : 1}
          fontSize="md"
          fontWeight="600"
          {...labelProps}
        >
          {title}
        </FormLabel>
        <Input
          isDisabled={isDisabled}
        //   {...register(name, {
        //     ...rules,
        //     valueAsNumber: props.type === "number",
        //   })}
          {...props}
          borderColor="#9fb1bd"
        />
        <FormErrorMessage mt={1}>
            Field required
          {/* {error?.message || getErrorMessage(error)} */}
        </FormErrorMessage>
      </FormControl>
    );
  }
  
  export default CommonInputField;
  