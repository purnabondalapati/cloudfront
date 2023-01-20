import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Box,
  HStack,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import CommonInputField from "components/common/InputField";
import NumberedInputField from "components/common/NumberInputField";
import { CustomReactSelect } from "components/common/CustomReactSelect";
import {
  useFieldArray,
  Controller,
  UseFormReturn,
  UseFieldArrayReturn,
} from "react-hook-form";
import {
  PurchaseOrderDetailsInterface,
  batchdata,
} from "pages/bootcamp/create";
import SessionDetails from "./sessiondetails";
import { PrimaryButton } from "components/common/Buttons";
import CommonArrayField from "components/common/commonArrayField";

const enum IsLiveClass {
  true = "Yes",
  false = "No",
}

const enum BootCamp {
  B2B = 0,
  B2C = 1,
}

const Batches = ({
  form,
}: {
  form: UseFormReturn<PurchaseOrderDetailsInterface>;
}) => {
  const daysData = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];

  const { register, control, handleSubmit, reset, watch } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: `batches`,
  });
  let indexBefore: number;

  const handleAdd = () => {
    append(batchdata);
  };

  const handleRemove = (index: number) => {
    remove(index);
    indexBefore= index-1;
  };

  return (
    <Box>
      <Tabs border="none !important" mt={5} px={0}>
        <TabList border="none !important">
          {fields.map((data, index) => {
            return (
              <Tab
                borderBottomWidth="3.5px"
                fontWeight="medium"
                _selected={{
                  color: "#0070D2",
                  borderBottom: "3px solid #0070D2",
                }}
                px={0}
                mr={8}
                isSelected={indexBefore == index ? true : false}
              >
                Module {index + 1}
              </Tab>
            );
          })}
          <PrimaryButton mt="3px" onClick={handleAdd} order={2}>
            Add
          </PrimaryButton>
        </TabList>

        <TabPanels pt={2}>
          {fields.map((data, index) => {
            return (
              <TabPanel p={0}>
                <VStack
                  align={"stretch"}
                  border="1px solid #A5A5A5"
                  borderRadius="6"
                  position="relative"
                  spacing={4}
                  mt={5}
                  p={5}
                >
                  {index !== 0 && (
                    <Box
                      pos={"absolute"}
                      bg="white"
                      px={2}
                      py={1}
                      m={3}
                      color={"red.600"}
                      fontWeight='700'
                      top="-10px"
                      right="-10px"
                      cursor='pointer'
                      onClick={() => handleRemove(index)}
                    >
                      X
                    </Box>
                  )}

                  <SimpleGrid spacing={6} columns={[1, 2, null, 3, 4]}>
                    <CommonInputField
                      hForm={form}
                      name={`moduleName`}
                      rules={{
                        required: "Field is required",
                      }}
                      title="Module Name"
                      type="text"
                      placeholder="Enter module name"
                    />
                    <CustomReactSelect
                      hForm={form}
                      name={`courseName`}
                      title="Course Name"
                      options={daysData}
                      rules={{ required: "Field is required" }}
                    />
                  </SimpleGrid>
                  <SimpleGrid
                    columns={[1, 2, null, 3, 4]}
                    spacing={4}
                    whiteSpace="nowrap"
                  >
                    <CommonInputField
                      hForm={form}
                      title="Start Date"
                      name={`startDate`}
                      //   rules={{
                      //     required: watchCustomCourseCreation ? "Field is required" : "",
                      //     min: {
                      //       value: 1,
                      //       message: "You can't create less than 1 course",
                      //     },
                      //     max: {
                      //       value: 100,
                      //       message: "you can't create more than 100 custom courses",
                      //     },
                      //   }}
                      type="date"
                      placeholder="Start Date"
                    />

                    <NumberedInputField
                      hForm={form}
                      title="Number Of Days"
                      name={`noOfDays`}
                    />

                    <NumberedInputField
                      hForm={{}}
                      title="Repeat"
                      name={`repeat`}
                    />

                    <CustomReactSelect
                      hForm={form}
                      name={`repeatCadence`}
                      title="Repeat Cadence"
                      options={daysData}
                      rules={{ required: "Field is required" }}
                    />
                  </SimpleGrid>
                  <Box>
                    <SessionDetails form={form} />
                  </Box>
                </VStack>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Batches;
