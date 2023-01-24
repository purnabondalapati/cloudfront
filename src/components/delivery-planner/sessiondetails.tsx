import React from "react";
import {Stack, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import CommonInputField from "components/common/InputField";
import { CustomReactSelect } from "components/common/CustomReactSelect";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import {
  PurchaseOrderDetailsInterface,
  batchInitialValues,
} from "pages/bootcamp/create";
import CommonArrayField from "components/common/commonArrayField";

const SessionDetails = ({
  form,
}: {
  form: UseFormReturn<PurchaseOrderDetailsInterface>;
}) => {
  const sessionData = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const { control, watch } = form;
  const index = 0;
  const { fields, append, remove } = useFieldArray({
    control,
    name: `batches.${index}.sessionData`,
  });

  const noOfSessionsInDay = watch(`batches.${index}.noOfSessionsInDay`);

  if(noOfSessionsInDay) {

    const newVal = parseInt(noOfSessionsInDay) || 0;
    const oldVal = fields.length;
    if (newVal > oldVal) {
      for (let i = oldVal; i < newVal; i++) {
        append(batchInitialValues);
      }
    } else {
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1);
      }
    }
  }
  
  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Stack align="stretch" direction={["column", "row"]} spacing={8}>
      <CustomReactSelect
        hForm={form}
        name={`batches.${index}.noOfSessionsInDay`}
        title="Number of sessions in a day"
        options={sessionData}
        rules={{ required: "Field is required" }}
      />
      <VStack width={"full"}>
        {fields.map((data, index) => {
          return (
            <CommonArrayField
              key={data.id}
              removeButton={
                index !== 0 && (
                  <DeleteIcon
                    color="red.500"
                    onClick={() => handleRemove(index)}
                    cursor="pointer"
                  />
                )
              }
            >
              <Stack
                direction={["column", "row"]}
                flexWrap="wrap"
                justifyContent={"space-between"}
              >
                <CommonInputField
                  hForm={form}
                  title="Session Start Time"
                  name={`sessionStartTime`}
                  rules={{ required: "Field is required" }}
                  type="time"
                />
                <CommonInputField
                  hForm={form}
                  title="Session End Time"
                  name={`sessionEndTime`}
                  rules={{ required: "Field is required" }}
                  type="time"
                />
                <CommonInputField
                  hForm={form}
                  title="Trainer"
                  name={`trainer`}
                  rules={{ required: "Field is required" }}
                />
              </Stack>
            </CommonArrayField>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default SessionDetails;
