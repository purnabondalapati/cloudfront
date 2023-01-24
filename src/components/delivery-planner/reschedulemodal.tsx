import React, { useState } from "react";
import { VStack, HStack, Text, RadioGroup, Radio } from "@chakra-ui/react";
import CommonInputField from "components/common/InputField";
import CustomModal from "components/common/customModal";
import { CustomReactSelect } from "components/common/CustomReactSelect";
import {
  removeExtraProps,
  PurchaseOrderDetailsInterface,
} from "pages/bootcamp/create";
import { useForm } from "react-hook-form";

const RescheduleModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const sessionForm = useForm({
    mode: "onChange",
    defaultValues: removeExtraProps({}, new PurchaseOrderDetailsInterface()),
  });

  const daysData = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];

  const [value, setValue] = useState("0");
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <RadioGroup onChange={setValue} value={value}>
        <VStack align={"stretch"} spacing={3} pb={5}>
          <HStack>
            <Radio value="1">Move the current and subsequent by</Radio>
            <CustomReactSelect
              hForm={{ sessionForm }}
              name={`rescheduleDay`}
              options={daysData}
              rules={{ required: "Field is required" }}
              maxWidth="90px"
              placeholder=""
              isDisabled={value === "1" ? false : true}
            />
            <Text>days</Text>
          </HStack>
          <Radio value="2">
            Move the current session to specific date and time without altering
            the other sessions
          </Radio>
        </VStack>
        {value === "2" && (
          <VStack
            align={"stretch"}
            p={4}
            border="1px solid #c3cfd9"
            borderRadius={6}
          >
            <CommonInputField
              hForm={{}}
              title="Reschedule Date"
              name={`rescheduleDate`}
              rules={{ required: "Field is required" }}
              type="date"
            />
            <HStack spacing={3}>
              <CommonInputField
                hForm={{}}
                title="Session Start Time"
                name={`rescheduleStartTime`}
                rules={{ required: "Field is required" }}
                type="time"
              />
              <CommonInputField
                hForm={{}}
                title="Session End Time"
                name={`sessionEndTime`}
                rules={{ required: "Field is required" }}
                type="time"
              />
            </HStack>
          </VStack>
        )}
      </RadioGroup>
    </CustomModal>
  );
};

export default RescheduleModal;
