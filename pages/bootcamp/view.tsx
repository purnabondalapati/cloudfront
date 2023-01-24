import {
  HStack,
  Box,
  Heading,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Layout from "components/Layout";
import { PrimaryButton } from "components/common/Buttons";
import RescheduleModal from "components/delivery-planner/reschedulemodal";
import EditAgendaModal from "components/delivery-planner/editagendamodal";
import { AgGridAutoResizeToContainer } from "components/common/AgGrid.tsx/AgGridAutoResizeToContainer";

const ViewBootcamp = () => {

  const {
    isOpen: isPlannerRescheduleOpen,
    onClose: onPlannerRescheduleClose,
    onOpen: onPlannerRescheduleOpen,
  } = useDisclosure();

  const {
    isOpen: isAgendaEditOpen,
    onClose: onAgendaEditClose,
    onOpen: onAgendaEditOpen,
  } = useDisclosure();

  const actionCellRenderer = () => {
    return (
      <HStack spacing={1} h="100%">
        <Button
          colorScheme="blue"
          size="xs"
          variant="solid"
          onClick={() => onPlannerRescheduleOpen()}
        >
          Reschedule
        </Button>
        <Button colorScheme="blue" size="xs" variant="outline">
          Cancel
        </Button>
      </HStack>
    );
  };

  const actionEditAgenda = (field: any) => {
    return (
      <HStack spacing={1} h="100%">
        <EditIcon cursor="pointer" onClick={() => onAgendaEditOpen()} />
        <Text>{field.value}</Text>
      </HStack>
    );
  };
  const columnDefs = [
    {
      headerName: "Day",
      field: "Day",
      minWidth: 130,
    },
    {
      headerName: "Session",
      field: "Session",
      minWidth: 130,
    },
    {
      headerName: "Agenda",
      field: "Agenda",
      minWidth: 230,
      cellRenderer: actionEditAgenda,
    },
    {
      headerName: "Trainer",
      field: "Trainer",
      minWidth: 100,
    },
    {
      headerName: "Course",
      field: "Course",
      minWidth: 200,
    },
    {
      headerName: "Action",
      width: 200,
      cellRenderer: actionCellRenderer,
      editable: false,
      colId: "action",
      suppressNavigable: true,
      cellClass: "no-border",
    },
  ];
  const rowData = [
    {
      Id: 1,
      Day: "Dec-1",
      Session: "10AM - 12PM",
      Agenda: "Intro of session",
      Trainer: "Ashish",
      Course: "MatLab for mechanical Engineering",
    },
    // ,{
    //     Id: 2,
    //     Day: "Dec-4",
    //     Session: '10AM - 12PM',
    //   Agenda: 'Intro of MatLab for mechanical Engineering',
    //   Trainer: 'Ashish',
    //   course: 'MatLab for mechanical Engineering'
    //   },{
    //     Id: 3,
    //     Day: "Oct-9",
    //     Session: '11AM - 12PM',
    //   Agenda: 'Intro of session',
    //   Trainer: 'Ashish',
    //   course: 'MatLab for mechanical Engineering'
    //   },
    //   {
    //     Id: 3,
    //     Day: "Oct-9",
    //     Session: '11AM - 12PM',
    //   Agenda: 'Intro of session',
    //   Trainer: 'Ashish',
    //   course: 'MatLab for mechanical Engineering'
    //   },
  ];
  return (
    <>
      <EditAgendaModal isOpen={isAgendaEditOpen} onClose={onAgendaEditClose} />

      <RescheduleModal
        isOpen={isPlannerRescheduleOpen}
        onClose={onPlannerRescheduleClose}
      />

      <Box p={6} maxW="89%">
        <HStack align={"stretch"} justifyContent="space-between">
          <Heading size="lg">Hello - Automative Bootcamp</Heading>
          <PrimaryButton>Publish</PrimaryButton>
        </HStack>
        <Tabs border="none !important" mt={5} px={0}>
          <TabList border="none !important">
            <Tab
              borderBottomWidth="3.5px"
              fontWeight="medium"
              _selected={{
                color: "#0070D2",
                borderBottom: "3px solid #0070D2",
              }}
              px={0}
              mr={8}
            >
              Module
            </Tab>
          </TabList>

          <TabPanels pt={2}>
            <TabPanel p={0}>
              <AgGridAutoResizeToContainer
                rowData={rowData}
                columnDefs={columnDefs}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

ViewBootcamp.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ViewBootcamp;
