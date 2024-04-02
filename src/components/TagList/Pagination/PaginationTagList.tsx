import React from "react";
import { Box, Pagination, Typography } from "@mui/material";
import { DataHookInterface } from "../../../interfaces/DataHook.interface";
import { TagsApiResponse } from "../../../interfaces/TagsApi.interface";
import { paginationBoxStyles } from "./PaginationStyles";

const PaginationTagList: React.FC<{
  dataHook: DataHookInterface;
  data: TagsApiResponse | undefined;
}> = ({ dataHook, data }) => {
  return (
    <Box
      sx={{
        ...paginationBoxStyles,
        zIndex: 10000,
      }}
    >
      <Typography variant="subtitle2" sx={{ marginRight: "8px" }}>
        PAGES :
      </Typography>
      <Pagination
        count={data?.has_more ? dataHook.page + 1 : dataHook.page}
        page={dataHook.page}
        onChange={(_, value) => {
          if (
            (value > dataHook.page && data?.has_more) ||
            value < dataHook.page
          ) {
            dataHook.setPage(value);
            dataHook.setTriggerFetch(true);
          }
        }}
        siblingCount={0}
        boundaryCount={1}
        sx={{
          background: "linear-gradient(to left, #ffffff 10%,  #bcd9ea 60%)",
          borderRadius: "8px",
        }}
        showFirstButton
    
      />
    </Box>
  );
};

export default PaginationTagList;
