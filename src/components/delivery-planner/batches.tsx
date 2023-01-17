import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import CommonInputField from "components/common/InputField";
import NumberedInputField from "components/common/NumberInputField";
import { CustomReactSelect } from "components/common/CustomReactSelect";

const enum IsLiveClass {
  true = "Yes",
  false = "No",
}

const enum BootCamp {
  B2B = 0,
  B2C = 1,
}

const Batches = () => {
  const daysData = [
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];
  return (
    <VStack
      align={"stretch"}
      border="1px solid #A5A5A5"
      borderRadius="6"
      spacing={4}
      mt={5}
      p={5}
    >
      <CommonInputField
        hForm={{}}
        name={`moduleName`}
        rules={{
          required: "Field is required",
        }}
        title="Module Name"
        type="text"
        placeholder="Enter module name"
      />
      <SimpleGrid columns={[1, 2, null, 3, 4]}>
        <CommonInputField
          hForm={{}}
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
          hForm={{}}
          title="Number Of Days"
          name={`noOfDays`}
        />

        <NumberedInputField hForm={{}} title="Repeat" name={`repeat`} />

        <CustomReactSelect
          hForm={{}}
          name={`repeatCadence`}
          title="Repeat Cadence"
          options={daysData}
          rules={{ required: "Field is required" }}
        />
      </SimpleGrid>
    </VStack>
  );
};

export default Batches;
