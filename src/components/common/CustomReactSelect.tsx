import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    FormLabelProps,
  } from "@chakra-ui/react";
  import { Controller, RegisterOptions } from "react-hook-form";
  import Select, {
    ActionMeta,
    MultiValue,
    OnChangeValue,
    SingleValue,
  } from "react-select";

interface SelectOptionInterface {
    value: number | string | boolean;
    label: string;
    isDisabled?: boolean;
    isFixed?: boolean;
    __isNew__?: boolean;
  }

export interface CustomReactSelectProps {
    hForm: any;
    name: string;
    title?: string;
    options: SelectOptionInterface[];
    isMulti?: boolean;
    closeMenuOnSelect?: boolean;
    isDisabled?: boolean;
    rules?: RegisterOptions;
    placeholder?: string;
    showDropdownOnModal?: boolean;
    labelProps?: FormLabelProps;
  }
  const orderOptions = (values: readonly SelectOptionInterface[]) => {
    return values
      .filter((v) => v.isFixed)
      .concat(values.filter((v) => !v.isFixed));
  };
  

export const CustomReactSelect = ({
    hForm,
    name,
    title,
    options,
    isMulti,
    closeMenuOnSelect,
    isDisabled,
    rules,
    placeholder,
    showDropdownOnModal,
    labelProps,
  }: CustomReactSelectProps) => {
    // const {
    //   control,
      // formState: { errors },
    // } = hForm;
  
    // const error = get(errors, name);
  
    const optionChange = (
      value: (string | number | boolean)[],
      onChange: (value: (string | number | boolean)[]) => void,
      v: OnChangeValue<SelectOptionInterface, true>,
      actionMeta: ActionMeta<SelectOptionInterface>
    ) => {
      let updatedValue = v;
  
      switch (actionMeta.action) {
        case "remove-value":
        case "pop-value":
          if (actionMeta.removedValue.isFixed) {
            return;
          }
          break;
        case "clear":
          updatedValue = options
            .filter((o) => value.includes(o.value))
            .filter((v) => v.isFixed);
          break;
      }
  
      onChange((updatedValue as SelectOptionInterface[]).map((i) => i.value));
    };
  
    return (
          <FormControl  maxWidth="200px">
            {title && (
              <FormLabel
                opacity={isDisabled ? 0.5 : 1}
                fontSize="md"
                fontWeight="600"
                {...labelProps}
              >
                {title}
              </FormLabel>
            )}
            <Select
              isMulti={isMulti}
              name={name}
              
              // value={}
              options={options}
              closeMenuOnSelect={closeMenuOnSelect}
              placeholder={placeholder ?? "Select a value"}
              isDisabled={isDisabled}
              styles={{
                control: (provided: any, state: any) => {
                  return {
                    ...provided,
                    borderColor: "#9fb1bd",
                  };
                },
                menuPortal: (provided: any, state: any) => {
                  return {
                    ...provided,
                    zIndex: 9999,
                  };
                },
              }}
              menuPortalTarget={
                showDropdownOnModal === true ? document.body : null
              }
            />
            {/* <FormErrorMessage mt={1}>{error?.message}</FormErrorMessage> */}
          </FormControl>
      
    );
  };