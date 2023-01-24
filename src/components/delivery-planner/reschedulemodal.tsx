import React, { useState } from "react";
import {
  ButtonGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  CheckboxGroup,
  Checkbox,
  VStack,
  Box,
  HStack,
  Text,
  RadioGroup,
  Radio,
  FormControl,
} from "@chakra-ui/react";
import Select from "react-select";
import { PrimaryButton, SecondaryButton } from "components/common/Buttons";
import { CustomReactSelect } from "components/common/CustomReactSelect";
import CommonInputField from "components/common/InputField";
import CustomModal from "components/common/customModal";

const RescheduleModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {

    const daysData = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
      ];
    
      const [value , setValue] = useState('0')
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
        <RadioGroup onChange={setValue} value={value}>
        <VStack align={'stretch'} spacing={3} pb={5}  >
            <HStack>
            <Radio value='1'>Move the current and subsequent by</Radio>
            {/* <CustomReactSelect
                      hForm={{}}
                      name={`rescheduleDay`}
                      options={daysData}
                      rules={{ required: "Field is required" }}
                      maxWidth='90px'
                      placeholder=''
                      isDisabled={value === '1' ? false : true}
                    /> */}
                    <FormControl maxWidth={'90px'}>
            
            <Select
              name={'rescheduleDay'}
              options={daysData}
              isDisabled={value === '1' ? false : true}
              menuPortalTarget={null}
              placeholder=''
            />
            {/* <FormErrorMessage mt={1}>{errors?.message}</FormErrorMessage> */}
          </FormControl>
             <Text>days</Text>       
            </HStack>
            <Radio value='2'>Move the current session to specific date and time without altering the other sessions</Radio>
        </VStack>
        {
            value === '2' && (
                <VStack align={'stretch'} p={4} border='1px solid #c3cfd9' borderRadius={6}>
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
            )
        }
        </RadioGroup>
        </CustomModal>
  );
};

export default RescheduleModal;
