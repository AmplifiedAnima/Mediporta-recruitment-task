import { useState, useCallback } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import _debounce from "lodash/debounce";
import { DataHookInterface } from "../../interfaces/DataHook.interface";
import {
  boxHeaderStyles,
  InNameAndPageSizeStyles,
  textFieldStyling,
} from "./HeaderStyles";
import { NotificationHandlerDisplayComponent } from "../ErrorsAndNotifications/NotificationHandlerDisplayComponent";

export const Header: React.FC<{ dataHook: DataHookInterface }> = ({
  dataHook,
}) => {
  const [localInName, setLocalInName] = useState(dataHook.inName);
  const [localPageSize, setLocalPageSize] = useState(
    dataHook.pageSize.toString()
  );
  // debouncing the values , so the taglist component will not re-render on every keystroke

  const handleInNameChange = useCallback(
    _debounce((value: string) => {
      dataHook.setInName(value);
    }, 500),
    []
  );
  const handlePageSizeChange = useCallback(
    _debounce((size: number) => {
      if (size >= 1 && size <= 100) {
        dataHook.setPageSize(size);
      }
    }, 500),
    []
  );

  const onInNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInName(event.target.value);
    handleInNameChange(event.target.value);
  };

  const onPageSizeInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSize = parseInt(event.target.value, 10);
    setLocalPageSize(event.target.value);
    handlePageSizeChange(newSize);
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
        value={localInName}
        onChange={onInNameInputChange}
        sx={InNameAndPageSizeStyles}
      />

      <TextField
        label="Tags per page ?"
        type="number"
        value={localPageSize}
        onChange={onPageSizeInputChange}
        variant="outlined"
        inputProps={{ min: 1, max: 100 }}
        sx={InNameAndPageSizeStyles}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent:'right',
          gap: 5,
          "@media(max-width:768px)": {
            gap: 1,
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
