import { useState, useCallback } from "react";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import _debounce from "lodash/debounce";
import { DataHookInterface } from "../../interfaces/DataHook.interface";
import { boxHeaderStyles, textFieldStyling } from "./HeaderStyles";
import { NotificationHandlerDisplayComponent } from "../ErrorsAndNotifications/NotificationHandlerDisplayComponent";

export const Header: React.FC<{ dataHook: DataHookInterface }> = ({
  dataHook,
}) => {
  const [localInName, setLocalInName] = useState(dataHook.inName);
  const [localPageSize, setLocalPageSize] = useState(
    dataHook.pageSize.toString()
  );

  // debouncing the local values , so the taglist component will not re-render on every keystroke
  const handleInNameChangeDebounced = useCallback(
    _debounce((value: string) => {
      dataHook.setInName(value);
    }, 500),
    []
  );
  const handlePageSizeChangeDebounced = useCallback(
    _debounce((size: number) => {
      if (size >= 1 && size <= 100) {
        dataHook.setPageSize(size);
      }
    }, 500),
    []
  );

  const onInNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInName(event.target.value);
    handleInNameChangeDebounced(event.target.value);
  };

  const onPageSizeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSize = parseInt(event.target.value, 10);
    setLocalPageSize(event.target.value);
    handlePageSizeChangeDebounced(newSize);
  };

  const handleSubmission = () => {
    if (parseInt(localPageSize, 10) < 1 || parseInt(localPageSize, 10) > 100) {
      dataHook.setNotificationSnackMessage(
        "Page size must be between 1 and 100."
      );
      dataHook.setNotificationSnackOpen(true);
    } else {
      dataHook.setPage(1);
      dataHook.setTriggerFetch(true);
    }
  };

  const handleSnackClose = () => {
    dataHook.setNotificationSnackOpen(false);
  };

  return (
    <Box sx={boxHeaderStyles}>
      <TextField
        label="Tag labels"
        type="text"
        size="small"
        value={localInName}
        onChange={onInNameInputChange}
        sx={textFieldStyling}
      />

      <TextField
        label="Tags per page"
        type="number"
        size="small"
        value={localPageSize}
        onChange={onPageSizeInputChange}
        variant="outlined"
        inputProps={{ min: 1, max: 100 }}
        sx={textFieldStyling}
      />

      <Box
        sx={{
          display: "flex",
          gap: 5,
          "@media(max-width:768px)": {
            gap: 2,
          },
        }}
      >
        <TextField
          select
          size="small"
          value={dataHook.order}
          onChange={(e) => dataHook.setOrder(e.target.value)}
          sx={textFieldStyling}
          label="Order"
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </TextField>
        <TextField
          select
          size="small"
          value={dataHook.sort}
          onChange={(e) => dataHook.setSort(e.target.value)}
          sx={textFieldStyling}
          label="Sort by"
        >
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="activity">Activity</MenuItem>
        </TextField>
        <Button
          variant="contained"
          onClick={handleSubmission}
          sx={textFieldStyling}
        >
          Search
        </Button>
      </Box>
      <NotificationHandlerDisplayComponent
        open={dataHook.notificationSnackOpen}
        handleClose={handleSnackClose}
        notification={dataHook.notificationSnackMessage}
      />
    </Box>
  );
};
