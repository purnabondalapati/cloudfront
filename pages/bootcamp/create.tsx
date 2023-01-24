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
import { CustomReactSelect } from "components/common/CustomReactSelect";

export class PurchaseOrderDetailsInterface {
    bootcampName: string = '';
    batches: BatchInterface[] = [];
  }

export class BatchInterface {
  moduleName: string = '';
  courseName: string = '';
  startDate : string = '';
  noOfDays : string = '';
  repeat : string = '';
  repeatCadence : string = '';
  noOfSessionsInDay: string = '';
  sessionData : SessionInterface[] = [];
}

export class SessionInterface {
  sessionStartTime : string = '';
  sessionEndTime : string = '';
  trainerName : string = '';
}  
export const batchInitialValues: SessionInterface = {
  sessionStartTime : '',
  sessionEndTime :'',
  trainerName :'',
};

export const batchdata: BatchInterface = {
  moduleName: '',
  courseName: '',
  startDate :  '',
  noOfDays :  '',
  repeat :  '',
  repeatCadence :  '',
  noOfSessionsInDay:  '',
  sessionData : [],
}


const Create = () => {

    const removeExtraProps = (obj: any, classObj: any): any => {
        return classObj;
      };

      const apidata = {
        "_id": "63ca62ac9b0caca6b1ac63bd",
        "lastUpdatedBy": "62d7ac2156128af91c68d110",
        "orderType": "poBased",
        "licenseType": "students",
        "noOfLicenses": "",
        "poProofUrls": [],
        "batches": [
            {
                "moduleName": 'hjhjhj',
      "courseName": 'dsfsdfs',
      "startDate" :  '23-09-2023',
      "noOfDays" :  '34',
      "repeat" :  '2',
      "repeatCadence" :  'day',
      "noOfSessionsInDay":  '4',
      "sessionData" : [{
        "sessionStartTime" : '03:23',
      "sessionEndTime" :'04:44',
      "trainerName" :'vcvhjhjbhj',
      }],
            }
        ],
        "account": "",
        "poValue": "",
        "poCurrency": "INR",
        "programName": "",
        "includeInReports": true,
        "clientPocs": [
            {
                "name": "",
                "email": "",
                "phone": "",
                "cc": "+91"
            }
        ],
        "clientFinancePocs": [
            {
                "name": "",
                "email": "",
                "phone": "",
                "cc": "+91"
            }
        ],
        "accountManagers": [],
        "cxAgents": [],
        "areCxAgentsAtBatchLevel": false,
        "batchCxAgents": [
            {
                "cxAgent": null
            }
        ],
        "isO3Supported": false,
        "paidBy": "Institution",
        "isTicketSupported": false,
        "isGroupSessionNeeded": false,
        "isSoftwareSupportNeeded": false,
        "isGroupSessionSupported": false,
        "supportedSoftwares": [],
        "noOfGroupSessionsPerWeek": "0",
        "shouldShowInvoices": false,
        "isCallSupportAvailable": false,
        "isForumAccessAvailable": false,
        "isHapcSupported": true,
        "isCertificateSupported": true,
        "challenges": [
            "Project",
            "Essay",
            "MCQ"
        ],
        "isChatBotSupported": false,
        "ticketCategories": [
            "Next Course Access",
            "Get in Touch",
            "Certificate Request",
            "Dashboard Related Issues",
            "Others"
        ],
        "dealStartDate": "",
        "dealEndDate": "",
        "supportEndDate": "",
        "batchMilestones": [
            {
                "milestones": [
                    {
                        "type": "normal",
                        "revenuePercentage": "",
                        "invoiceDate": "",
                        "invoiceCadence": "monthly"
                    }
                ]
            }
        ],
        "createdAt": "2023-01-20T09:45:16.894Z",
        "updatedAt": "2023-01-20T09:45:16.894Z",
        "__v": 0
    }

    // const poForm = useForm({
    //     mode: "onChange",
    //     defaultValues: removeExtraProps(
    //       {},
    //       new PurchaseOrderDetailsInterface()
    //     ),
    //   });

    const sessionForm = useForm({
        mode: "onChange",
        defaultValues: removeExtraProps(
          {},
          new PurchaseOrderDetailsInterface()
        ),
      });

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
                      name={`account`}
                      title="Account"
                      options={[{value: '1', label: '1'}]}
                      rules={{ required: "Field is required" }}
                    />
        </HStack>
     
      <Batches 
       form = {sessionForm}
      />
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
