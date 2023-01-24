import { FormControl, FormLabel, FormLabelProps } from "@chakra-ui/react";
import { Controller, RegisterOptions } from "react-hook-form";
import Select from "react-select";
import React, { useId } from 'react';

const styles = {
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
  multiValue: (base: any, state: { data: SelectOptionInterface }) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base: any, state: { data: SelectOptionInterface }) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base: any, state: { data: SelectOptionInterface }) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

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
  maxWidth?: string;
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
  maxWidth,
}: CustomReactSelectProps) => {
  
  const { control } = hForm;
  const id = useId();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value: fieldValue, name } }) => (
        <FormControl maxWidth={maxWidth ? maxWidth : "220px"}>
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
            name={name}
            onChange={(e, a) => {
              onChange((e as SelectOptionInterface)?.value);
            }}
            onBlur={onBlur}
            value={
              isMulti
                ? orderOptions(
                    options.filter((option) =>
                      fieldValue.includes(option.value)
                    )
                  )
                : options.find((option) => option.value === fieldValue)
            }
            instanceId={id}
            options={options}
            closeMenuOnSelect={closeMenuOnSelect}
            placeholder={placeholder ?? "Select a value"}
            isDisabled={isDisabled}
            styles={styles}
            menuPortalTarget={
              showDropdownOnModal === true ? document.body : null
            }
          />
        </FormControl>
      )}
    />
  );
};