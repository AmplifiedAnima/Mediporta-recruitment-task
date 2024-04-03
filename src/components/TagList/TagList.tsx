import { Box, CircularProgress, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { DataHookInterface } from "../../interfaces/DataHook.interface";
import { ApiError, TagsApiResponse } from "../../interfaces/TagsApi.interface";
import TagCard from "./Tags/TagCard";
import PaginationTagList from "./Pagination/PaginationTagList";
import { gridItemStyles } from "./TagListsStyles";
import { SimpleErrorInlineHandler } from "../ErrorsAndNotifications/SimpleErrorInlineHandler";
import React from "react";
import CenteredBox from "./CenteredBox";
import TagTable from "./Tags/TagTable";

const TagListComponent: React.FC<{
  dataHook: DataHookInterface;
}> = ({ dataHook }) => {
  const { data, error, isLoading } = useQuery<TagsApiResponse, ApiError>(
    [
      "tagsData",
      dataHook.inName,
      dataHook.page,
      dataHook.pageSize,
      dataHook.sort,
      dataHook.order,
    ],
    dataHook.fetchTags,
    {
      keepPreviousData: true,
      enabled: !!dataHook.triggerFetch,
      staleTime: Infinity,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        console.log(data);
        dataHook.setTriggerFetch(false);
      },
      onError: (err: ApiError) => {
        const detailedErrorMessage =
          err.details &&
          `Error ${err.details.error_id}: ${err.details.error_name} - ${err.details.error_message}`;
        dataHook.setErrorMessage(detailedErrorMessage!);
        dataHook.setErrorSnackOpen(true);
      },
    }
  );
  const handleCloseError = () => {
    dataHook.setErrorSnackOpen(false);
  };
  // console.log written to look how many times pages rerender , used to debug it sufficiently
  console.log(
    "dataHooksQueries",
    data,
    dataHook.inName,
    dataHook.page,
    dataHook.pageSize,
    dataHook.sort,
    dataHook.order,
    `dataPages`
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "15px" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <CenteredBox>
        <SimpleErrorInlineHandler
          open={dataHook.errorSnackOpen}
          error={dataHook.errorMessage}
          handleCloseError={handleCloseError}
        />
      </CenteredBox>
    );
  }
  if (!data?.items) {
    return (
      <CenteredBox>
        <TagCard tag={"search for Tags"} />
      </CenteredBox>
    );
  }

  if (!data?.items || data.items.length === 0) {
    return (
      <CenteredBox>
        <TagCard tag={"no Tags were found"} />
      </CenteredBox>
    );
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "5px" }}
      >
        <Box
          sx={{
            marginBottom: "50px", // Assume the pagination bar is 100px tall
            padding: "10px 0px",
            maxWidth: "700px",
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <TagTable tags={data.items} />
        </Box>
        <Grid item xs={12} sx={{ gridItemStyles }}>
          <PaginationTagList data={data} dataHook={dataHook} />
        </Grid>
      </Grid>
    </>
  );
};
// memoizing this component forbids unneccessary rerenders , allowing react query queries to work properly
export const TagList = React.memo(TagListComponent);
