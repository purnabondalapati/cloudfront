import { useEffect, useState } from "react";
import { HStack, Stack, Box, Heading, VStack } from "@chakra-ui/react";
import {
    useFieldArray,
    useForm,
    Controller,
    UseFormReturn,
    UseFieldArrayReturn,
  } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "components/common/Buttons";
import CommonInputField from "components/common/InputField";
import Layout from "components/Layout";
import Batches from "components/delivery-planner/batches"

export class PurchaseOrderDetailsInterface {
    bootcampName: string = ''
  }
const Create = () => {

    // const removeExtraProps = (obj: any, classObj: any): any => {
    //     return classObj;
    //   };

    // const poForm = useForm({
    //     mode: "onChange",
    //     defaultValues: removeExtraProps(
    //       {},
    //       new PurchaseOrderDetailsInterface()
    //     ),
    //   });

    // const { control } = poForm;
    // const { fields, append, remove } = useFieldArray({
    //     control,
    //     name: `batches`,
    //   });

    // const handleAdd = () => {
    //     append('bootcampName');
    // }

  return (
    <VStack p={6} maxW="89%" align={'stretch'} spacing={7}>
      <Stack
        direction={["column", "row"]}
        align={"stretch"}
        justifyContent="space-between"
        alignItems={["flex-start", "center"]}
      >
        <Heading>Create Bootcamp</Heading>
        <HStack alignItems={"center"}>
          <SecondaryButton>Save as draft</SecondaryButton>
          <PrimaryButton>Next</PrimaryButton>
        </HStack>
      </Stack>
      <Box>
      <CommonInputField 
      hForm={{}}
       name={`bootcampName`}
       rules={{
        required: "Field is required",
      }}
      title="Bootcamp Name"
      type="text"
      placeholder="Enter bootcamp name"
      />
      <Batches />
      {/* <PrimaryButton mt="30px" order={2}>
        + Add one more batch
      </PrimaryButton> */}

      </Box>
            
    </VStack>
  );
};

Create.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Create;
