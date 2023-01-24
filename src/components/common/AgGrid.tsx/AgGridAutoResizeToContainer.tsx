import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import { GridApi, GridReadyEvent, RowClickedEvent } from "ag-grid-community";
import React, { useEffect, useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { useContainerWidth } from "./useContainerWidth";
import { useWindowSize } from "./useWindowSize";
import { Box } from "@chakra-ui/react";

export function AgGridAutoResizeToContainer({
  onGridReady,
  theme = "ag-theme-alpine",
  debounce = 0,
  ...props
}: AgGridReactProps & { theme?: string; debounce?: number }) {
  const [gridApi, setGridApi] = useState<GridApi | undefined>();
  const [windowWidth] = useWindowSize(debounce);
  const {width: containerWidth, ref} = useContainerWidth(debounce);
  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [windowWidth, containerWidth, gridApi]);

  function handleGridReady(event: GridReadyEvent) {
    if (onGridReady) {
      onGridReady(event);
    }
    setGridApi(event.api);
  }

  return (
    <Box
      className={theme}
      ref={ref}
      style={{ width: "100%"}}
    >
      <AgGridReact onGridReady={handleGridReady} domLayout = 'autoHeight'
    {...props} />
    </Box>
  );
}
