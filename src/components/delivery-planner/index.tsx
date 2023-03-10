import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { AgGridAutoResizeToContainer } from "components/common/AgGrid.tsx/AgGridAutoResizeToContainer";


const enum IsLiveClass {
  true = "Yes",
  false = "No",
}

const enum BootCamp {
  B2B = 0,
  B2C = 1,
}

export const DeliveryPlannerSection = () => {

  const actionCellRenderer = () => {
    return (
      <HStack spacing={1} h="100%">
        <Button
          colorScheme="blue"
          size="xs"
          variant="solid"
          onClick={() => (window.location.href = "/bootcamp/create")}
        >
          Edit
        </Button>
        <Button
          colorScheme="blue"
          size="xs"
          variant="outline"
          onClick={() => (window.location.href = "/bootcamp/view")}
        >
          View &#x2192;
        </Button>
      </HStack>
    );
  };

  const columnDefs = [
    {
      headerName: "Name",
      field: "Name",
      minWidth: 130,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "BootCamp Type",
      field: "BootcampType",
      minWidth: 130,
    },
    {
      headerName: "Live Class",
      field: "IsLiveClass",
      minWidth: 130,
    },
    {
      headerName: "Start Date",
      field: "StartDate",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
    },
    {
      headerName: "End Date",
      field: "EndDate",
      minWidth: 150,
      sortable: true,
      unSortIcon: true,
      suppressNavigable: true,
      cellClass: "no-border",
    },
    {
      headerName: "Action",
      minWidth: 150,
      cellRenderer: actionCellRenderer,
      editable: false,
      colId: "action",
      suppressNavigable: true,
      cellClass: "no-border",
    },
  ];

  let yourDate = new Date().toISOString().split("T")[0];

  const rowData = [
    {
      Id: 1,
      Name: "Bob",
      BootcampType: BootCamp.B2B,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 93,
      Name: "Alice",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.false,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 71,
      Name: "Charlie",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 87,
      Name: "David",
      BootcampType: 2,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 33,
      Name: "Rahh",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 51,
      Name: "Riya",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.false,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 2,
      Name: "Ran",
      BootcampType: 2,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 13,
      Name: "Vijay",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.false,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 9,
      Name: "Nandhuni",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.false,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 17,
      Name: "Suganth",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 15,
      Name: "JK",
      BootcampType: 2,
      IsLiveClass: IsLiveClass.false,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
    {
      Id: 133,
      Name: "Syed",
      BootcampType: 1,
      IsLiveClass: IsLiveClass.true,
      StartDate: yourDate,
      EndDate: yourDate,
      CxAgentId: "787",
    },
  ];

  return (
    <AgGridAutoResizeToContainer
      rowData={rowData}
      columnDefs={columnDefs}
      pagination={true}
      paginationPageSize={10}
      paginateChildRows={true}
    />
  );
};

export default DeliveryPlannerSection;
