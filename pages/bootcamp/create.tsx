import { HStack, Stack, Box, Heading, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "components/common/Buttons";
import CommonInputField from "components/common/InputField";
import Layout from "components/Layout";
import Batches from "components/delivery-planner/batches";
import { CustomReactSelect } from "components/common/CustomReactSelect";

export class PurchaseOrderDetailsInterface {
  bootcampName: string = "";
  accountName: string = "";
  batches: BatchInterface[] = [];
}

export class BatchInterface {
  moduleName: string = "";
  courseName: string = "";
  startDate: string = "";
  noOfDays: string = "";
  repeat: string = "";
  repeatCadence: string = "";
  noOfSessionsInDay: string = "";
  sessionData: SessionInterface[] = [];
}

export class SessionInterface {
  sessionStartTime: string = "";
  sessionEndTime: string = "";
  trainerName: string = "";
}
export const batchInitialValues: SessionInterface = {
  sessionStartTime: "",
  sessionEndTime: "",
  trainerName: "",
};

export const batchdata: BatchInterface = {
  moduleName: "",
  courseName: "",
  startDate: "",
  noOfDays: "",
  repeat: "",
  repeatCadence: "",
  noOfSessionsInDay: "",
  sessionData: [],
};

export const removeExtraProps = (obj: any, classObj: any): any => {
  return classObj;
};


const Create = () => {

  const sessionForm = useForm({
    mode: "onChange",
    defaultValues: removeExtraProps({}, new PurchaseOrderDetailsInterface()),
  });

  const daysData = [
    { value: "22", label: "18" },
    { value: "23", label: "20" },
    { value: "31", label: "36" },
  ];

  return (
    <VStack p={6} maxW="89%" align={"stretch"} spacing={7}>
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
        <HStack spacing={5}>
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
          <CustomReactSelect
            hForm={sessionForm}
            name={`accountName`}
            title="Account"
            options={daysData}
            rules={{ required: "Field is required" }}
          />
        </HStack>

        <Batches form={sessionForm} />
      </Box>
    </VStack>
  );
};

Create.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Create;
