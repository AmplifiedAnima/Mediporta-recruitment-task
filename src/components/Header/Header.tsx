import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import { DataHookInterface } from "../../interfaces/DataHook.interface";
import {
  textFieldStyling,
  boxHeaderStyles,
  inNameStyles,
} from "./HeaderStyles";

export const Header: React.FC<{ dataHook: DataHookInterface }> = ({
  dataHook,
}) => {

  const handleSubmission = () => {
    dataHook.setTriggerFetch(true);
    dataHook.setPage(1);
  };

  return (
    <Box sx={{ ...boxHeaderStyles }}>
      <TextField
        label="Search through tag label"
        type="text"
        value={dataHook.inName || ''}
        onChange={(e) => dataHook.setInName(e.target.value)}
        sx={{ ...inNameStyles }}
      />

      <TextField
        label="how many tags per page ?"
        type="number"
        value={dataHook.pageSize}
        onChange={(e) => dataHook.setPageSize(parseInt(e.target.value, 10))}
        variant="outlined"
        sx={{ ...textFieldStyling }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          "@media(max-width:768px)": {
            gap: 1,
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "nowrap",
            marginRight: "10px",
            "@media(max-width:768px)": {
             marginRight:'1px',
            },
          }}
        >
          SORT TAGS
        </Typography>

        <TextField
          select
          size="small"
          value={dataHook.order}
          onChange={(e) => dataHook.setOrder(e.target.value)}
          sx={{ width: "auto" }}
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
          sx={{ width: "auto" }}
          label="Sort by"
        >
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="activity">Activity</MenuItem>
        </TextField>
        <Button
          variant="contained"
          onClick={handleSubmission}
          sx={{
            backgroundColor: "#cd8de5",
            color: "white",
            maxWidth: "80px",
            display: "flex",
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "#b368d4",
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
